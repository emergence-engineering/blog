/**
 * Nodeview perf benchmark — runs one scenario, for one impl, per Playwright
 * invocation. The orchestrator (`scripts/run-nodeview-perf.ts`) iterates
 * `EDITOR_IMPL` × `PERF_SCENARIO` across runs.
 *
 *   EDITOR_IMPL    ∈ { v3-nv, v4-nv, v5-nv }
 *   PERF_SCENARIO  ∈ { typing, cold-load, cursor, ctx-flip }
 *
 * Reuses the same CDP `Performance.getMetrics` polling pattern as
 * `stress.spec.ts`, so output JSON drops straight into `create-graphs.ts`.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";
import {
  ACTIVE_METRICS,
  EDITOR_IMPL,
  IMPL_CONFIG,
  MAX_NODES,
  MEASUREMENT_INTERVAL,
  NODECOUNT_CHECKPOINT,
  PERF_COMPLEXITY,
  PERF_SCENARIO,
  perfFileFor,
  RESULTS_DIR,
  TIMEOUT,
} from "./constants";
import { computeStats, formatStatsLine, groupInteractions } from "./inp-stats";

const COMPLEXITY_PARAM = `complexity=${PERF_COMPLEXITY}`;

const SPEC_IMPLS = new Set([
  "v3-nv",
  "v4-nv",
  "v5-nv",
  "v3",
  "v4",
  "v5",
  "v3-snv",
  "v4-snv",
  "v5-snv",
]);
const isNvImpl = SPEC_IMPLS.has(EDITOR_IMPL);
const cfg = IMPL_CONFIG[EDITOR_IMPL];

function parseSizes(raw: string | undefined): number[] | null {
  if (!raw) return null;
  const parsed = raw
    .split(",")
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n > 0);
  return parsed.length > 0 ? parsed : null;
}

interface PerfSample {
  t: number;
  nodes: number;
  metrics: Record<string, number>;
}

interface ColdLoadSample {
  n: number;
  timeToVisibleMs: number;
  metrics: Record<string, number>;
}

test(`[PERF] nodeview ${PERF_SCENARIO} ${cfg?.label ?? EDITOR_IMPL}`, async ({ browser }) => {
  test.skip(!isNvImpl, `nodeview.spec.ts only runs for v{3,4,5}(-nv)?; got ${EDITOR_IMPL}`);
  test.setTimeout(TIMEOUT);
  mkdirSync(RESULTS_DIR, { recursive: true });

  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const session = await page.context().newCDPSession(page);
  await session.send("Performance.enable");

  if (PERF_SCENARIO === "typing") {
    await runTyping(page, session);
  } else if (PERF_SCENARIO === "cold-load") {
    await runColdLoad(page, session);
  } else if (PERF_SCENARIO === "cursor") {
    await runCursor(page, session);
  } else if (PERF_SCENARIO === "ctx-flip") {
    await runCtxFlip(page, session);
  } else if (PERF_SCENARIO === "keystroke-latency") {
    await runKeystrokeLatency(page);
  } else if (PERF_SCENARIO === "keystroke-inp") {
    await runKeystrokeInp(page);
  }

  await ctx.close();
});

interface CdpSession {
  send(method: "Performance.getMetrics"): Promise<{ metrics: { name: string; value: number }[] }>;
}

async function pollMetrics(
  session: CdpSession,
  page: import("@playwright/test").Page,
  startedAt: number,
  fallbackNodes: () => number,
): Promise<{ stop: () => void; samples: PerfSample[] }> {
  const samples: PerfSample[] = [];
  const interval = setInterval(async () => {
    const { metrics } = await session.send("Performance.getMetrics");
    const picked: Record<string, number> = {};
    for (const m of metrics) {
      if ((ACTIVE_METRICS as readonly string[]).includes(m.name)) picked[m.name] = m.value;
    }
    const liveN = await page
      .evaluate(() => (window as unknown as { __perfNodes?: number }).__perfNodes ?? 0)
      .catch(() => fallbackNodes());
    samples.push({ t: Date.now() - startedAt, nodes: liveN || fallbackNodes(), metrics: picked });
  }, MEASUREMENT_INTERVAL);
  return { stop: () => clearInterval(interval), samples };
}

async function runTyping(
  page: import("@playwright/test").Page,
  session: CdpSession,
): Promise<void> {
  await page.goto(`/perf-${EDITOR_IMPL}?${COMPLEXITY_PARAM}`);
  await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 15_000 });
  await page.locator(cfg.selector).click();

  const start = Date.now();
  let n = await page.locator(`${cfg.selector} > *`).count();
  const poll = await pollMetrics(session, page, start, () => n);

  const nodeSamples: { nodes: number; elapsedMs: number }[] = [];
  try {
    const browserSamples = await page.evaluate(
      async ({ maxNodes, checkpoint, selector, initialN }) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (!el) throw new Error(`selector ${selector} not found`);
        el.focus();
        const samples: { nodes: number; elapsedMs: number }[] = [];
        const tStart = Date.now();
        let count = initialN;
        (window as unknown as { __perfNodes?: number }).__perfNodes = count;
        const enterInit: KeyboardEventInit & { keyCode?: number; which?: number } = {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          bubbles: true,
          cancelable: true,
        };
        while (count < maxNodes) {
          for (const ch of "typing ") {
            el.dispatchEvent(
              new InputEvent("beforeinput", {
                inputType: "insertText",
                data: ch,
                bubbles: true,
                cancelable: true,
              }),
            );
          }
          el.dispatchEvent(new KeyboardEvent("keydown", enterInit));
          count++;
          await new Promise((r) => requestAnimationFrame(r));
          (window as unknown as { __perfNodes?: number }).__perfNodes = count;
          if (count % checkpoint === 0) {
            samples.push({ nodes: count, elapsedMs: Date.now() - tStart });
            await new Promise((r) => setTimeout(r, 0));
          }
        }
        return samples;
      },
      {
        maxNodes: MAX_NODES,
        checkpoint: NODECOUNT_CHECKPOINT,
        selector: cfg.selector,
        initialN: n,
      },
    );
    nodeSamples.push(...browserSamples);
    if (browserSamples.length) n = browserSamples[browserSamples.length - 1].nodes;
  } finally {
    poll.stop();
    writeFileSync(
      join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "typing", "perfMetrics")),
      JSON.stringify(poll.samples, null, 2),
    );
    writeFileSync(
      join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "typing", "nodecount")),
      JSON.stringify(nodeSamples, null, 2),
    );
    // eslint-disable-next-line no-console
    console.log(
      `[perf-nv:${EDITOR_IMPL}:typing] ${nodeSamples.length} node samples, ${poll.samples.length} perf samples, final nodes=${n}`,
    );
  }
}

async function runColdLoad(
  page: import("@playwright/test").Page,
  session: CdpSession,
): Promise<void> {
  const sizes = parseSizes(process.env.PERF_COLD_LOAD_SIZES) ?? [100, 500, 1000, 2500, 5000];
  // Per-size cap. At 50k paragraphs the slower React-rendered engines can
  // take a minute or more to mount; 5 min covers that comfortably.
  const perSizeTimeoutMs = Number(process.env.PERF_COLD_LOAD_TIMEOUT_MS ?? 300_000);
  const out: ColdLoadSample[] = [];

  for (const n of sizes) {
    const t0 = Date.now();
    await page.goto(`/perf-${EDITOR_IMPL}?n=${n}&${COMPLEXITY_PARAM}`);
    await expect(page.locator(cfg.selector)).toBeVisible({ timeout: perSizeTimeoutMs });
    // Wait until the page has settled enough to expose all paragraphs.
    await page.waitForFunction(
      ([sel, target]) => {
        const root = document.querySelector(sel as string);
        return root ? root.childElementCount >= (target as number) : false;
      },
      [cfg.selector, n] as const,
      { timeout: perSizeTimeoutMs },
    );
    const timeToVisibleMs = Date.now() - t0;
    const { metrics } = await session.send("Performance.getMetrics");
    const picked: Record<string, number> = {};
    for (const m of metrics) {
      if ((ACTIVE_METRICS as readonly string[]).includes(m.name)) picked[m.name] = m.value;
    }
    out.push({ n, timeToVisibleMs, metrics: picked });
    // eslint-disable-next-line no-console
    console.log(`[perf-nv:${EDITOR_IMPL}:cold-load] n=${n} timeToVisible=${timeToVisibleMs}ms`);
  }

  writeFileSync(
    join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "cold-load", "coldload")),
    JSON.stringify(out, null, 2),
  );
}

async function runCursor(
  page: import("@playwright/test").Page,
  session: CdpSession,
): Promise<void> {
  const seedN = Number(process.env.PERF_CURSOR_N ?? 10_000);
  await page.goto(`/perf-${EDITOR_IMPL}?n=${seedN}&${COMPLEXITY_PARAM}`);
  await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 60_000 });
  await page.waitForFunction(
    ([sel, target]) => {
      const root = document.querySelector(sel as string);
      return root ? root.childElementCount >= (target as number) : false;
    },
    [cfg.selector, seedN] as const,
    { timeout: 60_000 },
  );
  await page.locator(cfg.selector).click();

  const start = Date.now();
  const poll = await pollMetrics(session, page, start, () => seedN);

  try {
    await page.evaluate(
      async ({ selector, presses }) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (!el) throw new Error(`selector ${selector} not found`);
        el.focus();
        const init: KeyboardEventInit & { keyCode?: number; which?: number } = {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
          bubbles: true,
          cancelable: true,
        };
        for (let i = 0; i < presses; i++) {
          el.dispatchEvent(new KeyboardEvent("keydown", init));
          await new Promise((r) => requestAnimationFrame(r));
        }
      },
      { selector: cfg.selector, presses: 400 },
    );
  } finally {
    poll.stop();
    writeFileSync(
      join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "cursor", "cursor")),
      JSON.stringify(poll.samples, null, 2),
    );
    // eslint-disable-next-line no-console
    console.log(
      `[perf-nv:${EDITOR_IMPL}:cursor] ${poll.samples.length} perf samples over ${Date.now() - start}ms`,
    );
  }
}

async function runCtxFlip(
  page: import("@playwright/test").Page,
  session: CdpSession,
): Promise<void> {
  const seedN = Number(process.env.PERF_CTX_FLIP_N ?? 4_000);
  await page.goto(`/perf-${EDITOR_IMPL}?n=${seedN}&${COMPLEXITY_PARAM}`);
  await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 60_000 });
  await page.waitForFunction(
    ([sel, target]) => {
      const root = document.querySelector(sel as string);
      return root ? root.childElementCount >= (target as number) : false;
    },
    [cfg.selector, seedN] as const,
    { timeout: 60_000 },
  );
  await page.waitForFunction(
    () => Boolean((window as unknown as { __perfNodeview?: unknown }).__perfNodeview),
    undefined,
    { timeout: 15_000 },
  );

  const start = Date.now();
  const poll = await pollMetrics(session, page, start, () => seedN);

  try {
    await page.evaluate(
      async ({ flips }) => {
        const api = (window as unknown as { __perfNodeview?: { setCtx: (v: number) => void } })
          .__perfNodeview;
        if (!api) throw new Error("__perfNodeview hook missing");
        for (let i = 0; i < flips; i++) {
          api.setCtx(i + 1);
          await new Promise((r) => requestAnimationFrame(r));
        }
      },
      { flips: 500 },
    );
  } finally {
    poll.stop();
    writeFileSync(
      join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "ctx-flip", "ctxflip")),
      JSON.stringify(poll.samples, null, 2),
    );
    // eslint-disable-next-line no-console
    console.log(
      `[perf-nv:${EDITOR_IMPL}:ctx-flip] ${poll.samples.length} perf samples over ${Date.now() - start}ms`,
    );
  }
}

async function runKeystrokeLatency(page: import("@playwright/test").Page): Promise<void> {
  const seedN = Number(process.env.PERF_KEYSTROKE_N ?? 2_000);
  const count = Number(process.env.PERF_KEYSTROKE_COUNT ?? 1_000);

  await page.goto(`/perf-${EDITOR_IMPL}?n=${seedN}&${COMPLEXITY_PARAM}`);
  await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 60_000 });
  await page.waitForFunction(
    ([sel, target]) => {
      const root = document.querySelector(sel as string);
      return root ? root.childElementCount >= (target as number) : false;
    },
    [cfg.selector, seedN] as const,
    { timeout: 60_000 },
  );
  await page.locator(cfg.selector).click();

  const samples = await page.evaluate(
    async ({ selector, count }) => {
      const el = document.querySelector(selector) as HTMLElement | null;
      if (!el) throw new Error(`selector ${selector} not found`);
      el.focus();

      // Place caret at end of last paragraph so insertText appends in place
      const sel = window.getSelection();
      const last = el.lastElementChild ?? el;
      if (sel) {
        sel.removeAllRanges();
        const range = document.createRange();
        range.selectNodeContents(last);
        range.collapse(false);
        sel.addRange(range);
      }

      // Warmup — first frame's latency includes selection plumbing, drop it.
      el.dispatchEvent(
        new InputEvent("beforeinput", {
          inputType: "insertText",
          data: "a",
          bubbles: true,
          cancelable: true,
        }),
      );
      await new Promise((r) => requestAnimationFrame(() => r(undefined)));

      const out: { idx: number; latencyMs: number }[] = [];
      for (let i = 0; i < count; i++) {
        const t0 = performance.now();
        el.dispatchEvent(
          new InputEvent("beforeinput", {
            inputType: "insertText",
            data: "a",
            bubbles: true,
            cancelable: true,
          }),
        );
        await new Promise((r) => requestAnimationFrame(() => r(undefined)));
        out.push({ idx: i, latencyMs: performance.now() - t0 });
      }
      return out;
    },
    { selector: cfg.selector, count },
  );

  writeFileSync(
    join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "keystroke-latency", "latency")),
    JSON.stringify(samples, null, 2),
  );

  const sorted = samples.map((s) => s.latencyMs).sort((a, b) => a - b);
  const p = (q: number) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
  // eslint-disable-next-line no-console
  console.log(
    `[perf-nv:${EDITOR_IMPL}:keystroke-latency] n=${samples.length} p50=${p(0.5).toFixed(2)}ms p95=${p(0.95).toFixed(2)}ms p99=${p(0.99).toFixed(2)}ms max=${sorted[sorted.length - 1].toFixed(2)}ms mean=${(sorted.reduce((s, v) => s + v, 0) / sorted.length).toFixed(2)}ms`,
  );
}

/**
 * Real-world keystroke latency via the Event Timing API.
 *
 * Unlike `keystroke-latency` (which dispatches synthetic `beforeinput` events
 * from JS and measures one rAF tick), this scenario uses Playwright's
 * `page.keyboard.press()` to drive the real Chromium input pipeline
 * (hardware → renderer → JS handler → DOM mutation → style/layout → paint),
 * and collects `PerformanceEventTiming` entries to recover Chrome's own INP
 * breakdown:
 *
 *   inputDelay        = processingStart - startTime
 *   processingDuration= processingEnd   - processingStart
 *   presentationDelay = (startTime + duration) - processingEnd
 *   duration          = startTime → next paint (Event Timing's INP)
 *
 * Events from one keypress (keydown / beforeinput / input / keyup) share an
 * `interactionId`. Per the Web Vitals INP definition we take the MAX duration
 * across each interaction's events.
 *
 * Note: `durationThreshold` minimum allowed by the spec is 16ms, so single
 * keystrokes that complete and paint in <16ms are not reported. In practice
 * presentation delay (vsync wait) alone exceeds 16ms, so virtually every real
 * keystroke is captured.
 */
async function runKeystrokeInp(page: import("@playwright/test").Page): Promise<void> {
  const seedN = Number(process.env.PERF_KEYSTROKE_N ?? 2_000);
  const count = Number(process.env.PERF_KEYSTROKE_COUNT ?? 200);
  const pacingMs = Number(process.env.PERF_KEYSTROKE_PACING_MS ?? 50);

  await page.goto(`/perf-${EDITOR_IMPL}?n=${seedN}&${COMPLEXITY_PARAM}`);
  await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 60_000 });
  await page.waitForFunction(
    ([sel, target]) => {
      const root = document.querySelector(sel as string);
      return root ? root.childElementCount >= (target as number) : false;
    },
    [cfg.selector, seedN] as const,
    { timeout: 60_000 },
  );

  // Set up the Event Timing collector before any input. `durationThreshold: 16`
  // is the spec minimum; entries shorter than that are not reported by Chrome.
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
      __inpObserver: PerformanceObserver;
    };
    w.__inpEntries = [];
    // `interactionId` is on the Event Timing L1 spec but missing from lib.dom
    // in older TS versions, so widen the type locally.
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
      buffered: true,
      durationThreshold: 16,
    } as PerformanceObserverInit);
    w.__inpObserver = observer;
  });

  // Focus + caret at end so each 'a' appends to the last paragraph.
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

  // Warmup keystroke (its latency includes first-frame plumbing).
  await page.keyboard.press("a");
  await page.evaluate(
    () => new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r()))),
  );

  // Measured loop. Pace between keys so each press is its own interaction
  // (otherwise Chrome may merge rapid presses into one interactionId).
  for (let i = 0; i < count; i++) {
    await page.keyboard.press("a");
    await page.waitForTimeout(pacingMs);
  }

  // Flush: give the observer one more paint cycle to deliver final entries.
  await page.waitForTimeout(200);

  const entries = await page.evaluate(() => {
    interface InpEntry {
      name: string;
      interactionId: number;
      startTime: number;
      processingStart: number;
      processingEnd: number;
      duration: number;
    }
    const w = window as unknown as { __inpEntries: InpEntry[]; __inpObserver: PerformanceObserver };
    w.__inpObserver.disconnect();
    return w.__inpEntries;
  });

  const interactions = groupInteractions(entries);

  writeFileSync(
    join(RESULTS_DIR, perfFileFor(EDITOR_IMPL, "keystroke-inp", "latency")),
    JSON.stringify({ entries, interactions }, null, 2),
  );

  const stats = computeStats(interactions);
  if (!stats) {
    // eslint-disable-next-line no-console
    console.log(
      `[perf-nv:${EDITOR_IMPL}:keystroke-inp] WARNING: 0 interactions recorded — every keystroke completed in <16ms (Event Timing's durationThreshold minimum). Try a more complex doc, slower CPU, or higher seed n.`,
    );
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`[perf-nv:${EDITOR_IMPL}:keystroke-inp] n=${stats.count} ${formatStatsLine(stats)}`);
}
