/* eslint-disable */
// Generates public/sitemap.xml from the route lists below plus the blog
// directory. Runs as part of `npm run build`; run manually with
// `node scripts/generate-sitemap.js` after adding a page or blog post.
const fs = require("fs");
const path = require("path");

const ORIGIN = "https://emergence-engineering.com";

// Bilingual Growth Engineering pages: served at /<path> (en) and /hu/<path>.
// Keep in sync with features/ge/routes.ts.
const BILINGUAL = [
  "",
  "/ppc-hirdeteskezeles",
  "/webfejlesztes",
  "/email-automatizacio",
  "/kreativ-es-videogyartas",
  "/ux-ui-design",
  "/ai-seo",
  "/cro-es-ecommerce",
  "/esettanulmanyok",
  "/esettanulmany-plantart",
  "/esettanulmany-szamlabridge",
  "/esettanulmany-vezessjol",
  "/rolunk",
  "/kapcsolat",
  "/adatkezeles",
  "/aszf",
];

// English-only pages (locale routing redirects their /hu variants back).
const EN_ONLY = [
  "/index-en",
  "/contact-en",
  "/blog",
  "/references",
  "/opensource",
  "/team",
  "/case-studies",
  "/rich-text-editor",
];

const blogDir = path.join(__dirname, "..", "pages", "blog");
const blogPosts = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith(".tsx") && f !== "index.tsx")
  .map((f) => `/blog/${f.replace(/\.tsx$/, "")}`);

const today = new Date().toISOString().slice(0, 10);

const alternates = (p) =>
  [
    `    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${p}"/>`,
    `    <xhtml:link rel="alternate" hreflang="hu" href="${ORIGIN}/hu${p}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${p}"/>`,
  ].join("\n");

const url = (loc, extra) =>
  [`  <url>`, `    <loc>${loc}</loc>`, extra, `    <lastmod>${today}</lastmod>`, `  </url>`]
    .filter(Boolean)
    .join("\n");

const entries = [];
for (const p of BILINGUAL) {
  entries.push(url(`${ORIGIN}${p}`, alternates(p)));
  entries.push(url(`${ORIGIN}/hu${p}`, alternates(p)));
}
for (const p of [...EN_ONLY, ...blogPosts]) {
  entries.push(url(`${ORIGIN}${p}`));
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  ...entries,
  `</urlset>`,
  ``,
].join("\n");

fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml);
console.log(`sitemap.xml written: ${entries.length} URLs`);
