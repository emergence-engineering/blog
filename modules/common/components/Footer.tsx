import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes } from "../../../utils/theme";

export const FooterRoot = styled.footer`
  max-width: ${screenSizes.maxWidth}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    color: white;
  }
  color: white;
`;

const Footer: FunctionComponent<{}> = () => (
  <FooterWrapper>
    <FooterRoot>
      <div>
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
      </div>
    </FooterRoot>
  </FooterWrapper>
);

export default Footer;
