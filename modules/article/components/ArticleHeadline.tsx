import React from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";
import { ArticleIntro } from "../../../types/article";
import { BlogPostHeadLine } from "../../blog/components";

import Markdown, { MarkdownText } from "./Markdown";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 0 1rem;
  margin: 1rem 0;
  border: 1px solid ${theme.color.gray8};
  border-radius: 0.1rem;
  background-color: ${theme.color.gray10};
  h1 {
    text-decoration: none;
    margin: 1rem 0 0 0;
  }
`;

interface ArticleHeadlineProps extends ArticleIntro {
  tldr: MarkdownText;
}

export function ArticleHeadline({
  tldr,
  title,
  timestamp,
  author,
}: ArticleHeadlineProps) {
  return (
    <>
      <BlogPostHeadLine title={title} author={author} timestamp={timestamp} />
      <Wrapper>
        <Markdown source={tldr} />
      </Wrapper>
    </>
  );
}
