import React from "react";
import styled from "styled-components";

import theme, { screenSizes } from "../../../utils/theme";
import ScandalInBelgraviaImg from "../../../public/casestudies/scandal_in_belgravia.png";
import AbominableBrideImg from "../../../public/casestudies/abominable_bride.png";
import Image from "next/image";
import Link from "next/link";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: #ecd2d20d;
  width: 100%;
  padding: 4rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: ${theme.color.gray1};
`;

const CaseStudiesWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 70vw;
  min-height: 40vh;
  justify-content: space-evenly;
  align-items: center;
`;

const CaseStudy = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 1rem;
  margin-top: 2rem;
  box-shadow: 4px 7px 6px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 5px;
`;

const PictureContainer = styled.div`
  width: 30%;
  display: flex;
  margin-right: 1rem;
`;

const PictureWrapper = styled.div`
  max-width: 15rem;
  min-width: 10rem;
  flex: 1;
  align-self: center;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    flex: 1;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  align-items: flex-start;
  max-width: 30rem;
  min-width: 18rem;
  flex: 1;
`;

const CaseStudyTitle = styled.div`
  color: ${theme.color.tertiary};
  font-weight: 700;
  font-size: 1.3rem;
`;

const CaseStudySkills = styled.div`
  color: ${theme.color.gray3};
  font-weight: 300;
  font-size: 0.8rem;
`;

const CaseStudyDescr = styled.div`
  font-family: ${theme.fontFamily.general};
  font-weight: 300;
  text-align: justify;
`;

const Arrow = styled.img.attrs({ src: "/casestudies/arrow.svg" })`
  width: 2rem;
  height: 2rem;
  align-self: flex-end;
  cursor: pointer;
`;

interface CaseStudiesHave {
  img: StaticImageData;
  title: string;
  skills: string;
  descr: string;
}

type ListOfWhatTheyHave = CaseStudiesHave[];

export default function CaseStudiesList() {
  const caseStudies: ListOfWhatTheyHave = [
    {
      img: ScandalInBelgraviaImg,
      title: "A SCANDAL IN BELGRAVIA",
      skills: "WordPress, MySQL, CPT UI, ACF, Yoast SEO, HTML5/CSS3",
      descr:
        "The episode depicts Sherlock Holmes' (Benedict Cumberbatch) confrontation with Irene Adler (Lara Pulver), " +
        "a dominatrix who has compromising photographs taken with a female member of the royal family. " +
        "The photographs are stored inside her mobile phone, along with other valuable information. ",
    },
    {
      img: AbominableBrideImg,
      title: "THE ABOMINABLE BRIDE",
      skills: "Java, Spring Boot, MongoDB, Oracle, Angular",
      descr:
        "Sherlock, under the influence of drugs, enters his mind palace to solve a case from Victorian times " +
        "about a bride shooting herself in the head and rising from the grave to kill her husband. " +
        "If he can solve the murder it might lead him to how Moriarty has risen from the grave after similarly shooting himself " +
        "in the head. He solves the case, and concludes that Moriarty is indeed dead, but 'knows his next move'. ",
    },
  ];

  return (
    <Root>
      <Title>Case studies</Title>
      <CaseStudiesWrapper>

        {caseStudies.map((project) => (
          <CaseStudy>

            <PictureContainer>
              <PictureWrapper>
                <Image src={project.img} alt="sorry" />
              </PictureWrapper>
            </PictureContainer>

            <TextWrapper>
              <CaseStudyTitle>{project.title}</CaseStudyTitle>
              <CaseStudySkills>{project.skills}</CaseStudySkills>
              <CaseStudyDescr>{project.descr}</CaseStudyDescr>
              <Link href={"/"} passHref>
                <Arrow />
              </Link>
            </TextWrapper>

          </CaseStudy>
        ))}

      </CaseStudiesWrapper>
    </Root>
  );
}
