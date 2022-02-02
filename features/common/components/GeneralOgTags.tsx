import React, { FunctionComponent } from "react";
import Head from "next/head";

const ArticleShareOgTags: FunctionComponent<{
  url: string;
  title: string;
  description: string;
  imgSrc: string | undefined;
}> = ({ url, title, description, imgSrc }) => (
  <Head>
    <meta property="og:url" content={url} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imgSrc} />
  </Head>
);

export default ArticleShareOgTags;
