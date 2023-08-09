import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import ArticleHeader from "../../features/article/components/ArticleHeader";

const DynamicEditor = dynamic(
  () => import("../../articles/lexical-link-preview"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article17Metadata: ArticleIntro = {
  title: "lexical-link-preview: Link preview for Lexical",
  author: "Kata",
  authorLink: null,
  introText: /* language=md */ `An open source link preview plugin for lexical made by Emergence-Engineering.`,
  postId: "lexical-link-preview",
  timestamp: 1691532000000,
  imgSrc: "https://lexical.dev/img/logo.svg",
  url: "https://emergence-engineering.com/blog/lexical-link-preview",
};

const MD0 = /* language=md */ `

## Introduction
The **prosemirror-link-preview** plugin adds Discord and Slack like link previews to your Prosemirror editor. The plugin catches pasted links and renders a preview automatically. Follow along to learn more about the plugin and how to use it in your project.

## Features

1. **Dynamic Link Previews**: Whenever a valid URL is pasted into a ProseMirror document, the plugin automatically calls **your callback** function that fetches the necessary metadata, and the plugin renders a preview, providing a quick glimpse into the content behind the link.

2. **Rich Preview Styles**: By default the plugin creates a preview that resembles the style of most social media platforms link sharing cards. It makes it easier to differentiate between regular text and linked content. The preview includes information such as the title, description, and an image associated with the link, where available based on Open Graph metadata.

3. **Configurable Behavior**: The plugin provides configuration options, allowing users to customize the behavior and appearance of link previews according to their specific needs. From adjusting the preview size to defining custom CSS styles, the plugin offers flexibility to match the desired editing environment.

`;

const MD1 = /* language=md */ `

# Caveat
Because of CORS you can't fetch the link preview from the client directly. You need to have a custom backend that will fetch the link preview for you. You either use payed OpenGraph fetcher API or use \`link-preview-js\` library on your backend to do this. In this article we will use \`link-preview-js\` with Next.js API to do this. Since the Next.js API is very similar to Express.js, you can just copy and paste the code to Express.js servers as well.

# How to use it

You can check out the docs at <https://github.com/emergence-engineering/prosemirror-link-preview/tree/main>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article17Metadata.url}
      title={article17Metadata.title}
      description={article17Metadata.introText}
      imgSrc={article17Metadata.imgSrc}
    />
    <ArticleHeader
      title={article17Metadata.title}
      author={article17Metadata.author}
      timestamp={article17Metadata.timestamp}
    />
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
