import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import ViktorImage from "../../../public/bio/viktor.png";
import MatejcsokImage from "../../../public/bio/matejcsok.jpg";
import AronImage from "../../../public/bio/aron.jpg";
import DavidImage from "../../../public/bio/ldavid.jpg";
import CsengeImage from "../../../public/bio/csenge.png";
import ZsofiImage from "../../../public/bio/zsofi.png";
import KsisuImage from "../../../public/bio/ksisu.png";
import TorcsiImage from "../../../public/bio/torcsi.jpeg";
import NorbiImage from "../../../public/bio/norbi.png";
import PetraImage from "../../../public/bio/petra2.png";
import KataImage from "../../../public/bio/kata.jpg";
import { UnstyledLink } from "../../../utils/link";
import { oswald, ptSans } from "../../../utils/fonts";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.gray11};
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
  padding: 4rem ${sizes.sidePadding};
`;

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
  font-size: 2rem;
  font-weight: 700;
`;

const SectionContentRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
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

export enum Members {
  viktor = "viktor",
  matejcsok = "matejcsok",
  aron = "aron",
  ldavid = "ldavid",
  csenge = "csenge",
  zsofi = "zsofi",
  ksisu = "ksisu",
  torcsi = "torcsi",
  norbi = "norbi",
  petra = "petra",
  kata = "kata",
}

const images = {
  [Members.viktor]: ViktorImage,
  [Members.matejcsok]: MatejcsokImage,
  [Members.aron]: AronImage,
  [Members.ldavid]: DavidImage,
  [Members.csenge]: CsengeImage,
  [Members.zsofi]: ZsofiImage,
  [Members.ksisu]: KsisuImage,
  [Members.torcsi]: TorcsiImage,
  [Members.norbi]: NorbiImage,
  [Members.petra]: PetraImage,
  [Members.kata]: KataImage,
};

export const FacePicture: FunctionComponent<{
  src: keyof typeof Members;
}> = ({ src }) => (
  <FacePictureWrapper>
    <Image
      src={images[src]}
      placeholder="blur"
      width={160}
      height={160}
      sizes="100vw"
      alt="facePic"
    />
  </FacePictureWrapper>
);
const MemberName = styled.div`
  font-weight: 800;
  font-size: 1.35rem;
  color: ${theme.color.gray1};
`;

const MemberRole = styled.div`
  font-size: 1.05rem;
  color: ${theme.color.gray1};
`;

const MemberWorkArea = styled.div`
  color: ${theme.color.gray1};
  text-align: center;
`;

const MemberStack = styled.div`
  color: ${theme.color.gray1};
  text-align: center;
`;

const MemberLinkSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.2rem;
`;

const MemberLinkAnchor = styled.div`
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
  <UnstyledLink href={href} passHref>
    <MemberLinkAnchor>
      <MemberLinkIcon className={faClassName} />
    </MemberLinkAnchor>
  </UnstyledLink>
);

export const Member: FunctionComponent<{
  src: keyof typeof Members;
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
  <MemberRoot className={`${oswald.className}`}>
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
        <UnstyledLink href={linkedInLink} target="_blank">
          <MemberLinkAnchor>
            <MemberLinkIcon className="fab fa-linkedin" />
          </MemberLinkAnchor>
        </UnstyledLink>
      ) : null}
      {githubLink ? (
        <UnstyledLink href={githubLink} target="_blank">
          <MemberLinkAnchor>
            <MemberLinkIcon className="fab fa-github-square" />
          </MemberLinkAnchor>
        </UnstyledLink>
      ) : null}
    </MemberLinkSection>
  </MemberRoot>
);

const AboutUsSection: FunctionComponent = () => (
  <Root>
    <SectionTitle className={`${ptSans.className}`}>About us</SectionTitle>
    <SectionContentRoot>
      <Member
        src={Members.viktor}
        memberName="Viktor Váczi"
        memberRole="CEO"
        memberWorkArea="Fullstack JS | CI/CD | Electrical engineering"
        memberStack="React.js Node.js Firebase"
        cvLink="/cv/viktor"
        linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
        githubLink="https://github.com/ViktorVaczi90"
      />
    </SectionContentRoot>
    <SectionTitle>Scala team</SectionTitle>
    <SectionContentRoot>
      <Member
        src={Members.ksisu}
        memberName="Kristóf Horváth"
        memberRole="Scala team lead"
        memberWorkArea="Scala | DevOps | Fullstack JS"
        memberStack="Scala Kubernetes"
        cvLink="/cv/ksisu"
        // linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
        githubLink="https://github.com/Ksisu"
      />
      <Member
        src={Members.torcsi}
        memberName="Gergő Törcsvári"
        memberRole="Scala team lead"
        memberWorkArea="Scala | DevOps | Fullstack JS"
        memberStack="Scala Kubernetes"
        cvLink="/cv/torcsi"
        // linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
        githubLink="https://github.com/tg44"
      />
    </SectionContentRoot>
  </Root>
);

export default AboutUsSection;
