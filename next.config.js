/* eslint-disable */
const { name } = require("./package.json");

const gitCommitId = require("git-commit-id");

function getReleaseId(environment, commitId, appName) {
  return `${appName}-${environment}-${commitId}`;
}

const COMMIT_ID = gitCommitId();

// Routes that exist in English only (the software side of the site, plus the
// English startup landing pages). Keep in sync with pages/.
const EN_ONLY_PREFIXES = [
  "/blog",
  "/blog/:slug*",
  "/references",
  "/opensource",
  "/team",
  "/case-studies",
  "/rich-text-editor",
  "/index-en",
  "/contact-en",
  "/cv/:slug*",
  "/open/:slug*",
];

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Growth Engineers pages are bilingual: Hungarian visitors (Accept-Language)
  // are redirected from / to /hu, everyone else gets the English version.
  // localeDetection is on by default (the config option only accepts `false`,
  // so it must be omitted rather than set to true).
  i18n: {
    locales: ["en", "hu"],
    defaultLocale: "en",
  },
  // The English-only pages (blog, references, opensource, …) exist at one URL
  // only. Locale routing would also serve them under /hu, which is duplicate
  // content, so send those back to the canonical URL permanently.
  async redirects() {
    return [
      ...EN_ONLY_PREFIXES.map((path) => ({
        source: `/hu${path}`,
        destination: path,
        permanent: true,
        locale: false,
      })),
      // Service slugs renamed to match the visible service names (SEO).
      // Locale-aware: also covers the /hu/… variants.
      {
        source: "/growth-marketing",
        destination: "/ppc-hirdeteskezeles",
        permanent: true,
      },
      {
        source: "/tartalomgyartas",
        destination: "/kreativ-es-videogyartas",
        permanent: true,
      },
      {
        source: "/ecommerce-skalazas",
        destination: "/cro-es-ecommerce",
        permanent: true,
      },
    ];
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
    RELEASE_ID: getReleaseId(process.env.NODE_ENV, COMMIT_ID, name),
  },
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;
