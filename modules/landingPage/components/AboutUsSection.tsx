import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: #ecd2d20d;
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
  padding: 4rem ${sizes.sidePadding};
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
  height: 10rem;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;
const FacePicture = styled.img`
  height: 100%;
  border-radius: 50%;
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

const MemberWorkArea = styled.div`
  font-family: ${theme.fontFamily.title};
  color: ${theme.color.gray1};
`;

const MemberStack = styled.div`
  font-family: ${theme.fontFamily.title};
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
  memberStack: string;
  memberWorkArea: string;
}> = ({ src, memberName, memberRole, memberStack, memberWorkArea }) => (
  <MemberRoot>
    <FacePictureContainer>
      <FacePicture decoding="async" src={src} />
    </FacePictureContainer>
    <MemberName>{memberName}</MemberName>
    <MemberRole>{memberRole}</MemberRole>
    <MemberWorkArea>{memberWorkArea}</MemberWorkArea>
    <MemberStack>{memberStack}</MemberStack>
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
        memberWorkArea="Electrical engineering | Fullstack JS | CI/CD"
        memberStack="React.js Node.js Firebase"
      />
      <Member
        src="/bio/balazs.jpg"
        memberName="Balázs Horváth"
        memberRole="Founder"
        memberWorkArea="Fullstack JS | Microservices | Cloud"
        memberStack="React.js Node.js Go Firebase AWS"
      />
    </SectionContentRoot>
  </Root>
);

export default AboutUsSection;
