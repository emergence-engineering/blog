/* eslint-disable */
require("dotenv").config();
const withCSS = require('@zeit/next-css')

const path = require("path");
const Dotenv = require("dotenv-webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = withCSS({
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
    // Opt out from next typechecks
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== "ForkTsCheckerWebpackPlugin";
    });
    // only report errors on a matcher that doesn't match anything
    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        reportFiles: ["does-not-exist"],
      }),
    );

    config.node = {
      fs: 'empty'
    }
    return config;
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_DATABASE_NAME: process.env.FIREBASE_DATABASE_NAME,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_SENDER_ID: process.env.FIREBASE_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
});
