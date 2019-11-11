import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";

import theme from "../../utils/theme";

const Root = styled.header`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  background-color: ${theme.color.gray1};
  color: white;
  height: 100px;
  align-items: center;
`;

const LeftContainer = styled.div`
  flex: 2;
`;

const RightContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
`;

const SiteTitle = styled.a`
  flex: 1;
  font-size: 1.7em;
  font-weight: bolder;
  font-variant: small-caps;
  text-decoration: none;
  color: white;
  height: 2em;
  margin-left: 10px;
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
    <LeftContainer>
      <SiteTitle href="/index">Emergence Engineering</SiteTitle>
    </LeftContainer>
    <RightContainer>
      <HeaderLink href="/" caption="Home" />
      <HeaderLink href="/blog" caption="Blog" />
    </RightContainer>
  </Root>
);

export default Header;
