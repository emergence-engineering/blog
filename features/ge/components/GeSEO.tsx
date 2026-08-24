import React, { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ORIGIN = "https://emergence-engineering.com";

export interface GeSEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  /**
   * Pages that exist in English only (index-en, contact-en). Their /hu URL
   * permanently redirects back, so advertising a hu alternate would
   * contradict the redirect.
   */
  enOnly?: boolean;
}

/**
 * Per-page SEO for the Growth Engineering pages. Emits the localized
 * title/description/og tags, the canonical URL for the active locale, and
 * hreflang alternates for the en/hu pair (bilingual pages only).
 */
export const GeSEO: FunctionComponent<GeSEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  enOnly,
}) => {
  const { asPath, locale } = useRouter();
  const path = asPath.split("#")[0].split("?")[0];
  const enUrl = `${ORIGIN}${path === "/" ? "" : path}`;
  const huUrl = `${ORIGIN}/hu${path === "/" ? "" : path}`;
  const canonical = locale === "hu" && !enOnly ? huUrl : enUrl;
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
      <link rel="canonical" href={canonical} />
      {!enOnly && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {!enOnly && <link rel="alternate" hrefLang="hu" href={huUrl} />}
      {!enOnly && (
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
      )}
    </Head>
  );
};
