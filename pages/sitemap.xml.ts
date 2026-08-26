import type { GetServerSideProps } from "next";

import { ARTICLES } from "../features/blog/articleList";

/**
 * Sitemap for emergence-engineering.com, served at /sitemap.xml (a Pages
 * Router filename with a dot is a literal route). Rendered per request but
 * CDN-cached for a day via s-maxage, so it behaves like a static file that
 * can never go stale for long.
 *
 * Rules encoded here:
 * - NEVER list a URL that redirects (/index-en, /hu, /hu/blog, …): Google
 *   treats redirecting sitemap entries as errors.
 * - hreflang alternates only for genuinely translated pairs, i.e. the
 *   bilingual Growth Engineering pages (/x ↔ /hu/x). The engineering pages
 *   (/, /blog, …) are English-only and must NOT be paired with any /hu URL.
 * - x-default points at the English version, mirroring GeSEO.
 */

const ORIGIN = "https://emergence-engineering.com";

// Bilingual Growth Engineering pages: each exists at /<path> and /hu/<path>.
const BILINGUAL_PATHS = [
  "/growth",
  "/growth-marketing",
  "/webfejlesztes",
  "/email-automatizacio",
  "/tartalomgyartas",
  "/ux-ui-design",
  "/ai-seo",
  "/ecommerce-skalazas",
  "/esettanulmanyok",
  "/esettanulmany-plantart",
  "/esettanulmany-szamlabridge",
  "/esettanulmany-vezessjol",
  "/rolunk",
  "/kapcsolat",
];

// English-only pages (the engineering side). /hu versions of these redirect
// back and so must stay out of the sitemap.
const EN_ONLY_PATHS = [
  "/",
  "/blog",
  "/references",
  "/opensource",
  "/team",
  "/case-studies",
  "/rich-text-editor",
  "/contact-en",
  "/open",
];

interface Entry {
  loc: string;
  lastmod?: string;
  priority: string;
  /** hreflang cluster this URL belongs to; every member lists all of them. */
  alternates?: { hreflang: string; href: string }[];
}

const buildEntries = (): Entry[] => {
  const entries: Entry[] = EN_ONLY_PATHS.map((path) => ({
    loc: `${ORIGIN}${path === "/" ? "" : path}`,
    priority: path === "/" ? "1.0" : "0.8",
  }));

  for (const path of BILINGUAL_PATHS) {
    const en = `${ORIGIN}${path}`;
    const hu = `${ORIGIN}/hu${path}`;
    const alternates = [
      { hreflang: "en", href: en },
      { hreflang: "hu", href: hu },
      { hreflang: "x-default", href: en },
    ];
    const priority = path === "/growth" ? "0.9" : "0.7";
    entries.push({ loc: en, priority, alternates });
    entries.push({ loc: hu, priority, alternates });
  }

  for (const article of ARTICLES) {
    entries.push({
      // url is verified to match the live route for every post (postId is
      // not: one has a typo), so derive the path from url.
      loc: article.url,
      lastmod: new Date(article.timestamp).toISOString(),
      priority: "0.6",
    });
  }

  return entries;
};

const renderXml = (entries: Entry[]): string => {
  const body = entries
    .map((entry) => {
      const alternates = (entry.alternates ?? [])
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`,
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${entry.loc}</loc>`,
        entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
        alternates || null,
        `    <priority>${entry.priority}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` +
    ` xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(renderXml(buildEntries()));
  res.end();
  return { props: {} };
};

// Never rendered: getServerSideProps ends the response itself.
export default function Sitemap(): null {
  return null;
}
