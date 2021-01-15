import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes, sizes } from "../../../utils/theme";

export const FooterRoot = styled.footer`
  max-width: ${screenSizes.maxWidth}px;
  padding: 0 ${sizes.sidePadding};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.color.gray8};
`;

const FooterWrapper = styled.div`
  flex-shrink: 0;
  background-color: ${theme.color.gray1};
  color: white;
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const IconsA = styled.a`
  :visited,
  :hover,
  :active {
    color: ${theme.color.gray10};
  }
  text-decoration: none;
  color: ${theme.color.gray9};
`;

const Centered = styled.div`
  text-align: center;
`;

const Footer: FunctionComponent = () => (
  <FooterWrapper>
    <FooterRoot>
      <Centered>Made by Emergence Engineering, 2019</Centered>
      <Centered>
        Icons made by{" "}
        <IconsA
          href="https://www.flaticon.com/authors/popcorns-arts"
          title="Icon Pond"
        >
          Icon Pond
        </IconsA>{" "}
        from{" "}
        <IconsA href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </IconsA>
      </Centered>
    </FooterRoot>
  </FooterWrapper>
);

export default Footer;
