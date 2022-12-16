import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";

import Header from "./Header";
import Footer from "./Footer";

const Root = styled.div`
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;
  display: flex;
  background-color: ${theme.color.gray10};
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: PropsWithChildren) => (
  <Root>
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </Root>
);

export default Layout;
