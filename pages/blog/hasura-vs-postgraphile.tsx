import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import SalesBox from "../../features/article/components/SalesBox";
import React from "react";
import { MD0 } from "./hasura-vs-postgraphile.markdown";

export const article8Metadata: ArticleIntro = {
  title: `A year after we chose to go with Postgraphile over Hasura in production`,
  postId: "hasura-vs-postgraphile",
  url: "https://emergence-engineering.com/blog/hasura-vs-postgraphile",
  imgSrc: undefined,
  author: "Balázs",
  timestamp: 1672999080350,
  authorLink: "https://emergence-engineering.com/cv/balazs",
  introText: "Summarising our experiences of using Postgraphile in production for more than a year in light of the recent investigation on whether we want to switch to Hasura",
}

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article8Metadata.url}
        title={article8Metadata.title}
        description={article8Metadata.introText}
        imgSrc={article8Metadata.imgSrc}
      />
      <Markdown source={MD0} />
      <SalesBox />
    </ArticleWrapper>
  );
}
