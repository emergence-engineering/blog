// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-image-plugin/"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

const Article = () => (
  <ArticleWrapper>
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
  </ArticleWrapper>
);
export default Article;
