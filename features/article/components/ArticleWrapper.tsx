import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import Layout from "../../common/components/Layout";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const BlogContent = styled.section`
  flex-grow: 1;
  display: flex;
  min-height: 100vh;
  max-width: ${screenSizes.maxWidth}px;
  background-color: ${theme.color.gray11};
  width: 100%;
  padding: 2rem ${sizes.sidePadding};
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
  h1 {
    text-decoration: underline;
    text-decoration-color: ${theme.color.tertiary};
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.3rem;
    margin: 0.5rem 0 0.5rem;
  }
  h4 {
    font-size: 1.15rem;
    margin: 0.5rem 0 0.5rem;
  }
  a {
    color: ${theme.color.tertiary};
    font-weight: bold;
    text-decoration: none;
  }
  blockquote {
    font-style: italic;
  }
  p,
  li {
    font-weight: 300;
  }
  p {
    margin: 0.25rem 0 0.25rem;
  }
`;

const ArticleWrapper: FunctionComponent = ({ children }) => (
  <Layout>
    <Root>
      <BlogContent>{children}</BlogContent>
    </Root>
  </Layout>
);

export default ArticleWrapper;
