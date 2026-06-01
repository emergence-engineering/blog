/// <reference types="node" />
/**
 * Stress-perf orchestrator — runs `e2e/perf/stress.spec.ts` across the
 * standalone editor impls (v3 / v4 / v5), one Playwright invocation per impl,
 * then generates the comparison graphs.
 *
 * Each impl has its own static blog route (see `routeFor` in constants.ts),
 * so — unlike the original proof-stack setup — there's no per-impl rebuild:
 * we build the blog once, then the Playwright webServer boots `next start`.
 *
 * Usage (from repo root):
 *   npx tsx articles/react-prosemirror/scripts/run-editor-perf.ts
 *   PERF_IMPLS=v3,v5 npx tsx articles/react-prosemirror/scripts/run-editor-perf.ts
 *   PERF_SKIP_BUILD=1 ...      # reuse an existing production build
 *   PERF_DEV=1 ...             # boot `next dev` instead of build + start
 */
import { spawnSync } from "node:child_process";
import { join } from "node:path";

type EditorImpl = "v3" | "v4" | "v5";

const ARTICLE_ROOT = join(__dirname, "..");
const REPO_ROOT = join(__dirname, "..", "..", "..");

const impls = (process.env.PERF_IMPLS ?? "v3,v4,v5")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean) as EditorImpl[];

buildOnce();

for (const impl of impls) {
  console.log(`\n=== running stress perf for ${impl} ===\n`);
  run(
    "npx",
    ["playwright", "test", "--config=playwright.perf.config.ts", "e2e/perf/stress.spec.ts"],
    ARTICLE_ROOT,
    { EDITOR_IMPL: impl },
  );
}

console.log("\n=== generating graphs ===\n");
run("npx", ["tsx", "e2e/perf/create-graphs.ts"], ARTICLE_ROOT, {});

function buildOnce(): void {
  if (process.env.PERF_SKIP_BUILD === "1" || process.env.PERF_DEV === "1") return;
  console.log("\n=== building blog (next build) ===\n");
  run("npm", ["run", "build"], REPO_ROOT, {});
}

function run(cmd: string, args: string[], cwd: string, env: Record<string, string>): void {
  const result = spawnSync(cmd, args, { stdio: "inherit", cwd, env: { ...process.env, ...env } });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
