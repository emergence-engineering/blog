import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";

import theme, { screenSizes, sizes } from "../../../utils/theme";

const Root = styled.header`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  background-color: ${theme.color.primary};
  color: white;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0 ${sizes.sidePadding};
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SiteTitle = styled.a`
  flex: 1;
  font-size: 1.7em;
  font-weight: bolder;
  font-variant: small-caps;
  text-decoration: none;
  color: white;
  height: 2em;
`;

const ContentWrapper = styled.div`
  max-width: ${screenSizes.maxWidth}px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled.a`
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

interface HeaderLinkProps {
  href: string;
  caption: string;
}
const HeaderLink: FunctionComponent<HeaderLinkProps> = (
  props: HeaderLinkProps,
) => {
  const { href, caption } = props;
  return (
    <Link href={href}>
      <Anchor>{caption}</Anchor>
    </Link>
  );
};

const Header: FunctionComponent<{}> = () => (
  <Root>
    <ContentWrapper>
      <LeftContainer>
        <SiteTitle href="/index">Emergence Engineering</SiteTitle>
      </LeftContainer>
      <RightContainer>
        <HeaderLink href="/" caption="Home" />
        <HeaderLink href="/blog" caption="Blog" />
      </RightContainer>
    </ContentWrapper>
  </Root>
);

export default Header;
