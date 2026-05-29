/**
 * Keystroke latency ramp — find the node count at which typing starts to
 * feel laggy in each `-snv` editor implementation.
 *
 * One persistent editor session per impl. Start empty, then loop:
 *   1. Grow doc by KEYSTROKE_RAMP_STEP nodes (skipped on iter 0).
 *   2. Reset INP collector. Start CDP Tracing.
 *   3. Fire KEYSTROKE_RAMP_PRESSES paced keystrokes via real Chromium input.
 *   4. Stop trace, compute per-iteration INP stats (p50/p95/p99 + breakdown).
 *   5. Bail when p95 > KEYSTROKE_LAG_P95_MS for two CONSECUTIVE iterations.
 *      The FIRST crossing is recorded as the lag breakpoint.
 *
 * Trace files persisted: baseline (iter 0) and the confirming bail iteration.
 * The trace JSON format matches Chrome DevTools' "Load profile…" — drag the
 * file into the Performance tab to inspect the Interactions lane and flame
 * chart that produced the recorded latencies.
 *
 * Each invocation runs ONE impl (set via EDITOR_IMPL). The sweep across
 * impls lives in `scripts/run-keystroke-ramp.ts`.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";
import {
  EDITOR_IMPL,
  IMPL_CONFIG,
  KEYSTROKE_LAG_P95_MS,
  KEYSTROKE_RAMP_IMPLS,
  KEYSTROKE_RAMP_MAX_ITER,
  KEYSTROKE_RAMP_PACING_MS,
  KEYSTROKE_RAMP_PRESSES,
  KEYSTROKE_RAMP_STEP,
  RESULTS_DIR,
  TIMEOUT,
} from "./constants";
import {
  computeStats,
  formatStatsLine,
  groupInteractions,
  type InpEntry,
  type InpStats,
} from "./inp-stats";

const IS_RAMP_IMPL = (KEYSTROKE_RAMP_IMPLS as readonly string[]).includes(EDITOR_IMPL);
const cfg = IMPL_CONFIG[EDITOR_IMPL];

interface IterationResult {
  iter: number;
  n: number;
  stats: InpStats | null;
}

interface RampSummary {
  impl: string;
  stepSize: number;
  pressesPerIter: number;
  thresholdMs: number;
  maxIter: number;
  iterations: IterationResult[];
  breakpointN: number | null;
  bailReason: "p95-threshold" | "safety-cap" | "early-error";
}

test(`[PERF] keystroke-ramp ${cfg?.label ?? EDITOR_IMPL}`, async ({ browser }) => {
  test.skip(
    !IS_RAMP_IMPL,
    `keystroke-ramp only runs for ${KEYSTROKE_RAMP_IMPLS.join(", ")}; got ${EDITOR_IMPL}`,
  );
  test.setTimeout(TIMEOUT);
  mkdirSync(RESULTS_DIR, { recursive: true });

  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const session = await page.context().newCDPSession(page);

  // Single page load. Grow doc programmatically between iterations via the
  // window.__perfGrow(k) hook exposed by each -snv page.
  await page.goto(`/perf-${EDITOR_IMPL}`);
  await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 30_000 });
  await page.waitForFunction(
    () => typeof (window as unknown as { __perfGrow?: unknown }).__perfGrow === "function",
    undefined,
    { timeout: 15_000 },
  );

  const iterations: IterationResult[] = [];
  let breakpointN: number | null = null;
  let bailReason: RampSummary["bailReason"] = "safety-cap";

  for (let iter = 0; iter < KEYSTROKE_RAMP_MAX_ITER; iter++) {
    if (iter > 0) {
      await page.evaluate((k) => {
        const fn = (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow;
        if (!fn) throw new Error("__perfGrow missing");
        fn(k);
      }, KEYSTROKE_RAMP_STEP);
    }

    const n = await page.evaluate(
      () => (window as unknown as { __perfNodes?: number }).__perfNodes ?? 0,
    );

    // Fresh Event Timing observer per iteration so we don't leak entries
    // across the n-boundary. `durationThreshold: 16` is the spec minimum.
    await page.evaluate(() => {
      interface InpEntry {
        name: string;
        interactionId: number;
        startTime: number;
        processingStart: number;
        processingEnd: number;
        duration: number;
      }
      const w = window as unknown as {
        __inpEntries: InpEntry[];
        __inpObserver?: PerformanceObserver;
      };
      if (w.__inpObserver) w.__inpObserver.disconnect();
      w.__inpEntries = [];
      type EventTimingEntry = PerformanceEventTiming & { interactionId: number };
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const e = entry as EventTimingEntry;
          if (!e.interactionId) continue;
          w.__inpEntries.push({
            name: e.name,
            interactionId: e.interactionId,
            startTime: e.startTime,
            processingStart: e.processingStart,
            processingEnd: e.processingEnd,
            duration: e.duration,
          });
        }
      });
      observer.observe({
        type: "event",
        buffered: false,
        durationThreshold: 16,
      } as PerformanceObserverInit);
      w.__inpObserver = observer;
    });

    // Position caret at end of last child so each keypress appends in place.
    await page.locator(cfg.selector).click();
    await page.evaluate((selector) => {
      const el = document.querySelector(selector) as HTMLElement | null;
      if (!el) return;
      el.focus();
      const sel = window.getSelection();
      const last = el.lastElementChild ?? el;
      if (sel) {
        sel.removeAllRanges();
        const range = document.createRange();
        range.selectNodeContents(last);
        range.collapse(false);
        sel.addRange(range);
      }
    }, cfg.selector);

    // Start CDP trace covering this iteration's keystroke loop.
    // Categories mirror what DevTools' Performance panel records by default
    // (Interactions lane + main-thread flame chart).
    const traceEvents: unknown[] = [];
    const onDataCollected = (params: { value: unknown[] }): void => {
      traceEvents.push(...params.value);
    };
    session.on("Tracing.dataCollected", onDataCollected);
    await session.send("Tracing.start", {
      transferMode: "ReportEvents",
      traceConfig: {
        recordMode: "recordContinuously",
        includedCategories: [
          "devtools.timeline",
          "v8.execute",
          "latencyInfo",
          "blink.user_timing",
          "disabled-by-default-devtools.timeline",
          "disabled-by-default-devtools.timeline.frame",
        ],
      },
    } as Record<string, unknown>);

    // Warmup keystroke (first-frame plumbing). Not counted toward stats —
    // the observer resets just above, so this entry simply records and is
    // included; for clarity we accept that the warmup is in-band.
    await page.keyboard.press("a");
    await page.evaluate(
      () => new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r()))),
    );

    // Measured loop. Pacing controls whether presses are isolated (50 ms each
    // is its own interactionId) or coalesced (e.g. 10 ms — Chromium merges
    // consecutive presses into one interaction whose duration spans first
    // key → paint after last key, matching real fast typing).
    for (let i = 0; i < KEYSTROKE_RAMP_PRESSES; i++) {
      await page.keyboard.press("a");
      if (KEYSTROKE_RAMP_PACING_MS > 0) await page.waitForTimeout(KEYSTROKE_RAMP_PACING_MS);
    }

    // Flush: one more paint cycle so the observer captures tail entries.
    await page.waitForTimeout(250);

    // Stop trace and wait for the tail of dataCollected events.
    const tracingComplete = new Promise<void>((resolve) => {
      session.once("Tracing.tracingComplete", () => resolve());
    });
    await session.send("Tracing.end");
    await tracingComplete;
    session.off("Tracing.dataCollected", onDataCollected);

    const entries = await page.evaluate((): InpEntry[] => {
      const w = window as unknown as { __inpEntries: InpEntry[] };
      return w.__inpEntries;
    });

    const interactions = groupInteractions(entries);
    const stats = computeStats(interactions);
    iterations.push({ iter, n, stats });

    const tag = `[perf-ramp:${EDITOR_IMPL}] iter=${iter} n=${n}`;
    if (!stats) {
      // eslint-disable-next-line no-console
      console.log(`${tag} WARNING: 0 interactions recorded (sub-16ms keystrokes?)`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`${tag} ${formatStatsLine(stats)}`);
    }

    // Persist baseline trace.
    if (iter === 0) {
      writeFileSync(
        join(RESULTS_DIR, `${EDITOR_IMPL}-keystroke-ramp-baseline.trace.json`),
        JSON.stringify({ traceEvents }),
      );
    }

    // Bail check: two consecutive iterations with p95 > threshold.
    const prev = iterations[iterations.length - 2];
    const overNow = stats !== null && stats.p95 > KEYSTROKE_LAG_P95_MS;
    const overPrev = prev?.stats != null && prev.stats.p95 > KEYSTROKE_LAG_P95_MS;
    if (overNow && overPrev) {
      breakpointN = prev.n; // First crossing.
      bailReason = "p95-threshold";
      writeFileSync(
        join(RESULTS_DIR, `${EDITOR_IMPL}-keystroke-ramp-bail-n${n}.trace.json`),
        JSON.stringify({ traceEvents }),
      );
      // eslint-disable-next-line no-console
      console.log(
        `${tag} BAIL: two consecutive iterations over ${KEYSTROKE_LAG_P95_MS}ms p95; lag breakpoint at n=${breakpointN}`,
      );
      break;
    }
  }

  const summary: RampSummary = {
    impl: EDITOR_IMPL,
    stepSize: KEYSTROKE_RAMP_STEP,
    pressesPerIter: KEYSTROKE_RAMP_PRESSES,
    thresholdMs: KEYSTROKE_LAG_P95_MS,
    maxIter: KEYSTROKE_RAMP_MAX_ITER,
    iterations,
    breakpointN,
    bailReason,
  };
  writeFileSync(
    join(RESULTS_DIR, `${EDITOR_IMPL}-keystroke-ramp-summary.json`),
    JSON.stringify(summary, null, 2),
  );

  if (breakpointN == null) {
    // eslint-disable-next-line no-console
    console.log(
      `[perf-ramp:${EDITOR_IMPL}] safety cap reached at ${KEYSTROKE_RAMP_MAX_ITER} iterations; no lag breakpoint found within ${KEYSTROKE_RAMP_MAX_ITER * KEYSTROKE_RAMP_STEP} nodes`,
    );
  }

  await ctx.close();
});
