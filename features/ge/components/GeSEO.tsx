import React, { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ORIGIN = "https://emergence-engineering.com";

export interface GeSEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

/**
 * Per-page SEO for the Growth Engineering pages. Emits the localized
 * title/description/og tags plus hreflang alternates for the en/hu pair.
 */
export const GeSEO: FunctionComponent<GeSEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
}) => {
  const { asPath } = useRouter();
  const path = asPath.split("#")[0].split("?")[0];
  const enUrl = `${ORIGIN}${path === "/" ? "" : path}`;
  const huUrl = `${ORIGIN}/hu${path === "/" ? "" : path}`;
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
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="hu" href={huUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </Head>
  );
};
