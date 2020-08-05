import React, { FunctionComponent } from "react";
import Head from "next/dist/next-server/lib/head";

import { OgTags } from "../../../types/ogTags";

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
    <meta property="og:title" key="og:title" name="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" key="og:image" name="og:image" content={imgSrc} />
  </Head>
);

export default ArticleShareOgTags;
