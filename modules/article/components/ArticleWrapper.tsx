import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import Layout from "../../common/components/Layout";

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const BlogContent = styled.section`
  flex-grow: 1;
  display: flex;
  min-height: 100vh;
  max-width: ${screenSizes.maxWidth}px;
  width: 100%;
  padding: 2rem ${sizes.sidePadding};
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

const ArticleWrapper: FunctionComponent<{}> = ({ children }) => (
  <Layout>
    <Root>
      <BlogContent className="articleWrapper">{children}</BlogContent>
    </Root>
  </Layout>
);

export default ArticleWrapper;
