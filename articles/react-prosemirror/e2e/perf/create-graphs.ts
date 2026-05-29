/// <reference types="node" />
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import {
  ACTIVE_METRICS,
  type EditorImpl,
  IMPL_CONFIG,
  type MetricName,
  type PerfScenario,
  perfFileFor,
  RESULTS_DIR,
} from "./constants";

interface PerfSample {
  t: number;
  nodes: number;
  metrics: Record<string, number>;
}
interface NodeSample {
  nodes: number;
  elapsedMs: number;
}
interface ColdLoadSample {
  n: number;
  timeToVisibleMs: number;
  metrics: Record<string, number>;
}

const WIDTH = 1200;
const HEIGHT = 600;

const canvas = new ChartJSNodeCanvas({
  width: WIDTH,
  height: HEIGHT,
  backgroundColour: "white",
});

const VALID_IMPLS: EditorImpl[] = [
  "v1",
  "v2",
  "v3",
  "v4",
  "v5",
  "v3-nv",
  "v4-nv",
  "v5-nv",
  "v3-snv",
  "v4-snv",
  "v5-snv",
];
const DEFAULT_IMPLS: EditorImpl[] = ["v1", "v2"];
type GraphScenario = PerfScenario | "keystroke-ramp";
const VALID_SCENARIOS: GraphScenario[] = [
  "typing",
  "cold-load",
  "cursor",
  "ctx-flip",
  "keystroke-ramp",
];
const GRAPH_SCENARIO: GraphScenario = (() => {
  const raw = process.env.GRAPH_SCENARIO as GraphScenario | undefined;
  return raw && VALID_SCENARIOS.includes(raw) ? raw : "typing";
})();

const impls: EditorImpl[] = (() => {
  const raw = process.env.GRAPH_IMPLS;
  if (!raw) return DEFAULT_IMPLS;
  const parsed = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is EditorImpl => (VALID_IMPLS as string[]).includes(s));
  return parsed.length > 0 ? parsed : DEFAULT_IMPLS;
})();

// Use legacy filenames (no suffix) only when graphing the default v1+v2 pair
// for the default "typing" scenario; any other selection gets a suffix.
const isDefaultSet =
  impls.length === DEFAULT_IMPLS.length && impls.every((i, idx) => i === DEFAULT_IMPLS[idx]);
const filenameSuffix =
  isDefaultSet && GRAPH_SCENARIO === "typing"
    ? ""
    : `-${impls.join("-")}${GRAPH_SCENARIO === "typing" ? "" : `-${GRAPH_SCENARIO}`}`;

interface LatencySample {
  idx: number;
  latencyMs: number;
}

interface ImplData {
  impl: EditorImpl;
  perf: PerfSample[];
  nodes: NodeSample[];
  coldload: ColdLoadSample[];
  latency: LatencySample[];
}

function perfKindFor(scenario: PerfScenario): "perfMetrics" | "cursor" | "ctxflip" {
  if (scenario === "cursor") return "cursor";
  if (scenario === "ctx-flip") return "ctxflip";
  return "perfMetrics";
}

const datasets: ImplData[] =
  GRAPH_SCENARIO === "keystroke-ramp"
    ? []
    : impls.map((impl) => ({
        impl,
        perf:
          GRAPH_SCENARIO === "cold-load" || GRAPH_SCENARIO === "keystroke-latency"
            ? []
            : loadJson<PerfSample[]>(
                perfFileFor(impl, GRAPH_SCENARIO, perfKindFor(GRAPH_SCENARIO)),
              ),
        nodes:
          GRAPH_SCENARIO === "typing"
            ? loadJson<NodeSample[]>(IMPL_CONFIG[impl].nodeCountFile)
            : [],
        coldload:
          GRAPH_SCENARIO === "cold-load"
            ? loadJson<ColdLoadSample[]>(perfFileFor(impl, "cold-load", "coldload"))
            : [],
        latency:
          GRAPH_SCENARIO === "keystroke-latency"
            ? loadJson<LatencySample[]>(perfFileFor(impl, "keystroke-latency", "latency"))
            : [],
      }));

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main(): Promise<void> {
  if (GRAPH_SCENARIO === "keystroke-ramp") {
    await renderKeystrokeRamp();
  } else if (GRAPH_SCENARIO === "cold-load") {
    await renderColdLoad();
  } else if (GRAPH_SCENARIO === "keystroke-latency") {
    await renderKeystrokeLatency();
  } else if (GRAPH_SCENARIO === "typing") {
    await renderNodeCountVsTime();
    for (const metric of ACTIVE_METRICS) {
      await renderCombined(metric);
      for (const d of datasets) {
        await renderSingle(d.impl, metric, d.perf);
      }
    }
  } else {
    // cursor / ctx-flip — perf samples over time
    for (const metric of ACTIVE_METRICS) {
      await renderCombinedOverTime(metric);
    }
  }
  console.log(
    `graphs written to ${RESULTS_DIR} (scenario=${GRAPH_SCENARIO}, impls=${impls.join(",")})`,
  );
}

async function renderCombined(metric: MetricName): Promise<void> {
  const chartDatasets: ChartDataset[] = [];
  for (const d of datasets) {
    const points = perfPoints(d.perf, metric);
    if (points.length === 0) continue;
    const cfg = IMPL_CONFIG[d.impl];
    chartDatasets.push({
      label: cfg.label,
      data: points,
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 0,
      tension: 0.2,
    });
  }
  if (chartDatasets.length === 0) return;

  await writeChart(`combined${filenameSuffix}-${metric}.png`, {
    title: `${metric} vs node count`,
    xLabel: "node count",
    yLabel: yLabelFor(metric),
    datasets: chartDatasets,
  });
}

async function renderSingle(
  impl: EditorImpl,
  metric: MetricName,
  samples: PerfSample[],
): Promise<void> {
  const data = perfPoints(samples, metric);
  if (data.length === 0) return;
  const cfg = IMPL_CONFIG[impl];
  await writeChart(`${impl}-${metric}.png`, {
    title: `${cfg.label} — ${metric} vs node count`,
    xLabel: "node count",
    yLabel: yLabelFor(metric),
    datasets: [
      {
        label: cfg.label,
        data,
        borderColor: cfg.color,
        backgroundColor: cfg.color,
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  });
}

async function renderNodeCountVsTime(): Promise<void> {
  const chartDatasets: ChartDataset[] = [];
  for (const d of datasets) {
    if (d.nodes.length === 0) continue;
    const cfg = IMPL_CONFIG[d.impl];
    chartDatasets.push({
      label: cfg.label,
      data: d.nodes.map((s) => ({ x: s.nodes, y: s.elapsedMs / 1000 })),
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 0,
      tension: 0.2,
    });
  }
  if (chartDatasets.length === 0) return;
  await writeChart(`node-count-vs-time${filenameSuffix}.png`, {
    title: "Time to reach N nodes",
    xLabel: "node count",
    yLabel: "elapsed (s)",
    datasets: chartDatasets,
  });
}

function perfPoints(samples: PerfSample[], metric: MetricName): Array<{ x: number; y: number }> {
  return samples
    .filter((s) => metric in s.metrics)
    .map((s) => ({
      x: s.nodes,
      y: metric === "JSHeapUsedSize" ? s.metrics[metric] / 1_000_000 : s.metrics[metric],
    }));
}

function perfPointsOverTime(
  samples: PerfSample[],
  metric: MetricName,
): Array<{ x: number; y: number }> {
  return samples
    .filter((s) => metric in s.metrics)
    .map((s) => ({
      x: s.t,
      y: metric === "JSHeapUsedSize" ? s.metrics[metric] / 1_000_000 : s.metrics[metric],
    }));
}

async function renderCombinedOverTime(metric: MetricName): Promise<void> {
  const chartDatasets: ChartDataset[] = [];
  for (const d of datasets) {
    const points = perfPointsOverTime(d.perf, metric);
    if (points.length === 0) continue;
    const cfg = IMPL_CONFIG[d.impl];
    chartDatasets.push({
      label: cfg.label,
      data: points,
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 0,
      tension: 0.2,
    });
  }
  if (chartDatasets.length === 0) return;
  await writeChart(`combined${filenameSuffix}-${metric}.png`, {
    title: `${metric} vs elapsed time (${GRAPH_SCENARIO})`,
    xLabel: "elapsed (ms)",
    yLabel: yLabelFor(metric),
    datasets: chartDatasets,
  });
}

async function renderColdLoad(): Promise<void> {
  // Time-to-visible chart
  const ttv: ChartDataset[] = [];
  for (const d of datasets) {
    if (d.coldload.length === 0) continue;
    const cfg = IMPL_CONFIG[d.impl];
    ttv.push({
      label: cfg.label,
      data: d.coldload.map((s) => ({ x: s.n, y: s.timeToVisibleMs })),
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 4,
      tension: 0.2,
    });
  }
  if (ttv.length > 0) {
    await writeChart(`combined${filenameSuffix}-timeToVisible.png`, {
      title: "Time to visible vs seeded paragraph count",
      xLabel: "seeded paragraphs (n)",
      yLabel: "ms",
      datasets: ttv,
    });
  }

  // Per-metric snapshot vs n
  for (const metric of ACTIVE_METRICS) {
    const ds: ChartDataset[] = [];
    for (const d of datasets) {
      if (d.coldload.length === 0) continue;
      const cfg = IMPL_CONFIG[d.impl];
      ds.push({
        label: cfg.label,
        data: d.coldload
          .filter((s) => metric in s.metrics)
          .map((s) => ({
            x: s.n,
            y: metric === "JSHeapUsedSize" ? s.metrics[metric] / 1_000_000 : s.metrics[metric],
          })),
        borderColor: cfg.color,
        backgroundColor: cfg.color,
        pointRadius: 4,
        tension: 0.2,
      });
    }
    if (ds.length === 0) continue;
    await writeChart(`combined${filenameSuffix}-${metric}.png`, {
      title: `${metric} at cold load (vs seeded paragraph count)`,
      xLabel: "seeded paragraphs (n)",
      yLabel: yLabelFor(metric),
      datasets: ds,
    });
  }
}

function yLabelFor(metric: MetricName): string {
  if (metric === "JSHeapUsedSize") return "MB";
  if (metric === "ScriptDuration" || metric === "TaskDuration") return "seconds";
  return "count";
}

interface ChartDataset {
  label: string;
  data: Array<{ x: number; y: number }>;
  borderColor: string;
  backgroundColor: string;
  pointRadius: number;
  tension: number;
  borderDash?: number[];
  showLine?: boolean;
}

async function renderKeystrokeLatency(): Promise<void> {
  // 1. Raw latency vs keystroke index (one line per impl)
  const raw: ChartDataset[] = [];
  for (const d of datasets) {
    if (d.latency.length === 0) continue;
    const cfg = IMPL_CONFIG[d.impl];
    raw.push({
      label: cfg.label,
      data: d.latency.map((s) => ({ x: s.idx, y: s.latencyMs })),
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 0,
      tension: 0,
    });
  }
  if (raw.length > 0) {
    await writeChart(`combined${filenameSuffix}-latency-over-time.png`, {
      title: "Keystroke latency (raw, per keystroke)",
      xLabel: "keystroke index",
      yLabel: "ms (dispatch → next rAF)",
      datasets: raw,
    });
  }

  // 2. Sorted percentile chart — y = latency, x = percentile (0..100)
  const sortedDs: ChartDataset[] = [];
  for (const d of datasets) {
    if (d.latency.length === 0) continue;
    const cfg = IMPL_CONFIG[d.impl];
    const sorted = d.latency.map((s) => s.latencyMs).sort((a, b) => a - b);
    sortedDs.push({
      label: cfg.label,
      data: sorted.map((y, i) => ({ x: (i / (sorted.length - 1)) * 100, y })),
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 0,
      tension: 0,
    });
  }
  if (sortedDs.length > 0) {
    await writeChart(`combined${filenameSuffix}-latency-percentile.png`, {
      title: "Keystroke latency distribution (sorted)",
      xLabel: "percentile",
      yLabel: "ms (dispatch → next rAF)",
      datasets: sortedDs,
    });
  }

  // 3. Print a summary table
  for (const d of datasets) {
    if (d.latency.length === 0) continue;
    const sorted = d.latency.map((s) => s.latencyMs).sort((a, b) => a - b);
    const q = (p: number) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
    const mean = sorted.reduce((s, v) => s + v, 0) / sorted.length;
    console.log(
      `[${d.impl}] n=${sorted.length} mean=${mean.toFixed(2)}ms p50=${q(0.5).toFixed(2)}ms p95=${q(0.95).toFixed(2)}ms p99=${q(0.99).toFixed(2)}ms max=${sorted[sorted.length - 1].toFixed(2)}ms`,
    );
  }
}

interface RampIteration {
  iter: number;
  n: number;
  stats: {
    count: number;
    p50: number;
    p95: number;
    p99: number;
    max: number;
    mean: number;
    meanInputDelay: number;
    meanProcessing: number;
    meanPresentation: number;
  } | null;
}
interface RampSummaryFile {
  impl: string;
  stepSize: number;
  pressesPerIter: number;
  thresholdMs: number;
  maxIter: number;
  iterations: RampIteration[];
  breakpointN: number | null;
  bailReason: string;
}

async function renderKeystrokeRamp(): Promise<void> {
  const loaded = impls
    .map((impl) => ({ impl, data: loadRampSummary(`${impl}-keystroke-ramp-summary.json`) }))
    .filter((x): x is { impl: EditorImpl; data: RampSummaryFile } => x.data !== null);

  if (loaded.length === 0) {
    console.log("no keystroke-ramp summaries found; nothing to graph");
    return;
  }

  const chartDatasets: ChartDataset[] = [];
  let maxN = 0;
  let maxY = 0;

  for (const { impl, data } of loaded) {
    const cfg = IMPL_CONFIG[impl];
    const points = data.iterations.flatMap((it) =>
      it.stats == null ? [] : [{ x: it.n, y: it.stats.p95 }],
    );
    if (points.length === 0) continue;
    chartDatasets.push({
      label: `${cfg.label} (p95 INP)`,
      data: points,
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 3,
      tension: 0.2,
    });
    for (const p of points) {
      if (p.x > maxN) maxN = p.x;
      if (p.y > maxY) maxY = p.y;
    }
  }

  const threshold = loaded[0].data.thresholdMs;
  if (threshold > maxY) maxY = threshold;

  // Horizontal dashed threshold line.
  chartDatasets.push({
    label: `lag threshold (p95 = ${threshold} ms)`,
    data: [
      { x: 0, y: threshold },
      { x: maxN, y: threshold },
    ],
    borderColor: "rgba(220, 38, 38, 0.9)",
    backgroundColor: "rgba(220, 38, 38, 0.9)",
    pointRadius: 0,
    tension: 0,
    borderDash: [6, 6],
  });

  // Vertical breakpoint markers per impl.
  for (const { impl, data } of loaded) {
    if (data.breakpointN == null) continue;
    const cfg = IMPL_CONFIG[impl];
    chartDatasets.push({
      label: `${cfg.label} breakpoint (n=${data.breakpointN})`,
      data: [
        { x: data.breakpointN, y: 0 },
        { x: data.breakpointN, y: maxY * 1.05 },
      ],
      borderColor: cfg.color,
      backgroundColor: cfg.color,
      pointRadius: 0,
      tension: 0,
      borderDash: [3, 3],
    });
  }

  await writeChart("keystroke-ramp.png", {
    title: "Typing INP p95 vs document size — lag breakpoint per impl",
    xLabel: "node count",
    yLabel: "INP p95 (ms)",
    datasets: chartDatasets,
  });

  for (const { impl, data } of loaded) {
    const bp = data.breakpointN ?? `none (${data.bailReason})`;
    console.log(
      `[${impl}] breakpoint=${bp} | iterations=${data.iterations.length} | step=${data.stepSize} | threshold=${data.thresholdMs}ms`,
    );
  }
}

function loadRampSummary(name: string): RampSummaryFile | null {
  const path = join(RESULTS_DIR, name);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8")) as RampSummaryFile;
}

async function writeChart(
  filename: string,
  spec: {
    title: string;
    xLabel: string;
    yLabel: string;
    datasets: ChartDataset[];
  },
): Promise<void> {
  const png = await canvas.renderToBuffer({
    type: "line",
    data: { datasets: spec.datasets },
    options: {
      responsive: false,
      plugins: {
        title: { display: true, text: spec.title, font: { size: 18 } },
        legend: { display: true, position: "top" },
      },
      scales: {
        x: {
          type: "linear",
          title: { display: true, text: spec.xLabel },
        },
        y: {
          title: { display: true, text: spec.yLabel },
        },
      },
    },
  });
  writeFileSync(join(RESULTS_DIR, filename), png);
}

function loadJson<T>(name: string): T extends unknown[] ? T : never {
  const path = join(RESULTS_DIR, name);
  if (!existsSync(path)) return [] as unknown as T extends unknown[] ? T : never;
  return JSON.parse(readFileSync(path, "utf8")) as T extends unknown[] ? T : never;
}
