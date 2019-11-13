import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Header from "../../common/components/Header";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const BlogContent = styled.section`
  flex-grow: 1;
  margin-left: 25%;
  margin-right: 25%;
`;

const ArticleWrapper: FunctionComponent<{}> = ({ children }) => (
  <Root>
    <Header />
    <BlogContent>{children}</BlogContent>
  </Root>
);

export default ArticleWrapper;
