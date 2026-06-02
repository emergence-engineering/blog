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
  PERF_SERVER_PORT,
  RESULTS_DIR,
  routeFor,
  TIMEOUT,
} from "./constants";

const API = `http://localhost:${PERF_SERVER_PORT}`;
const cfg = IMPL_CONFIG[EDITOR_IMPL];

/**
 * Wall mode: keep typing until the editor crashes / becomes unusable.
 * Enabled with `PERF_STRESS_WALL=1`. Wall is declared on the first of:
 *   • JSHeapUsedSize > PERF_WALL_HEAP_BYTES (default 3.5 GB)
 *   • A single 200-node batch takes > PERF_WALL_BATCH_MS (default 30 s)
 *   • The renderer dies / page.evaluate rejects
 *   • PERF_WALL_MAX_NODES safety cap is hit (default 500 000)
 *
 * Wall mode writes sidecar files so existing baselines stay intact:
 *   ${impl}-stress-wall-perfMetrics.json
 *   ${impl}-stress-wall-nodecount.json
 *   ${impl}-stress-wall-meta.json    (reason, nodes, elapsedMs, heapBytes)
 */
const WALL_MODE = process.env.PERF_STRESS_WALL === "1";
const WALL_HEAP_LIMIT_BYTES = Number(process.env.PERF_WALL_HEAP_BYTES ?? 3.5e9);
const WALL_BATCH_TIMEOUT_MS = Number(process.env.PERF_WALL_BATCH_MS ?? 30_000);
const WALL_MAX_NODES_CAP = Number(process.env.PERF_WALL_MAX_NODES ?? 500_000);
const EFFECTIVE_MAX_NODES = WALL_MODE ? WALL_MAX_NODES_CAP : MAX_NODES;

interface PerfSample {
  t: number;
  nodes: number;
  metrics: Record<string, number>;
}

interface NodeSample {
  nodes: number;
  elapsedMs: number;
}

type WallReason = "heap" | "slow-batch" | "crash" | "max-nodes" | "timeout" | "ok";

interface WallMeta {
  reason: WallReason;
  nodes: number;
  elapsedMs: number;
  lastHeapBytes: number;
  slowestBatchMs: number;
}

test(`[PERF] stress${WALL_MODE ? "-wall" : ""} ${cfg.label}`, async ({ browser }) => {
  test.setTimeout(TIMEOUT);
  mkdirSync(RESULTS_DIR, { recursive: true });

  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  if (EDITOR_IMPL === "v3" || EDITOR_IMPL === "v4" || EDITOR_IMPL === "v5") {
    await page.goto(routeFor(EDITOR_IMPL));
    await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 15_000 });
  } else {
    const create = await ctx.request.post(`${API}/api/documents`, {
      data: { title: `perf-${cfg.key}-${Date.now()}`, markdown: "" },
    });
    expect(create.status(), `anon-create returned ${create.status()}`).toBe(201);
    const { slug } = (await create.json()) as { slug: string };

    await page.goto(`/d/${slug}`);
    await expect(page.locator(cfg.selector)).toBeVisible({ timeout: 15_000 });
    await expect(page.getByLabel("Sync status: Synced")).toBeVisible({
      timeout: 30_000,
    });
  }
  await page.locator(cfg.selector).click();

  const session = await page.context().newCDPSession(page);
  await session.send("Performance.enable");

  const perfSamples: PerfSample[] = [];
  const nodeSamples: NodeSample[] = [];
  const start = Date.now();
  let n = await page.locator(`${cfg.selector} > *`).count();

  // Mutable wall state — populated by the outer monitor or the inner loop.
  const wall: WallMeta = {
    reason: "ok",
    nodes: n,
    elapsedMs: 0,
    lastHeapBytes: 0,
    slowestBatchMs: 0,
  };

  const setStopFlag = async (reason: WallReason) => {
    if (wall.reason !== "ok") return;
    wall.reason = reason;
    await page
      .evaluate(() => {
        (window as unknown as { __perfStop?: boolean }).__perfStop = true;
      })
      .catch(() => undefined);
  };

  const metricInterval = setInterval(async () => {
    const { metrics } = await session.send("Performance.getMetrics");
    const picked: Record<string, number> = {};
    for (const m of metrics) {
      if ((ACTIVE_METRICS as readonly string[]).includes(m.name)) picked[m.name] = m.value;
    }
    const liveN = await page
      .evaluate(() => (window as unknown as { __perfNodes?: number }).__perfNodes ?? 0)
      .catch(() => n);
    perfSamples.push({ t: Date.now() - start, nodes: liveN || n, metrics: picked });

    if (WALL_MODE) {
      const heap = picked.JSHeapUsedSize ?? 0;
      wall.lastHeapBytes = heap;
      if (heap > WALL_HEAP_LIMIT_BYTES && wall.reason === "ok") {
        // eslint-disable-next-line no-console
        console.log(
          `[perf:${cfg.key}:wall] heap ${(heap / 1e9).toFixed(2)} GB > limit ${(WALL_HEAP_LIMIT_BYTES / 1e9).toFixed(2)} GB at ${liveN} nodes — stopping`,
        );
        await setStopFlag("heap");
      }
    }
  }, MEASUREMENT_INTERVAL);

  try {
    const browserSamples = await page.evaluate(
      async ({ maxNodes, checkpoint, selector, initialN, wallMode, batchTimeoutMs }) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (!el) throw new Error(`selector ${selector} not found`);
        el.focus();

        const samples: { nodes: number; elapsedMs: number }[] = [];
        const tStart = Date.now();
        let count = initialN;
        let lastCheckpointAt = tStart;
        let slowestBatchMs = 0;
        (window as unknown as { __perfNodes?: number; __perfStop?: boolean }).__perfNodes = count;
        (window as unknown as { __perfStop?: boolean }).__perfStop = false;

        const enterInit: KeyboardEventInit & { keyCode?: number; which?: number } = {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          bubbles: true,
          cancelable: true,
        };

        let bailReason: "ok" | "slow-batch" | "stopped" = "ok";

        while (count < maxNodes) {
          if ((window as unknown as { __perfStop?: boolean }).__perfStop) {
            bailReason = "stopped";
            break;
          }

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

          if (count % checkpoint === 0) {
            (window as unknown as { __perfNodes?: number }).__perfNodes = count;
            const now = Date.now();
            const batchMs = now - lastCheckpointAt;
            lastCheckpointAt = now;
            if (batchMs > slowestBatchMs) slowestBatchMs = batchMs;
            samples.push({ nodes: count, elapsedMs: now - tStart });
            if (wallMode && batchMs > batchTimeoutMs) {
              bailReason = "slow-batch";
              break;
            }
            // Yield once per checkpoint, not per cycle: lets the browser paint,
            // the outer CDP poller fire, and __perfStop become visible — but
            // doesn't cap throughput at 1 node/frame (~60Hz) the way a per-cycle
            // rAF would. Engine cost between checkpoints is now measured at
            // full speed, which is the point of this test.
            await new Promise((r) => requestAnimationFrame(r));
          }
        }
        return { samples, bailReason, finalCount: count, slowestBatchMs };
      },
      {
        maxNodes: EFFECTIVE_MAX_NODES,
        checkpoint: NODECOUNT_CHECKPOINT,
        selector: cfg.selector,
        initialN: n,
        wallMode: WALL_MODE,
        batchTimeoutMs: WALL_BATCH_TIMEOUT_MS,
      },
    );

    nodeSamples.push(...browserSamples.samples);
    n = browserSamples.finalCount;
    wall.nodes = n;
    wall.slowestBatchMs = browserSamples.slowestBatchMs;
    if (WALL_MODE && wall.reason === "ok") {
      if (browserSamples.bailReason === "slow-batch") {
        wall.reason = "slow-batch";
      } else if (browserSamples.bailReason === "stopped") {
        // outer monitor already set wall.reason (heap, etc.); leave as-is
      } else if (n >= EFFECTIVE_MAX_NODES) {
        wall.reason = "max-nodes";
      }
    }
  } catch (err) {
    if (WALL_MODE) {
      wall.reason = "crash";
      // eslint-disable-next-line no-console
      console.log(`[perf:${cfg.key}:wall] renderer crash / evaluate rejected: ${String(err)}`);
    } else {
      throw err;
    }
  } finally {
    clearInterval(metricInterval);
    wall.elapsedMs = Date.now() - start;

    const perfFile = WALL_MODE ? `${cfg.key}-stress-wall-perfMetrics.json` : cfg.perfMetricsFile;
    const nodeFile = WALL_MODE ? `${cfg.key}-stress-wall-nodecount.json` : cfg.nodeCountFile;
    writeFileSync(join(RESULTS_DIR, perfFile), JSON.stringify(perfSamples, null, 2));
    writeFileSync(join(RESULTS_DIR, nodeFile), JSON.stringify(nodeSamples, null, 2));
    if (WALL_MODE) {
      writeFileSync(
        join(RESULTS_DIR, `${cfg.key}-stress-wall-meta.json`),
        JSON.stringify(wall, null, 2),
      );
      // eslint-disable-next-line no-console
      console.log(
        `[perf:${cfg.key}:wall] reason=${wall.reason} nodes=${wall.nodes} elapsedMs=${wall.elapsedMs} slowestBatchMs=${wall.slowestBatchMs} heapBytes=${wall.lastHeapBytes}`,
      );
    } else {
      // eslint-disable-next-line no-console
      console.log(
        `[perf:${cfg.key}] ${nodeSamples.length} node samples, ${perfSamples.length} perf samples, final nodes=${n}`,
      );
    }
  }

  await ctx.close();
});
