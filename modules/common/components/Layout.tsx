import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

import Header from "./Header";

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: black;
  color: white;
  height: 100px;
`;

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <Root>
    <Header />
    {children}
    <Footer>TODO: footer</Footer>
  </Root>
);

export default Layout;
