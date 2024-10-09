import React, { FunctionComponent } from "react";
import Head from "next/head";

export interface OgTags {
  url: string;
  title: string | undefined;
  description: string;
  imgSrc: string | undefined;
}

const ArticleShareOgTags: FunctionComponent<OgTags> = ({
  url,
  title,
  description,
  imgSrc,
}) => (
  <Head>
    <title>{`Emergence Engineering - ${title}`}</title>
    <meta property="og:url" key="og:url" name="og:url" content={url} />
    <meta property="og:type" key="og:type" name="og:type" content="article" />
    <meta
      property="og:title"
      key="og:title"
      name="og:title"
      content={"Emergence Engineering - Blog"}
    />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      key="og:image"
      name="og:image"
      content={imgSrc || "https://emergence-engineering.com/ee-icon-192192.png"}
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta key="twitter:site" name="twitter:site" content={url} />
    <meta
      key="twitter:title"
      name="twitter:title"
      content={"Emergence Engineering - Blog"}
    />
    <meta
      key="twitter:description"
      name="twitter:description"
      content={description}
    />
    <meta
      key="twitter:image"
      name="twitter:image"
      content={imgSrc || "https://emergence-engineering.com/ee-icon-192192.png"}
    />
  </Head>
);

export default ArticleShareOgTags;