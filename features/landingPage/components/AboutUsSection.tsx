import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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

export const FacePictureContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const FacePictureWrapper = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  img {
    border-radius: 50%;
  }
`;

export const FacePicture: FunctionComponent<{ src: string }> = ({ src }) => (
  <FacePictureWrapper>
    <Image src={src} layout="fill" />
  </FacePictureWrapper>
);

const MemberName = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
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
  text-align: center;
`;

const MemberStack = styled.div`
  font-family: ${theme.fontFamily.title};
  color: ${theme.color.gray1};
  text-align: center;
`;

const MemberLinkSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.2rem;
`;

const MemberLinkAnchor = styled.a`
  color: ${theme.color.gray1};
  text-decoration: none;
  cursor: pointer;
  padding: 0 0.2rem;
  :hover {
    font-weight: 800;
  }
`;
const MemberLinkIcon = styled.i`
  color: ${theme.color.gray1};
  font-size: 1.6rem;
  :hover {
    color: ${theme.color.tertiary};
  }
`;

const MemberLink: FunctionComponent<{ href: string; faClassName: string }> = ({
  href,
  faClassName,
}) => (
  <Link href={href} passHref>
    <MemberLinkAnchor>
      <MemberLinkIcon className={faClassName} />
    </MemberLinkAnchor>
  </Link>
);

export const Member: FunctionComponent<{
  src: string;
  memberName: string;
  memberRole: string;
  memberStack: string;
  memberWorkArea: string;
  cvLink?: string;
  linkedInLink?: string;
  githubLink?: string;
}> = ({
  src,
  memberName,
  memberRole,
  memberStack,
  memberWorkArea,
  cvLink,
  linkedInLink,
  githubLink,
}) => (
  <MemberRoot>
    <FacePictureContainer>
      <FacePicture src={src} />
    </FacePictureContainer>
    <MemberName>{memberName}</MemberName>
    <MemberRole>{memberRole}</MemberRole>
    <MemberWorkArea>{memberWorkArea}</MemberWorkArea>
    <MemberStack>{memberStack}</MemberStack>
    <MemberLinkSection>
      {cvLink ? (
        <MemberLink href={cvLink} faClassName="far fa-address-card" />
      ) : null}
      {linkedInLink ? (
        <MemberLinkAnchor href={linkedInLink} target="_blank">
          <MemberLinkIcon className="fab fa-linkedin" />
        </MemberLinkAnchor>
      ) : null}
      {githubLink ? (
        <MemberLinkAnchor href={githubLink} target="_blank">
          <MemberLinkIcon className="fab fa-github-square" />
        </MemberLinkAnchor>
      ) : null}
    </MemberLinkSection>
  </MemberRoot>
);

const AboutUsSection: FunctionComponent = () => (
  <Root>
    <SectionTitle>About us</SectionTitle>
    <SectionContentRoot>
      <Member
        src="/bio/viktor.png"
        memberName="Viktor Váczi"
        memberRole="co-founder"
        memberWorkArea="Fullstack JS | CI/CD | Electrical engineering"
        memberStack="React.js Node.js Firebase"
        cvLink="/cv/viktor"
        linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
        githubLink="https://github.com/ViktorVaczi90"
      />
      <Member
        src="/bio/balazs.jpg"
        memberName="Balázs Horváth"
        memberRole="co-founder"
        memberWorkArea="Fullstack JS | Microservices | Cloud"
        memberStack="React.js Node.js Go Firebase AWS"
        cvLink="/cv/balazs"
        linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
        githubLink="https://github.com/horvath-balazs"
      />
    </SectionContentRoot>
  </Root>
);

export default AboutUsSection;
