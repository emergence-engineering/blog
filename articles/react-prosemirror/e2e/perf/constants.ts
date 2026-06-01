/// <reference types="node" />

import { join } from "node:path";

const FULL = process.env.PERF_FULL === "1";

export type EditorImpl =
  | "v1"
  | "v2"
  | "v3"
  | "v4"
  | "v5"
  | "v3-nv"
  | "v4-nv"
  | "v5-nv"
  | "v3-snv"
  | "v4-snv"
  | "v5-snv";

export const EDITOR_IMPL: EditorImpl = (process.env.EDITOR_IMPL as EditorImpl) ?? "v1";

export type PerfScenario =
  | "typing"
  | "cold-load"
  | "cursor"
  | "ctx-flip"
  | "keystroke-latency"
  | "keystroke-inp";

export const PERF_SCENARIO: PerfScenario = (process.env.PERF_SCENARIO as PerfScenario) ?? "typing";

export const PERF_COMPLEXITY = Number(process.env.PERF_COMPLEXITY ?? 3);

export const PERF_SCENARIOS: readonly PerfScenario[] = [
  "typing",
  "cold-load",
  "cursor",
  "ctx-flip",
  "keystroke-latency",
  "keystroke-inp",
] as const;

export const MAX_NODES = Number(process.env.PERF_MAX_NODES ?? (FULL ? 20_000 : 2_000));
export const MEASUREMENT_INTERVAL = Number(process.env.PERF_MEASUREMENT_MS ?? 2000);
export const NODECOUNT_CHECKPOINT = Number(process.env.PERF_NODECOUNT_STEP ?? 200);
export const TIMEOUT = Number(process.env.PERF_TIMEOUT_MS ?? (FULL ? 60 * 60_000 : 10 * 60_000));
export const GLOBALTIMEOUT = Number(
  process.env.PERF_GLOBAL_TIMEOUT_MS ?? (FULL ? 130 * 60_000 : 25 * 60_000),
);

export const ACTIVE_METRICS = [
  "LayoutCount",
  "ScriptDuration",
  "JSHeapUsedSize",
  "RecalcStyleCount",
  "TaskDuration",
  "Nodes",
] as const;

export type MetricName = (typeof ACTIVE_METRICS)[number];

interface ImplConfig {
  key: EditorImpl;
  label: string;
  selector: string;
  color: string;
  perfMetricsFile: string;
  nodeCountFile: string;
}

export const IMPL_CONFIG: Record<EditorImpl, ImplConfig> = {
  v1: {
    key: "v1",
    label: "editor-v1 (Tiptap 3)",
    selector: ".ProseMirror",
    color: "rgb(54, 162, 235)",
    perfMetricsFile: "v1-perfMetrics.json",
    nodeCountFile: "v1-nodecount.json",
  },
  v2: {
    key: "v2",
    label: "editor-v2 (react-prosemirror, full proof stack)",
    selector: ".ProseMirror",
    color: "rgb(255, 99, 132)",
    perfMetricsFile: "v2-perfMetrics.json",
    nodeCountFile: "v2-nodecount.json",
  },
  v3: {
    key: "v3",
    label: "editor-v3 (react-prosemirror, barebone)",
    selector: ".ProseMirror",
    color: "rgb(255, 159, 64)",
    perfMetricsFile: "v3-perfMetrics.json",
    nodeCountFile: "v3-nodecount.json",
  },
  v4: {
    key: "v4",
    label: "editor-v4 (vanilla prosemirror, no React reconciler)",
    selector: ".ProseMirror",
    color: "rgb(75, 192, 192)",
    perfMetricsFile: "v4-perfMetrics.json",
    nodeCountFile: "v4-nodecount.json",
  },
  v5: {
    key: "v5",
    label: "editor-v5 (bare Tiptap 3)",
    selector: ".ProseMirror",
    color: "rgb(153, 102, 255)",
    perfMetricsFile: "v5-perfMetrics.json",
    nodeCountFile: "v5-nodecount.json",
  },
  "v3-nv": {
    key: "v3-nv",
    label: "v3-nv (react-prosemirror + React nodeview + ctx)",
    selector: ".ProseMirror",
    color: "rgb(255, 99, 64)",
    perfMetricsFile: "v3-nv-perfMetrics.json",
    nodeCountFile: "v3-nv-nodecount.json",
  },
  "v4-nv": {
    key: "v4-nv",
    label: "v4-nv (vanilla PM + DOM nodeview)",
    selector: ".ProseMirror",
    color: "rgb(20, 130, 130)",
    perfMetricsFile: "v4-nv-perfMetrics.json",
    nodeCountFile: "v4-nv-nodecount.json",
  },
  "v5-nv": {
    key: "v5-nv",
    label: "v5-nv (Tiptap 3 + ReactNodeViewRenderer + ctx)",
    selector: ".ProseMirror",
    color: "rgb(120, 60, 200)",
    perfMetricsFile: "v5-nv-perfMetrics.json",
    nodeCountFile: "v5-nv-nodecount.json",
  },
  "v3-snv": {
    key: "v3-snv",
    label: "v3-snv (react-prosemirror + static React nodeview)",
    selector: ".ProseMirror",
    color: "rgb(255, 140, 100)",
    perfMetricsFile: "v3-snv-perfMetrics.json",
    nodeCountFile: "v3-snv-nodecount.json",
  },
  "v4-snv": {
    key: "v4-snv",
    label: "v4-snv (vanilla PM + static DOM nodeview)",
    selector: ".ProseMirror",
    color: "rgb(60, 170, 170)",
    perfMetricsFile: "v4-snv-perfMetrics.json",
    nodeCountFile: "v4-snv-nodecount.json",
  },
  "v5-snv": {
    key: "v5-snv",
    label: "v5-snv (Tiptap 3 + static React nodeview)",
    selector: ".ProseMirror",
    color: "rgb(170, 110, 230)",
    perfMetricsFile: "v5-snv-perfMetrics.json",
    nodeCountFile: "v5-snv-nodecount.json",
  },
};

/**
 * Maps an editor impl key to its human-readable Next.js page route in the blog.
 *
 *   v3      → /perf-react-prosemirror      (react-prosemirror, barebone)
 *   v4      → /perf-vanilla-prosemirror    (vanilla ProseMirror)
 *   v5      → /perf-tiptap                 (Tiptap 3)
 *   *-snv   → same name + "-snv"           (static nodeview variant)
 *   *-nv    → same name + "-nv"            (reactive nodeview variant; pages TBD)
 */
const IMPL_ROUTE_BASE: Record<"v3" | "v4" | "v5", string> = {
  v3: "react-prosemirror",
  v4: "vanilla-prosemirror",
  v5: "tiptap",
};

export function routeFor(impl: EditorImpl): string {
  const match = impl.match(/^(v[345])(-snv|-nv)?$/);
  if (!match) throw new Error(`no blog route mapped for impl "${impl}"`);
  const [, base, suffix] = match as unknown as [string, "v3" | "v4" | "v5", string | undefined];
  return `/perf-${IMPL_ROUTE_BASE[base]}${suffix ?? ""}`;
}

/**
 * Returns the filename for a given impl+scenario+kind. For the default scenario
 * `"typing"` we keep the legacy filenames (no scenario suffix) so existing
 * graphs/runs are not disturbed.
 */
export function perfFileFor(
  impl: EditorImpl,
  scenario: PerfScenario,
  kind: "perfMetrics" | "nodecount" | "coldload" | "cursor" | "ctxflip" | "latency",
): string {
  if (scenario === "typing" && kind === "perfMetrics") return IMPL_CONFIG[impl].perfMetricsFile;
  if (scenario === "typing" && kind === "nodecount") return IMPL_CONFIG[impl].nodeCountFile;
  return `${impl}-${scenario}-${kind}.json`;
}

export const PERF_WEB_PORT = Number(process.env.PERF_WEB_PORT ?? 3100);
export const PERF_SERVER_PORT = Number(process.env.PERF_SERVER_PORT ?? 4100);

// Keystroke-ramp scenario: grow the doc by KEYSTROKE_RAMP_STEP nodes between
// measurements, fire KEYSTROKE_RAMP_PRESSES paced keystrokes per iteration,
// bail once p95 INP > KEYSTROKE_LAG_P95_MS for two consecutive iterations or
// after KEYSTROKE_RAMP_MAX_ITER iterations.
export const KEYSTROKE_RAMP_STEP = Number(process.env.PERF_RAMP_STEP ?? 500);
export const KEYSTROKE_RAMP_MAX_ITER = Number(process.env.PERF_RAMP_MAX_ITER ?? 30);
export const KEYSTROKE_RAMP_PRESSES = Number(process.env.PERF_RAMP_PRESSES ?? 150);
// 50ms pacing keeps each press as its own interactionId (measures isolated
// keystroke latency). Lower values let Chromium coalesce consecutive presses
// into one interaction whose duration spans first-key → paint after last-key
// — closer to real fast typing.
export const KEYSTROKE_RAMP_PACING_MS = Number(process.env.PERF_RAMP_PACING_MS ?? 50);
export const KEYSTROKE_LAG_P95_MS = Number(process.env.PERF_LAG_P95_MS ?? 100);

export const KEYSTROKE_RAMP_IMPLS: readonly EditorImpl[] = [
  "v3",
  "v4",
  "v5",
  "v3-snv",
  "v4-snv",
  "v5-snv",
];

// Playwright + the orchestrator are always invoked from the repo root,
// so resolving relative to process.cwd() keeps this CJS/ESM-agnostic and
// avoids a `import.meta` TS module-target dance.
export const RESULTS_DIR = join(process.cwd(), "e2e", "perf", "results");
