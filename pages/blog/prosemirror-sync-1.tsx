import React, { FunctionComponent } from "react";
import dynamic from "next/dynamic";

import ArticleShareOgTags from "../../modules/article/components/ArticleShareOgTags";
import { ArticleIntro } from "../../types/article";
// import Editors from "../../articles/prosemirror-sync-1";
import ArticleWrapper from "../../modules/article/components/ArticleWrapper";
import SalesBox from "../../modules/article/components/SalesBox";
import Disqus from "../../modules/disqus/Disqus";

const EditorsDynamic = dynamic(
  () => import("../../articles/prosemirror-sync-1"),
  { ssr: false },
);

export const article2Metadata: ArticleIntro = {
  title: "Prosemirror Collab",
  author: "Viktor & Balazs",
  authorLink: null,
  introText: ``,
  postId: "prosemirror-sync-1",
  timestamp: 1574971200000,
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  url: "https://emergence-engineering.com/blog/prosemirror-sync-1",
};

/*
const MD0 = /!* language=md *!/ `# Prosemirror Collab.

Length: 15 minutes.

## What's this about?

Going trough the internet you'll find a lot of in-depth articles about specific issues,
light tutorials, and everything in between. But the javascript landscape is vast, and
sometimes too much information gets in the way of understanding.
`;
*/

const Article: FunctionComponent<{}> = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article2Metadata.url}
      title={article2Metadata.title}
      description={article2Metadata.introText}
      imgSrc={article2Metadata.imgSrc}
    />
    <EditorsDynamic />
    <SalesBox />
    <Disqus pageUrl={article2Metadata.url} pageId={article2Metadata.postId} />
  </ArticleWrapper>
);

export default Article;
