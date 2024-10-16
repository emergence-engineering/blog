import React from "react";

const title = "Emergence Engineering";
const description =
  "Emergence Engineering is a software engineering company from Budapest (EU).";
const url = "https://emergence-engineering.com";

export default function GeneralSEO() {
  return (
    <>
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
        key="description"
        name="description"
        property="og:description"
        content={description}
      />
      <meta
        key="og:image"
        name="og:image"
        property="og:image"
        content="https://upload.wikimedia.org/wikipedia/commons/d/d2/Codinglogo.jpg"
      />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
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
        content="https://upload.wikimedia.org/wikipedia/commons/d/d2/Codinglogo.jpg"
      />
    </>
  );
}