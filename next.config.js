/* eslint-disable */
const { name } = require("./package.json");

const { execSync } = require("child_process");

function getReleaseId(environment, commitId, appName) {
  return `${appName}-${environment}-${commitId}`;
}

// git-commit-id reads .git/HEAD as a file, which fails inside a git worktree
// (there .git is a pointer file). Ask git itself and fall back gracefully.
function readCommitId() {
  try {
    return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return process.env.VERCEL_GIT_COMMIT_SHA || "unknown";
  }
}

const COMMIT_ID = readCommitId();

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
  "/contact-en",
  "/cv/:slug*",
  "/open/:slug*",
];

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // The site root is the English-only engineering page; the bilingual Growth
  // Engineering pages live at /growth (en) and /hu/growth (hu). Hungarian
  // first-time visitors on / are redirected to /hu/growth by middleware.ts,
  // which owns all locale detection — hence localeDetection: false (the
  // built-in behaviour could only map / to /hu, not to a different path).
  i18n: {
    locales: ["en", "hu"],
    defaultLocale: "en",
    localeDetection: false,
  },
  // The English-only pages (blog, references, opensource, …) exist at one URL
  // only. Locale routing would also serve them under /hu, which is duplicate
  // content, so send those back to the canonical URL permanently.
  // /hu itself is handled by middleware.ts (config redirects run before
  // middleware, so putting it here would conflict).
  async redirects() {
    return [
      // The engineering page moved from /index-en to the site root. No
      // `locale: false` here: with i18n, a locale-false source matches only
      // the literal path *after* locale normalization strips the default
      // locale, so bare /index-en never matched. Locale-aware matching
      // covers /index-en and /hu/index-en in one rule (the /hu variant lands
      // on /hu, which middleware then forwards to /hu/growth).
      { source: "/index-en", destination: "/", permanent: true },
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
