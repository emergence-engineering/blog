import React from "react";
import Head from "next/head";

const title = "Emergence Engineering - Rich Text Editor";
const description =
    "Emergence Engineering is a full-stack software development company from the EU. We build ProseMirror based editors, AI and LLM based applications, mobile applications and websites.";
const url = "https://emergence-engineering.com/rich-text-editor";

export function RichTextSEO() {
  return (
    <Head>
      <title>{title}</title>
      <meta key="og:url" name="og:url" property="og:url" content={url} />
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