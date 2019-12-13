import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.gray10};
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
  padding: 2rem ${sizes.sidePadding};
`;

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
`;

const SectionContentRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 100%;
  max-width: ${screenSizes.medium}px;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
  }
`;

const MemberRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 2rem 0;
`;

const FacePictureContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
`;
const FacePicture = styled.img`
  height: 100%;
`;

const MemberName = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.35rem;
  color: ${theme.color.gray1};
`;

const MemberRole = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.05rem;
  color: ${theme.color.gray1};
`;

const MemberLinkSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemberLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 0.2rem;
  :hover {
    font-weight: 800;
  }
`;

const Member: FunctionComponent<{
  src: string;
  memberName: string;
  memberRole: string;
}> = ({ src, memberName, memberRole }) => (
  <MemberRoot>
    <FacePictureContainer>
      <FacePicture decoding="async" src={src} />
    </FacePictureContainer>
    <MemberName>{memberName}</MemberName>
    <MemberRole>{memberRole}</MemberRole>
    <MemberLinkSection>
      <MemberLink>LinkedIn</MemberLink>
      <MemberLink>CV</MemberLink>
    </MemberLinkSection>
  </MemberRoot>
);

const AboutUsSection: FunctionComponent<{}> = () => (
  <Root>
    <SectionTitle>About us</SectionTitle>
    <SectionContentRoot>
      <Member
        src="/bio/viktor.png"
        memberName="Viktor Váczi"
        memberRole="Founder"
      />
      <Member
        src="/bio/balazs.jpg"
        memberName="Balázs Horváth"
        memberRole="Founder"
      />
    </SectionContentRoot>
  </Root>
);

export default AboutUsSection;
