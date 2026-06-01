/// <reference types="node" />
/**
 * Nodeview perf orchestrator — runs `e2e/perf/nodeview.spec.ts` across impls ×
 * scenarios, then generates per-scenario graphs.
 *
 * Each impl has its own static blog route (see `routeFor` in constants.ts), so
 * we build the blog once and the Playwright webServer boots `next start`.
 *
 * NOTE: the reactive `-nv` impls (v3-nv / v4-nv / v5-nv) and the `ctx-flip`
 * scenario require nodeview pages that expose a `window.__PERF_CTX` hook; those
 * pages were not part of the initial copy, so the default impl set is the ones
 * with live routes (v3 / v4 / v5). Add `-snv` or `-nv` via PERF_NV_IMPLS once
 * their pages exist.
 *
 * Usage (from repo root):
 *   npx tsx articles/react-prosemirror/scripts/run-nodeview-perf.ts
 *   PERF_MAX_NODES=500 npx tsx ...run-nodeview-perf.ts
 *   PERF_NV_SCENARIOS=typing,cold-load npx tsx ...run-nodeview-perf.ts
 *   PERF_NV_IMPLS=v3,v5 npx tsx ...run-nodeview-perf.ts
 *   PERF_SKIP_BUILD=1 ... / PERF_DEV=1 ...
 */
import { spawnSync } from "node:child_process";
import { join } from "node:path";

type NvImpl =
  | "v3"
  | "v4"
  | "v5"
  | "v3-snv"
  | "v4-snv"
  | "v5-snv"
  | "v3-nv"
  | "v4-nv"
  | "v5-nv";
type Scenario =
  | "typing"
  | "cold-load"
  | "cursor"
  | "ctx-flip"
  | "keystroke-latency"
  | "keystroke-inp";

const ARTICLE_ROOT = join(__dirname, "..");
const REPO_ROOT = join(__dirname, "..", "..", "..");

const DEFAULT_IMPLS: NvImpl[] = ["v3", "v4", "v5"];
const ALL_IMPLS: NvImpl[] = [
  "v3",
  "v4",
  "v5",
  "v3-snv",
  "v4-snv",
  "v5-snv",
  "v3-nv",
  "v4-nv",
  "v5-nv",
];
const DEFAULT_SCENARIOS: Scenario[] = ["typing", "cold-load"];
const ALL_SCENARIOS: Scenario[] = [
  "typing",
  "cold-load",
  "cursor",
  "ctx-flip",
  "keystroke-latency",
  "keystroke-inp",
];

const IMPLS: NvImpl[] = parseList(process.env.PERF_NV_IMPLS, DEFAULT_IMPLS, ALL_IMPLS);
const SCENARIOS: Scenario[] = parseList(process.env.PERF_NV_SCENARIOS, DEFAULT_SCENARIOS, ALL_SCENARIOS);

buildOnce();

for (const impl of IMPLS) {
  for (const scenario of SCENARIOS) {
    console.log(`\n=== running perf for ${impl} / ${scenario} ===\n`);
    run(
      "npx",
      ["playwright", "test", "--config=playwright.perf.config.ts", "e2e/perf/nodeview.spec.ts"],
      ARTICLE_ROOT,
      { EDITOR_IMPL: impl, PERF_SCENARIO: scenario },
    );
  }
}

for (const scenario of SCENARIOS) {
  console.log(`\n=== generating nodeview graphs (${scenario}) ===\n`);
  run("npx", ["tsx", "e2e/perf/create-graphs.ts"], ARTICLE_ROOT, {
    GRAPH_IMPLS: IMPLS.join(","),
    GRAPH_SCENARIO: scenario,
  });
}

function buildOnce(): void {
  if (process.env.PERF_SKIP_BUILD === "1" || process.env.PERF_DEV === "1") return;
  console.log("\n=== building blog (next build) ===\n");
  run("npm", ["run", "build"], REPO_ROOT, {});
}

function run(cmd: string, args: string[], cwd: string, env: Record<string, string>): void {
  const result = spawnSync(cmd, args, { stdio: "inherit", cwd, env: { ...process.env, ...env } });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function parseList<T extends string>(
  raw: string | undefined,
  fallback: T[],
  allowed: T[] = fallback,
): T[] {
  if (!raw) return fallback;
  const validValues = allowed as readonly string[];
  const parsed = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is T => validValues.includes(s));
  return parsed.length > 0 ? parsed : fallback;
}
