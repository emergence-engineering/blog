import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Headroom from "react-headroom";

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
  //position: -webkit-sticky; /* Safari */
  //position: sticky;
  //top: 0;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SiteTitle = styled.a`
  flex: 1;
  font-size: 2.5rem;
  font-weight: 700;
  font-variant: small-caps;
  text-decoration: none;
  color: ${theme.color.gray10};
  font-family: "Oswald", sans-serif;
  height: 2em;
`;

const ContentWrapper = styled.div`
  max-width: ${screenSizes.maxWidth}px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled.a<{ active: boolean }>`
  color: ${({ active }) => (active ? theme.color.gray11 : theme.color.accent)};
  cursor: pointer;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1.3rem;
  font-family: "Oswald", sans-serif;
  transition: text-shadow 1s ease; // TODO!
`;

interface HeaderLinkProps {
  href: string;
  caption: string;
}
const HeaderLinkRoot: FunctionComponent<HeaderLinkProps &
  WithRouterProps> = props => {
  const { href, caption, router } = props;
  return (
    <Link href={href}>
      <Anchor active={router.pathname.split("/")[1] === href.split("/")[1]}>
        {caption}
      </Anchor>
    </Link>
  );
};

const HeaderLink = withRouter(HeaderLinkRoot);

const Header: FunctionComponent<{}> = () => (
  <Headroom>
    <Root>
      <ContentWrapper>
        <LeftContainer>
          <SiteTitle href="/">Emergence Engineering</SiteTitle>
        </LeftContainer>
        <RightContainer>
          <HeaderLink href="/" caption="Home" />
          <HeaderLink href="/blog" caption="Blog" />
        </RightContainer>
      </ContentWrapper>
    </Root>
  </Headroom>
);

export default Header;
