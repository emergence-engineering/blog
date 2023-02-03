import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import SalesBox from "../../features/article/components/SalesBox";
import React from "react";

export const MD0 = `
# Coming soon
I'm attempting to create a step by step guide for reproducing our battle tested architecture using Next.js, Postgres, and Postgraphile(GraphQL).

Features: 
- Code examples with explanations
- GitHub repo containing all three services
- Docker compose configuration for local development
- Kubernetes or other cloud ready secure containers
`

export const article9Metadata: ArticleIntro = {
  title: `Building a production ready Next.js+Postgraphile architecture`,
  postId: "nextjs-postgraphile",
  url: "https://emergence-engineering.com/blog/nextjs-postgraphile",
  imgSrc: undefined,
  author: "Balázs",
  timestamp: 1675437276962,
  authorLink: "https://emergence-engineering.com/cv/balazs",
  introText: "Coming soon. Step by step guide with code samples and a GitHub repository for building a production ready architecture with the following three services: Postgres, Postgraphile and Next.js",
}

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article9Metadata.url}
        title={article9Metadata.title}
        description={article9Metadata.introText}
        imgSrc={article9Metadata.imgSrc}
      />
      <Markdown source={MD0} />
      <SalesBox />
    </ArticleWrapper>
  );
}
