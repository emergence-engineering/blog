import styled from "styled-components";
import { Description, Root, StyledDescription } from "./CaseStudiesList";
import theme, { screenSizes } from "../../../utils/theme";
import { projectDetails } from "../../../utils/openSrcPrData";
import OpenSrcPrCard from "./OpenSrcPrCard";
import References from "./References";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${theme.color.gray1};
`;

const CardWrapper = styled.div`
  margin: 2rem 0;
  max-width: 115rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: ${screenSizes.large}px) {
    max-width: 100%;
  }
`;

export const OtherRefWrapper = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
  gap: 0.5rem;
  text-decoration: none;
  margin-bottom: 2rem;

  @media screen and (max-width: ${screenSizes.large}px) {
    flex-direction: column;
    padding-right: unset;
  }
`;

export const StyledLink = styled.div`
  font-family: ${theme.fontFamily.general};
  font-size: 18pt;
  color: ${theme.color.tertiary};
  font-weight: 400;

  :hover {
    font-weight: 600;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const AnimatedArrow = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: ${theme.color.tertiary};

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const OpenSrcPr = () => {
  return (
    <Root style={{ alignItems: "unset" }}>
      <ContentWrapper style={{ minHeight: "unset" }}>
        <Title>Open source projects</Title>
        <Description>
          Here you find a list of all the open source projects we created.{" "}
          <br />
          Use them when you need and give us a feedback!
        </Description>
        <CardWrapper>
          {projectDetails.map((project, i) => (
            <OpenSrcPrCard
              key={i}
              title={project.title}
              article={project.article}
              icon={project.icon}
              gitLink={project.gitLink}
              description={project.description}
              command={project.command}
              tags={project.tags}
            />
          ))}
        </CardWrapper>
      </ContentWrapper>

      <OtherRefWrapper href={"/case-studies"}>
        <StyledDescription>Let me see the</StyledDescription>
        <StyledLink>Case Studies!</StyledLink>
        <ArrowWrapper>
          <AnimatedArrow
            style={{ animation: "fadeInOut 2s linear 0s infinite" }}
          >
            {" "}
            {">"}{" "}
          </AnimatedArrow>
          <AnimatedArrow
            style={{ animation: "fadeInOut 2s linear 0.5s infinite" }}
          >
            {" "}
            {">"}{" "}
          </AnimatedArrow>
          <AnimatedArrow
            style={{ animation: "fadeInOut 2s linear 1s infinite" }}
          >
            {" "}
            {">"}{" "}
          </AnimatedArrow>
        </ArrowWrapper>
      </OtherRefWrapper>

      <References />
    </Root>
  );
};

export default OpenSrcPr;
