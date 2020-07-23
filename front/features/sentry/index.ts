import * as Sentry from "@sentry/react";
import getConfig from "next/config";

/**
 * This effectful function initializes the Sentry.js
 * The function requires SENTRY_DSN environment constant to be set.
 */
export function initSentry(): void {
  const { SENTRY_DSN, NODE_ENV, RELEASE_ID } = getConfig().publicRuntimeConfig;
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: NODE_ENV,
    release: RELEASE_ID,
  });
}
