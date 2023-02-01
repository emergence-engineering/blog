import React from "react";
import styled from "styled-components";

import theme, { screenSizes } from "../../../utils/theme";
import SzamlaBridgheImg from "../../../public/casestudies/szamlabridge.svg";
import PlaceOfCardsImg from "../../../public/casestudies/placeOfCards.png";
import DiscordGitBotImg from "../../../public/casestudies/discordGitBot.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.white};
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
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid ${theme.color.gray8};
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
    //border-radius: 50%;
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

const LinkWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 100%;
  max-width: 100%;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Arrow = styled.img.attrs({ src: "/casestudies/arrow.svg" })`
  width: 2rem;
  height: 2rem;
  align-self: flex-end;
  cursor: pointer;
`;

const Description = styled.div`
  max-width: 75%;
  min-width: 18rem;
  font-family: ${theme.fontFamily.general};
  font-weight: 300;
  font-size: 16pt;
  color: ${theme.color.gray1};
  text-align: center;
  margin: 1rem 0 1rem 0;
`;

interface CaseStudiesHave {
  img: StaticImageData;
  title: string;
  skills: string;
  descr: string;
  link?: string;
}

type ListOfWhatTheyHave = CaseStudiesHave[];

const caseStudies: ListOfWhatTheyHave = [
  {
    img: PlaceOfCardsImg,
    title: "Place of Cards",
    skills: "Place-card editor website",
    descr: `Website integrated with automatic invoicing system, a payment system and a printing as a service provider. The user can also create printable Placecards PDSs within a few clicks. The in-browser customization tool is available to customise templates and choose the one that best fits her big day.`,
    link: "https://www.placeofcards.com",
  },
  {
    img: SzamlaBridgheImg,
    title: "SzamlaBridge",
    skills: "SaaS for bridging payment providers with invoicing services",
    descr:
      "Szamlabridge (beta) provides an admin interface and an API to connect payment services like Stripe to corporate invoicing platforms.",
  },
  {
    img: DiscordGitBotImg,
    title: "Discord Git Bot",
    skills:
      "A Discord robot that notifies your team when change happened in the codebase",
    descr: `A lightweight and very easy to use Discord to Github webhook integration written in Elixir using Phoenix Liveview `,
    link: "https://www.discordgitbot.com",
  },
];

const descriptionText = `Here are a few of our own products. All of them were designed, developed and marketed by us. Currently we don't have case studies for the work that we are doing for our clients, but if you are interested in our references just contact someone on LinkedIn from the "Clients said about us" section on our landing page.`

export default function CaseStudiesList() {

  return (
    <Root>
      <Title>Case studies</Title>
      <CaseStudiesWrapper>
        <Description>
          {descriptionText}
        </Description>
        {caseStudies.map((project) => (
          <CaseStudy key={project.title.toLowerCase()}>
            <PictureContainer>
              <PictureWrapper>
                <Image src={project.img} alt="sorry" />
              </PictureWrapper>
            </PictureContainer>

            <TextWrapper>
              <CaseStudyTitle>{project.title}</CaseStudyTitle>
              <CaseStudySkills>{project.skills}</CaseStudySkills>
              <CaseStudyDescr>{project.descr}</CaseStudyDescr>
              {project?.link && (
                <LinkWrapper>
                  <Link href={project.link} passHref>
                    <Arrow />
                  </Link>
                </LinkWrapper>
              )}
            </TextWrapper>
          </CaseStudy>
        ))}
      </CaseStudiesWrapper>
    </Root>
  );
}
