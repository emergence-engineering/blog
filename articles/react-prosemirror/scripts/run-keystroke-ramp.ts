/// <reference types="node" />
/**
 * Keystroke-ramp orchestrator — runs `e2e/perf/keystroke-ramp.spec.ts` across
 * the -snv impls (v3-snv / v4-snv / v5-snv), one Playwright invocation per
 * impl. The spec sweeps n internally and bails when typing becomes laggy, so
 * this script just iterates impls and then generates the comparison graph.
 *
 * Usage:
 *   pnpm perf:keystroke-ramp
 *   PERF_RAMP_IMPLS=v3-snv pnpm perf:keystroke-ramp
 *   PERF_RAMP_STEP=250 PERF_LAG_P95_MS=80 pnpm perf:keystroke-ramp
 */
import { spawnSync } from "node:child_process";

type RampImpl = "v3" | "v4" | "v5" | "v3-snv" | "v4-snv" | "v5-snv";

const DEFAULT_IMPLS: RampImpl[] = ["v3-snv", "v4-snv", "v5-snv"];
const ALL_IMPLS: readonly RampImpl[] = ["v3", "v4", "v5", "v3-snv", "v4-snv", "v5-snv"];
const IMPLS = parseList(process.env.PERF_RAMP_IMPLS, DEFAULT_IMPLS, ALL_IMPLS);

const PERF_SERVER_PORT = process.env.PERF_SERVER_PORT ?? "4100";
const PERF_WEB_PORT = process.env.PERF_WEB_PORT ?? "3100";
const API_URL = `http://localhost:${PERF_SERVER_PORT}`;

console.log("\n=== building @proof/web (shared bundle for -snv routes) ===\n");
run("pnpm", ["--filter", "@proof/web", "build"], {
  NEXT_PUBLIC_EDITOR_IMPL: "v3",
  NEXT_PUBLIC_API_URL: API_URL,
});

for (const impl of IMPLS) {
  console.log(`\n=== running keystroke-ramp for ${impl} ===\n`);
  run(
    "pnpm",
    [
      "exec",
      "playwright",
      "test",
      "--config=playwright.perf.config.ts",
      "e2e/perf/keystroke-ramp.spec.ts",
    ],
    {
      EDITOR_IMPL: impl,
      NEXT_PUBLIC_EDITOR_IMPL: impl,
      NEXT_PUBLIC_API_URL: API_URL,
      PERF_SERVER_PORT,
      PERF_WEB_PORT,
    },
  );
}

console.log("\n=== generating keystroke-ramp graph ===\n");
run("pnpm", ["exec", "tsx", "e2e/perf/create-graphs.ts"], {
  GRAPH_IMPLS: IMPLS.join(","),
  GRAPH_SCENARIO: "keystroke-ramp",
});

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
  allowed: readonly T[] = fallback,
): T[] {
  if (!raw) return fallback;
  const allowedSet = allowed as readonly string[];
  const parsed = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is T => allowedSet.includes(s));
  return parsed.length > 0 ? parsed : fallback;
}
