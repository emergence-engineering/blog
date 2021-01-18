import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FacePicture } from "../landingPage/components/AboutUsSection";
import theme, { screenSizes } from "../../utils/theme";

const Name = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 2.5rem;
  margin-top: 2rem;
  text-decoration: underline;
  text-decoration-color: ${theme.color.tertiary};
`;
const RoleText = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.5rem;
  font-style: italic;
  color: ${theme.color.gray5};
  margin-bottom: 1.5rem;
`;
const TopSectionColumn = styled.div`
  display: flex;
  flex-basis: content;
  padding: 1rem 0;
`;

const TopSectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;
const FaceContainer = styled.div`
  height: 10rem;
  padding-right: 1rem;
`;
const TextContaner = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconLinkAnchor = styled.a`
  color: ${theme.color.gray1};
  text-decoration: none;
  cursor: pointer;
  padding: 0 0.2rem;
  :hover {
    font-weight: 800;
  }
`;
const LinkIcon = styled.i`
  color: ${theme.color.gray1};
  font-size: 2.5rem;
  :hover {
    color: ${theme.color.tertiary};
  }
`;

const IconLink: FunctionComponent<{ faClassName: string; href: string }> = ({
  faClassName,
  href,
}) => (
  <IconLinkAnchor target="_blank" href={href}>
    <LinkIcon className={faClassName} />
  </IconLinkAnchor>
);

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const LeftSide = styled.div`
  display: flex;
  @media screen and (max-width: ${screenSizes.small}px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const CvTopSection: FunctionComponent<{
  imgSrc: string;
  name: string;
  roleText: string;
  linkedInLink: string;
  githubLink: string;
}> = ({ imgSrc, name, roleText, linkedInLink, githubLink }) => (
  <TopSectionColumn>
    <TopSectionRow>
      <FaceContainer>
        <FacePicture src={imgSrc} />
      </FaceContainer>
      <LeftSide>
        <TextContaner>
          <Name>{name}</Name>
          <RoleText>{roleText}</RoleText>
        </TextContaner>
        <LinkContainer>
          <IconLink faClassName="fab fa-github-square" href={githubLink} />
          <IconLink faClassName="fab fa-linkedin" href={linkedInLink} />
        </LinkContainer>
      </LeftSide>
    </TopSectionRow>
  </TopSectionColumn>
);
