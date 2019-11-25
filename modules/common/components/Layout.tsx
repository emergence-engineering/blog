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
    <Footer>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/popcorns-arts"
          title="Icon Pond"
        >
          Icon Pond
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Footer>
  </Root>
);

export default Layout;
