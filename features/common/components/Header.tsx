import styled from "styled-components";
import React, { FunctionComponent } from "react";
import { withRouter } from "next/router";
import Image from "next/image";
import { WithRouterProps } from "next/dist/client/with-router";
// @ts-ignore
import ReactHeadroom from "react-headroom";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";
import { UnstyledLink } from "../../../utils/link";
import EELogo from "../../../public/ee-logo.svg";
import GithubIcon from "../../../public/github-mark.svg";

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
  padding: 0 ${sizes.sidePadding};
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: ${theme.color.gray8};
`;

const LeftContainer = styled.div`
  flex-grow: 1;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SiteTitle = styled.a`
  display: flex;
  flex: 1;
  font-size: 2.5rem;
  font-weight: 700;
  font-variant: small-caps;
  text-decoration: none;
  color: ${theme.color.gray1};
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: ${screenSizes.large}px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: ${screenSizes.large}px) and (max-width: ${screenSizes.extraLarge}px) {
    font-size: 2rem;
  }
`;

const GithubLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const ContentWrapper = styled.div`
  @media screen and (min-width: ${screenSizes.extraLarge}px) {
    padding-left: 10.5%;
    padding-right: 10.5%;
  }
  @media screen and (min-width: ${screenSizes.large}px) and (max-width: ${screenSizes.extraLarge}px) {
    padding-left: 2.5%;
    padding-right: 2.5%;
  }
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? theme.color.gray11 : theme.color.gray1)};
  cursor: pointer;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: "Oswald", sans-serif;
  transition: text-shadow 1s ease, background-color 0.2s ease; // TODO!
  border-radius: 0.3rem;
  text-decoration: none;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1.3rem;
  font-family: "Oswald", sans-serif;
  transition: text-shadow 1s ease, background-color 0.2s ease; // TODO!
  color: ${theme.color.tertiary};
  padding: 0.3rem 1.2rem;
  text-decoration: none;
  @media screen and (max-width: ${screenSizes.medium}px) {
    font-size: 1rem;
  }
  :hover {
    color: ${theme.color.tertiary5};
  }
`;

interface HeaderLinkProps {
  href: string;
  caption: string;
}
const HeaderLinkRoot: FunctionComponent<HeaderLinkProps & WithRouterProps> = (
  props,
) => {
  const { href, caption, router } = props;
  return (
    <UnstyledLink href={href} passHref>
      <Anchor active={router.pathname.split("/")[1] === href.split("/")[1]}>
        {caption}
      </Anchor>
    </UnstyledLink>
  );
};

export const HeaderLink = withRouter(HeaderLinkRoot);

const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: ${screenSizes.large - 1}px) {
    display: block;
  }
`;

const BigScreenContainer = styled.div`
  display: none;

  @media screen and (min-width: ${screenSizes.large}px) {
    display: flex;
    justify-items: flex-end;
    align-items: center;
  }
`;

const PlatformWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-evenly;
  align-items: baseline;

  @media screen and (max-width: ${screenSizes.large - 1}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const redirectTo = (id: string) => {
  if (typeof window !== "undefined") {
    if (id === "github") {
      return window.open("https://github.com/emergence-engineering", "_blank");
    }
  }
};

const Header: FunctionComponent = () => (
  <Headroom>
    <Root>
      <ContentWrapper>
        <LeftContainer>
          <SiteTitle href="/">
            <Image
              src={EELogo}
              alt="logo"
              width={265}
              height={48}
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </SiteTitle>
        </LeftContainer>
        <RightContainer>
          <BigScreenContainer>
            <HeaderLink href="/" caption="Home" />
            <HeaderLink href="/blog" caption="Blog" />
            <HeaderLink href="/team" caption="Team" />
            <HeaderLink href="/references" caption="References" />
            <ContactUsLink href="/#contactUs">Contact Us</ContactUsLink>
            <PlatformWrapper>
              <GithubLogoWrapper onClick={() => redirectTo("github")}>
                <Image
                  src={GithubIcon}
                  alt="github"
                  width={32}
                  height={32}
                  sizes="100vw"
                  // placeholder={"blur"}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </GithubLogoWrapper>
            </PlatformWrapper>
          </BigScreenContainer>
          <MobileContainer>
            <HamburgerMenu>
              <HeaderLink href="/" caption="Home" />
              <HeaderLink href="/blog" caption="Blog" />
              <HeaderLink href="/team" caption="Team" />
              <HeaderLink href="/references" caption="References" />
              <ContactUsLink href="/#contactUs">Contact Us</ContactUsLink>
              <PlatformWrapper>
                <GithubLogoWrapper onClick={() => redirectTo("github")}>
                  <Image
                    src={GithubIcon}
                    alt="github"
                    width={32}
                    height={32}
                    sizes="100vw"
                    // placeholder="blur"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </GithubLogoWrapper>
              </PlatformWrapper>
            </HamburgerMenu>
          </MobileContainer>
        </RightContainer>
      </ContentWrapper>
    </Root>
  </Headroom>
);

export default Header;
