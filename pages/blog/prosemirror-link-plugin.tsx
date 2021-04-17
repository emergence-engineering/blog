// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import Disqus from "../../features/disqus/Disqus";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-link-plugin/"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article4Metadata: ArticleIntro = {
  title: "prosemirror-link-plugin: Create automatic links in ProseMirror",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `
If you want to have a decorations around different strings in your ProseMirror document then this is your plugin! You can make the found words to behave as links ( for example ), and add new items to your string list on the fly
  `,
  postId: "prosemirror-link-plugin",
  timestamp: 1610366577452,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-link-plugin",
};

const MD0 = /* language=md */ `
# What's this about?

A [ProseMirror link plugin](https://gitlab.com/emergence-engineering/prosemirror-link-plugin) which finds occuerrences of strings in your document, and does it by only looking at the changed sections, thus saving a lot of time
by not re-processing the whole document all the time.
`;

const MD1 = /* language=md */ `
# How to use?

1. Install the plugin: **npm i -S prosemirror-link-plugin**
2. Add 

In codespeak:
\`\`\`typescript
TODO
\`\`\`

You might want to add some CSS around your decoration, you can do it by targeting its class.

You can check out the docs at <https://gitlab.com/emergence-engineering/prosemirror-link-plugin>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article4Metadata.url}
      title={article4Metadata.title}
      description={article4Metadata.introText}
      imgSrc={article4Metadata.imgSrc}
    />
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <SalesBox />
    <Disqus pageUrl={article4Metadata.url} pageId={article4Metadata.postId} />
  </ArticleWrapper>
);
export default Article;
