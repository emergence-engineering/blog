/// <reference types="node" />
import { defineConfig, devices } from "@playwright/test";
import {
  EDITOR_IMPL,
  GLOBALTIMEOUT,
  PERF_SERVER_PORT,
  PERF_WEB_PORT,
  TIMEOUT,
} from "./e2e/perf/constants";

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
  webServer: [
    {
      command: "pnpm --filter @proof/server dev",
      url: `http://localhost:${PERF_SERVER_PORT}/health`,
      timeout: 120_000,
      reuseExistingServer: false,
      env: {
        PORT: String(PERF_SERVER_PORT),
        EDITOR_IMPL,
        WEB_ORIGIN: `http://localhost:${PERF_WEB_PORT}`,
        PROOF_SHARE_RATELIMIT_DISABLED: "1",
      },
    },
    {
      command: `pnpm --filter @proof/web exec next start -p ${PERF_WEB_PORT}`,
      url: `http://localhost:${PERF_WEB_PORT}`,
      timeout: 120_000,
      reuseExistingServer: false,
      env: {
        NEXT_PUBLIC_EDITOR_IMPL: EDITOR_IMPL,
        NEXT_PUBLIC_API_URL: `http://localhost:${PERF_SERVER_PORT}`,
      },
    },
  ],
});
