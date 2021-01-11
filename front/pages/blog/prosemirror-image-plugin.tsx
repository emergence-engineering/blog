// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-image-plugin/"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article3Metadata: ArticleIntro = {
  title:
    "Image plugin for ProseMirror with upload handling, alignment selector and title",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `
Most production editors need functionality to show images with titles, and these images have to be uploaded & stored on a server. 
Managing this from the ground up takes a lot of time, so I wrote a plugin for ProseMirror which makes this very easy, and is flexible
enough to handle a lot of use cases.
 
  `,
  postId: "prosemirror-image-plugin",
  timestamp: 1610366577452,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-image-plugin",
};

const Article = () => (
  <ArticleWrapper>
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
  </ArticleWrapper>
);
export default Article;
