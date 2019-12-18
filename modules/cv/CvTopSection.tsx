import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FacePicture } from "../landingPage/components/AboutUsSection";
import theme from "../../utils/theme";

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
const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FaceContainer = styled.div`
  height: 7rem;
  padding-right: 1rem;
`;
const TextContaner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CvTopSection: FunctionComponent<{
  imgSrc: string;
  name: string;
  roleText: string;
}> = ({ imgSrc, name, roleText }) => (
  <TopSection>
    <FaceContainer>
      <FacePicture decoding="async" src={imgSrc} />
    </FaceContainer>
    <TextContaner>
      <Name>{name}</Name>
      <RoleText>{roleText}</RoleText>
    </TextContaner>
  </TopSection>
);
