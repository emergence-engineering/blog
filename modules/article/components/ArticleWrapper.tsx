import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Header from "../../common/components/Header";
import theme from "../../../utils/theme";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
  .articleWrapper a {
    color: ${theme.color.tertiary};
    font-weight: bold;
    text-decoration: none;
  }
  .articleWrapper blockquote {
    font-style: italic;
  }
  .articleWrapper p {
    font-weight: 400;
  }
`;

const BlogContent = styled.section`
  flex-grow: 1;
  margin-left: 25%;
  margin-right: 25%;
`;

const ArticleWrapper: FunctionComponent<{}> = ({ children }) => (
  <Root>
    <Header />
    <BlogContent className="articleWrapper">{children}</BlogContent>
  </Root>
);

export default ArticleWrapper;
