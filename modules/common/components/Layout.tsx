import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";

import Header from "./Header";
import Footer from "./Footer";

const Root = styled.div`
  display: flex;
  background-color: ${theme.color.gray10};
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    <Root>{children}</Root>
    <Footer />
  </>
);

export default Layout;
