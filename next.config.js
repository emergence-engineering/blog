/* eslint-disable */
require("dotenv").config();
const {name} = require("./package.json")

const gitCommitId = require('git-commit-id')
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withPwa = require("next-pwa")


function getReleaseId(environment, commitId, appName) {
  return `${appName}-${environment}-${commitId}`
}

const COMMIT_ID = gitCommitId()

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];
    return config;
  },
  experimental: {
    granularChunks: true,
  },
  typescript: {
    ignoreDevErrors: true,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_DATABASE_NAME: process.env.FIREBASE_DATABASE_NAME,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_SENDER_ID: process.env.FIREBASE_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FUNCTIONS_EMULATOR_HOST: process.env.FUNCTIONS_EMULATOR_HOST,
    FIRESTORE_EMULATOR_HOST: process.env.FIRESTORE_EMULATOR_HOST,
    SENTRY_DSN: process.env.SENTRY_DSN,
    NODE_ENV: process.env.NODE_ENV,
    COMMIT_ID,
    RELEASE_ID: getReleaseId(process.env.NODE_ENV, COMMIT_ID, name)
  },
  pwa: {
    dest: "public"
  }
};

module.exports = withPlugins([withCSS, withOptimizedImages, withPwa], nextConfig);

