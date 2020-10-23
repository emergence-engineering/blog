import React, { useCallback } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-latex/"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export default function Article() {
  return (
    <ArticleWrapper>
      <EditorStyling>
        <DynamicEditor />
      </EditorStyling>
    </ArticleWrapper>
  );
}
