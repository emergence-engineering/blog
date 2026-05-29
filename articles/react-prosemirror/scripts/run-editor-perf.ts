/// <reference types="node" />
import { spawnSync } from "node:child_process";

type EditorImpl = "v1" | "v2" | "v3" | "v4" | "v5";

const impls = (process.env.PERF_IMPLS ?? "v1,v2")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean) as EditorImpl[];

// The web bundle bakes NEXT_PUBLIC_API_URL at build time. Must match the port
// the perf playwright config will boot the server on (PERF_SERVER_PORT, default
// 4100), otherwise the client falls back to localhost:4000 and every API call
// hits an unbound port → "Document not found".
const PERF_SERVER_PORT = process.env.PERF_SERVER_PORT ?? "4100";
const PERF_WEB_PORT = process.env.PERF_WEB_PORT ?? "3100";
const API_URL = `http://localhost:${PERF_SERVER_PORT}`;

for (const impl of impls) {
  console.log(`\n=== building @proof/web for ${impl} ===\n`);
  run("pnpm", ["--filter", "@proof/web", "build"], {
    NEXT_PUBLIC_EDITOR_IMPL: impl,
    NEXT_PUBLIC_API_URL: API_URL,
  });

  console.log(`\n=== running perf for ${impl} ===\n`);
  run("pnpm", ["exec", "playwright", "test", "--config=playwright.perf.config.ts"], {
    EDITOR_IMPL: impl,
    NEXT_PUBLIC_EDITOR_IMPL: impl,
    NEXT_PUBLIC_API_URL: API_URL,
    PERF_SERVER_PORT,
    PERF_WEB_PORT,
  });
}

console.log("\n=== generating graphs ===\n");
run("pnpm", ["exec", "tsx", "e2e/perf/create-graphs.ts"], {});

function run(cmd: string, args: string[], env: Record<string, string>): void {
  const result = spawnSync(cmd, args, {
    stdio: "inherit",
    env: { ...process.env, ...env },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
