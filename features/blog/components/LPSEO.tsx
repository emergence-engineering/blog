import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const title = "Emergence Engineering";
const description =
  "Emergence Engineering is a full-stack software development company from the EU. We build ProseMirror based editors, AI and LLM based applications, mobile applications and websites.";
const url = "https://emergence-engineering.com";

export function LPSEO() {
  // Canonicalize to the page's own URL: this component is shared by several
  // pages (references, opensource, …), which must not all point at the root.
  const { asPath } = useRouter();
  const path = asPath.split("#")[0].split("?")[0];
  const canonical = `${url}${path === "/" ? "" : path}`;
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta key="description" name="description" content={description} />
      <meta key="og:url" name="og:url" property="og:url" content={canonical} />
      <meta key="og:type" name="og:type" property="og:type" content="website" />
      <meta
        key="og:title"
        name="og:title"
        property="og:title"
        content={title}
      />
      <meta
        key="og:description"
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta
        key="og:image"
        name="og:image"
        property="og:image"
        content="https://emergence-engineering.com/ee-icon-192192.png"
      />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content={url} />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content="https://emergence-engineering.com/ee-icon-192192.png"
      />
    </Head>
  );
}