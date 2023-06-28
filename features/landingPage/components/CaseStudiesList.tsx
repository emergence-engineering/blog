import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import theme, { screenSizes } from "../../../utils/theme";
import SzamlaBridgeImg from "../../../public/casestudies/szamlabridge.png";
import PlaceOfCardsImg from "../../../public/casestudies/placeOfCards.png";
import DiscordGitBotImg from "../../../public/casestudies/discordGitBot.png";
import ArrowIcon from "../../../public/casestudies/arrow.svg";
import SuggestCatImg from "../../../public/casestudies/suggestCat.png";

import {
  AnimatedArrow,
  ContentWrapper,
  OtherRefWrapper,
  StyledLink,
} from "./OpenSrcPr";
import References from "./References";

export const Root = styled.div`
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
  min-width: 15rem;
  display: flex;
  margin-right: 1rem;
  justify-content: center;

  @media screen and (max-width: ${screenSizes.medium}px) {
    width: 100%;
    margin-right: 0;
    justify-content: center;
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

export const Description = styled.div`
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
    img: SuggestCatImg,
    title: "SuggestCat",
    skills:
      "AI suggestion and grammar correction plug-in for modern web based text editors",
    descr:
      "SuggestCat adds AI features to your ProseMirror editor such as grammar correction and text completion",
    link: "https://www.suggestcat.com/",
  },
  {
    img: SzamlaBridgeImg,
    title: "SzamlaBridge",
    skills: "SaaS for bridging payment providers with invoicing services",
    descr:
      "Szamlabridge (beta) provides an admin interface and an API to connect payment services like Stripe to corporate invoicing platforms.",
    link: "https://www.szamlabridge.com",
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

const descriptionText = `Here are a few of our own products. All of them were designed, developed and marketed by us. Currently we don't have case studies for the work that we are doing for our clients, but if you are interested in our references just contact someone on LinkedIn from the "Clients said about us" section on our landing page.`;

export default function CaseStudiesList() {
  return (
    <Root style={{ alignItems: "unset" }}>
      <ContentWrapper>
        <Title>Case studies</Title>
        <CaseStudiesWrapper>
          <Description>{descriptionText}</Description>
          {caseStudies.map((project) => (
            <CaseStudy key={project.title.toLowerCase()}>
              <PictureContainer>
                <Image
                  src={project.img}
                  alt="sorry"
                  width={240}
                  height={240}
                  placeholder="blur"
                  blurDataURL={project.img.src}
                />
              </PictureContainer>

              <TextWrapper>
                <CaseStudyTitle>{project.title}</CaseStudyTitle>
                <CaseStudySkills>{project.skills}</CaseStudySkills>
                <CaseStudyDescr>{project.descr}</CaseStudyDescr>
                {project?.link && (
                  <LinkWrapper>
                    <Link href={project.link} passHref>
                      <Image
                        src={ArrowIcon.src}
                        alt="sorry"
                        width={32}
                        height={32}
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                          alignSelf: "flex-end",
                        }}
                      />
                    </Link>
                  </LinkWrapper>
                )}
              </TextWrapper>
            </CaseStudy>
          ))}
        </CaseStudiesWrapper>
      </ContentWrapper>

      <OtherRefWrapper href={"/open-source-projects"}>
        <Description style={{ minWidth: "unset", fontSize: "18pt" }}>
          Let me see the
        </Description>
        <StyledLink>Open source projects!</StyledLink>
        <AnimatedArrow style={{ animation: "fadeInOut 2s linear 0s infinite" }}>
          {" "}
          {">"}{" "}
        </AnimatedArrow>
        <AnimatedArrow
          style={{ animation: "fadeInOut 2s linear 0.5s infinite" }}
        >
          {" "}
          {">"}{" "}
        </AnimatedArrow>
        <AnimatedArrow style={{ animation: "fadeInOut 2s linear 1s infinite" }}>
          {" "}
          {">"}{" "}
        </AnimatedArrow>
      </OtherRefWrapper>

      <References />
    </Root>
  );
}
