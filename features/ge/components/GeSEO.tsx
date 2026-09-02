import React, { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ORIGIN = "https://emergence-engineering.com";
const DEFAULT_OG_IMAGE = `${ORIGIN}/ee-icon-192192.png`;

/**
 * Breadcrumb labels per route, used for the BreadcrumbList JSON-LD. Keys are
 * the localized visible crumb texts, mirroring the on-page .crumbs markup.
 * Case study pages sit under the case study listing; everything else is one
 * level below the home page.
 */
const CRUMB_LABELS: Record<string, { en: string; hu: string; parent?: string }> = {
  "/ppc-hirdeteskezeles": { en: "PPC ad management", hu: "PPC hirdetéskezelés" },
  "/webfejlesztes": { en: "Webshop & web development", hu: "Webshop- és webfejlesztés" },
  "/email-automatizacio": { en: "Email marketing & automation", hu: "E-mail marketing és automatizáció" },
  "/kreativ-es-videogyartas": { en: "Creative & video production", hu: "Kreatív- és videógyártás" },
  "/ux-ui-design": { en: "UX/UI design", hu: "UX/UI design" },
  "/ai-seo": { en: "SEO & AI search optimization", hu: "SEO és AI keresőoptimalizálás" },
  "/cro-es-ecommerce": { en: "CRO & e-commerce", hu: "CRO és E-commerce" },
  "/rolunk": { en: "About us", hu: "Rólunk" },
  "/kapcsolat": { en: "Contact", hu: "Kapcsolat" },
  "/esettanulmanyok": { en: "Case studies", hu: "Esettanulmányok" },
  "/esettanulmany-plantart": { en: "Plantart", hu: "Plantart", parent: "/esettanulmanyok" },
  "/esettanulmany-vezessjol": { en: "VezessJól", hu: "VezessJól", parent: "/esettanulmanyok" },
  "/esettanulmany-szamlabridge": { en: "Számlabridge", hu: "Számlabridge", parent: "/esettanulmanyok" },
  "/adatkezeles": { en: "Privacy policy", hu: "Adatkezelési tájékoztató" },
  "/aszf": { en: "Terms of service", hu: "ÁSZF" },
};

/** Service pages get Service structured data derived from their crumb name. */
const SERVICE_ROUTES = new Set([
  "/ppc-hirdeteskezeles",
  "/webfejlesztes",
  "/email-automatizacio",
  "/kreativ-es-videogyartas",
  "/ux-ui-design",
  "/ai-seo",
  "/cro-es-ecommerce",
]);

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Growth Engineering",
  legalName: "Emergence Engineering Kft.",
  url: ORIGIN,
  logo: DEFAULT_OG_IMAGE,
  email: "info@emergence-engineering.com",
  sameAs: ["https://www.linkedin.com/company/emergence-engineering/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
};

export interface GeSEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Absolute URL or site-relative path for og:image; defaults to the EE icon. */
  ogImage?: string;
  /**
   * Pages that exist in English only (index-en, contact-en). Their /hu URL
   * permanently redirects back, so advertising a hu alternate would
   * contradict the redirect.
   */
  enOnly?: boolean;
}

/**
 * Per-page SEO for the Growth Engineering pages. Emits the localized
 * title/description/og/twitter tags, the canonical URL for the active locale,
 * hreflang alternates for the en/hu pair (bilingual pages only), and the
 * Organization + BreadcrumbList structured data.
 */
export const GeSEO: FunctionComponent<GeSEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  enOnly,
}) => {
  const { asPath, locale } = useRouter();
  const path = asPath.split("#")[0].split("?")[0];
  const enUrl = `${ORIGIN}${path === "/" ? "" : path}`;
  const huUrl = `${ORIGIN}/hu${path === "/" ? "" : path}`;
  const isHu = locale === "hu" && !enOnly;
  const canonical = isHu ? huUrl : enUrl;
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${ORIGIN}${ogImage}`
    : DEFAULT_OG_IMAGE;

  const lang: "en" | "hu" = isHu ? "hu" : "en";
  const crumb = CRUMB_LABELS[path];
  const localePrefix = isHu ? "/hu" : "";
  const breadcrumbJsonLd = crumb && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "hu" ? "Főoldal" : "Home",
        item: `${ORIGIN}${localePrefix}` || ORIGIN,
      },
      ...(crumb.parent && CRUMB_LABELS[crumb.parent]
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: CRUMB_LABELS[crumb.parent][lang],
              item: `${ORIGIN}${localePrefix}${crumb.parent}`,
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: crumb.parent ? 3 : 2,
        name: crumb[lang],
        item: canonical,
      },
    ],
  };

  const serviceJsonLd =
    SERVICE_ROUTES.has(path) && crumb
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: crumb[lang],
          description,
          url: canonical,
          inLanguage: lang,
          areaServed: ["HU", "EU"],
          provider: {
            "@type": "Organization",
            name: "Growth Engineering",
            legalName: "Emergence Engineering Kft.",
            url: ORIGIN,
          },
        }
      : null;

  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="og:title" property="og:title" content={ogTitle ?? title} />
      <meta
        key="og:description"
        property="og:description"
        content={ogDescription ?? description}
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:site_name" property="og:site_name" content="Growth Engineering" />
      <meta key="og:image" property="og:image" content={ogImageUrl} />
      <meta
        key="og:locale"
        property="og:locale"
        content={isHu ? "hu_HU" : "en_US"}
      />
      {!enOnly && (
        <meta
          key="og:locale:alternate"
          property="og:locale:alternate"
          content={isHu ? "en_US" : "hu_HU"}
        />
      )}
      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:title" name="twitter:title" content={ogTitle ?? title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={ogDescription ?? description}
      />
      <meta key="twitter:image" name="twitter:image" content={ogImageUrl} />
      <link rel="canonical" href={canonical} />
      {!enOnly && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {!enOnly && <link rel="alternate" hrefLang="hu" href={huUrl} />}
      {!enOnly && (
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
      )}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}
    </Head>
  );
};
