import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import ReactHeadroom from "react-headroom";

import theme, { screenSizes, sizes } from "../../../utils/theme";

const Headroom = styled(ReactHeadroom)`
  z-index: 5;
`;
const Root = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  background-color: ${theme.color.gray11};
  color: white;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0 ${sizes.sidePadding};
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: ${theme.color.gray8};
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
  color: ${theme.color.gray1};
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: ${screenSizes.medium}px) {
    font-size: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: ${screenSizes.maxWidth}px;
  flex-grow: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Anchor = styled.a<{ active: boolean }>`
  color: ${({ active }) => (active ? theme.color.gray11 : theme.color.gray1)};
  cursor: pointer;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1.3rem;
  font-family: "Oswald", sans-serif;
  transition: text-shadow 1s ease, background-color 0.2s ease; // TODO!
  border-radius: 0.3rem;
  background-color: ${({ active }) =>
    active ? theme.color.tertiary : theme.color.gray11};
  padding: 0.3rem 1.2rem;
  @media screen and (max-width: ${screenSizes.medium}px) {
    font-size: 1rem;
  }
  :hover {
    color: ${theme.color.gray11};
    background-color: ${theme.color.tertiary5};
  }
`;

const ContactUsLink = styled.a`
  cursor: pointer;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1.3rem;
  font-family: "Oswald", sans-serif;
  transition: text-shadow 1s ease, background-color 0.2s ease; // TODO!
  border-radius: 0.3rem;
  background-color: ${theme.color.primary};
  color: ${theme.color.gray11};
  padding: 0.3rem 1.2rem;
  text-decoration: none;
  @media screen and (max-width: ${screenSizes.medium}px) {
    font-size: 1rem;
  }
  :hover {
    color: ${theme.color.gray11};
    background-color: ${theme.color.primary3};
  }
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
          <HeaderLink href="/team" caption="Team" />
          <HeaderLink href="/references" caption="References" />
          <ContactUsLink href="/#contactUs">Contact Us</ContactUsLink>
        </RightContainer>
      </ContentWrapper>
    </Root>
  </Headroom>
);

export default Header;
