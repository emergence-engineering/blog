/// <reference types="node" />
import { join } from "node:path";
import { defineConfig, devices } from "@playwright/test";
import { GLOBALTIMEOUT, PERF_WEB_PORT, TIMEOUT } from "./e2e/perf/constants";

// Repo root (two levels up from articles/react-prosemirror). The perf editor
// routes live in the main blog Next app, so we boot it directly — no separate
// @proof/web / @proof/server processes like the original proof-stack config.
const REPO_ROOT = join(__dirname, "..", "..");

// Default to `next start` (production build — representative perf numbers).
// Set PERF_DEV=1 to boot `next dev` instead (faster iteration, noisier perf).
const DEV = process.env.PERF_DEV === "1";

export default defineConfig({
  testDir: "./e2e/perf",
  testMatch: /(stress|nodeview|keystroke-ramp)\.spec\.ts$/,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  timeout: TIMEOUT,
  globalTimeout: GLOBALTIMEOUT,
  use: {
    baseURL: `http://localhost:${PERF_WEB_PORT}`,
    trace: "off",
    video: "off",
    screenshot: "off",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: DEV
      ? `npx next dev -p ${PERF_WEB_PORT}`
      : `npx next start -p ${PERF_WEB_PORT}`,
    cwd: REPO_ROOT,
    url: `http://localhost:${PERF_WEB_PORT}/perf-react-prosemirror`,
    timeout: 120_000,
    reuseExistingServer: true,
  },
});
