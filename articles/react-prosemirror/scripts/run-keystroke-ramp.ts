/// <reference types="node" />
/**
 * Keystroke-ramp orchestrator — runs `e2e/perf/keystroke-ramp.spec.ts` across
 * the impls it supports (v3 / v4 / v5 / v3-snv / v4-snv / v5-snv), one
 * Playwright invocation per impl, then generates the comparison graph. The
 * spec sweeps node count internally and bails when typing becomes laggy, so
 * this script just iterates impls.
 *
 * Usage (from repo root):
 *   npx tsx articles/react-prosemirror/scripts/run-keystroke-ramp.ts
 *   PERF_RAMP_IMPLS=v3-snv npx tsx articles/react-prosemirror/scripts/run-keystroke-ramp.ts
 *   PERF_RAMP_STEP=250 PERF_LAG_P95_MS=80 npx tsx ...run-keystroke-ramp.ts
 *   PERF_SKIP_BUILD=1 ...   # reuse an existing production build
 *   PERF_DEV=1 ...          # boot `next dev` instead of build + start
 */
import { spawnSync } from "node:child_process";
import { join } from "node:path";

type RampImpl = "v3" | "v4" | "v5" | "v3-snv" | "v4-snv" | "v5-snv";

const ARTICLE_ROOT = join(__dirname, "..");
const REPO_ROOT = join(__dirname, "..", "..", "..");

const DEFAULT_IMPLS: RampImpl[] = ["v3-snv", "v4-snv", "v5-snv"];
const ALL_IMPLS: readonly RampImpl[] = ["v3", "v4", "v5", "v3-snv", "v4-snv", "v5-snv"];
const IMPLS = parseList(process.env.PERF_RAMP_IMPLS, DEFAULT_IMPLS, ALL_IMPLS);

buildOnce();

for (const impl of IMPLS) {
  console.log(`\n=== running keystroke-ramp for ${impl} ===\n`);
  run(
    "npx",
    ["playwright", "test", "--config=playwright.perf.config.ts", "e2e/perf/keystroke-ramp.spec.ts"],
    ARTICLE_ROOT,
    { EDITOR_IMPL: impl },
  );
}

console.log("\n=== generating keystroke-ramp graph ===\n");
run("npx", ["tsx", "e2e/perf/create-graphs.ts"], ARTICLE_ROOT, {
  GRAPH_IMPLS: IMPLS.join(","),
  GRAPH_SCENARIO: "keystroke-ramp",
});

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
