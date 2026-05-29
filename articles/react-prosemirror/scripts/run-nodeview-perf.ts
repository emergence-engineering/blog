/// <reference types="node" />
/**
 * Nodeview perf orchestrator — runs the v3-nv / v4-nv / v5-nv pages across
 * the four scenarios defined in `e2e/perf/nodeview.spec.ts`.
 *
 * Builds @proof/web once (the *-nv pages are static React routes hardcoded in
 * the bundle, so NEXT_PUBLIC_EDITOR_IMPL doesn't affect them — same trick as
 * `scripts/run-v3-v4-perf.ts`).
 *
 * Usage:
 *   pnpm exec tsx scripts/run-nodeview-perf.ts
 *   PERF_MAX_NODES=500 pnpm exec tsx scripts/run-nodeview-perf.ts
 *   PERF_NV_SCENARIOS=typing,ctx-flip pnpm exec tsx scripts/run-nodeview-perf.ts
 *   PERF_NV_IMPLS=v3-nv,v5-nv pnpm exec tsx scripts/run-nodeview-perf.ts
 */
import { spawnSync } from "node:child_process";

type NvImpl =
  | "v3-nv"
  | "v4-nv"
  | "v5-nv"
  | "v3"
  | "v4"
  | "v5"
  | "v3-snv"
  | "v4-snv"
  | "v5-snv";
type Scenario =
  | "typing"
  | "cold-load"
  | "cursor"
  | "ctx-flip"
  | "keystroke-latency"
  | "keystroke-inp";

const DEFAULT_IMPLS: NvImpl[] = ["v3-nv", "v4-nv", "v5-nv"];
const ALL_IMPLS: NvImpl[] = [
  "v3-nv",
  "v4-nv",
  "v5-nv",
  "v3",
  "v4",
  "v5",
  "v3-snv",
  "v4-snv",
  "v5-snv",
];
const ALL_SCENARIOS: Scenario[] = [
  "typing",
  "cold-load",
  "cursor",
  "ctx-flip",
  "keystroke-latency",
  "keystroke-inp",
];

const IMPLS: NvImpl[] = parseList(process.env.PERF_NV_IMPLS, DEFAULT_IMPLS, ALL_IMPLS);
const SCENARIOS: Scenario[] = parseList(process.env.PERF_NV_SCENARIOS, ALL_SCENARIOS);

const PERF_SERVER_PORT = process.env.PERF_SERVER_PORT ?? "4100";
const PERF_WEB_PORT = process.env.PERF_WEB_PORT ?? "3100";
const API_URL = `http://localhost:${PERF_SERVER_PORT}`;

console.log("\n=== building @proof/web (single bundle for v{3,4,5}-nv routes) ===\n");
run("pnpm", ["--filter", "@proof/web", "build"], {
  NEXT_PUBLIC_EDITOR_IMPL: "v3",
  NEXT_PUBLIC_API_URL: API_URL,
});

for (const impl of IMPLS) {
  for (const scenario of SCENARIOS) {
    console.log(`\n=== running perf for ${impl} / ${scenario} ===\n`);
    run(
      "pnpm",
      [
        "exec",
        "playwright",
        "test",
        "--config=playwright.perf.config.ts",
        "e2e/perf/nodeview.spec.ts",
      ],
      {
        EDITOR_IMPL: impl,
        PERF_SCENARIO: scenario,
        NEXT_PUBLIC_EDITOR_IMPL: impl,
        NEXT_PUBLIC_API_URL: API_URL,
        PERF_SERVER_PORT,
        PERF_WEB_PORT,
      },
    );
  }
}

for (const scenario of SCENARIOS) {
  console.log(`\n=== generating nodeview graphs (${scenario}) ===\n`);
  run("pnpm", ["exec", "tsx", "e2e/perf/create-graphs.ts"], {
    GRAPH_IMPLS: IMPLS.join(","),
    GRAPH_SCENARIO: scenario,
  });
}

function run(cmd: string, args: string[], env: Record<string, string>): void {
  const result = spawnSync(cmd, args, {
    stdio: "inherit",
    env: { ...process.env, ...env },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function parseList<T extends string>(
  raw: string | undefined,
  fallback: T[],
  allowed?: T[],
): T[] {
  if (!raw) return fallback;
  const validValues = (allowed ?? fallback) as readonly string[];
  const parsed = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is T => validValues.includes(s));
  return parsed.length > 0 ? parsed : fallback;
}
