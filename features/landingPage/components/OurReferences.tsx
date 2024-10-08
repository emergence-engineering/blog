import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import theme, { screenSizes } from "../../../utils/theme";
import github from "/public/github-mark.svg";
import caseStudiesCat from "/public/casestudies/caseStudiesCat.png";
import { clickable } from "../../../utils/mixins";
import { Description } from "./CaseStudiesList";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
  width: 100%;
  padding: 3rem 5rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    padding: 1rem 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${theme.color.gray1};
  margin: 0.8rem;
  cursor: default;
`;

const Feedback = styled.h4`
  width: 80%;
  font-weight: lighter;
  font-size: 0.9rem;
  text-align: center;
  font-family: "Open sans", sans-serif;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: ${screenSizes.large}px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  min-width: 30%;
  width: 40%;
  height: 31rem;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 15px 10px 20px 5px rgba(0, 0, 0, 0.1);
    ${clickable}
  }

  @media screen and (max-width: ${screenSizes.large}px) {
    width: 80%;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.div`
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.18);

  min-width: 200px;
  min-height: 200px;
  position: relative;
`;

const StyledTitle = styled(Title)`
  font-size: 1.75rem;

  ${Card}:hover & {
    color: ${theme.color.tertiary};
  }

  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

const StyledDescription = styled(Description)`
  font-size: 1.2rem;

  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const ViewMore = styled.div`
  color: ${theme.color.gray1};
  font-weight: 700;
  font-size: 1rem;

  :hover {
    color: ${theme.color.tertiary};
  }
`;

const OurReferences = () => (
  <Root>
    <TextWrapper>
      <Title>Our References</Title>
      <Description>
        Let's have a look at our open source projects and case studies. All of
        them were designed, developed and marketed by us.
      </Description>
      <Feedback>
        You have any questions? <br />
        Write to us at{" "}
        <a href="mailto: contact@emergence-engineering.com">
          contact@emergence-engineering.com
        </a>
      </Feedback>
    </TextWrapper>

    <CardWrapper>
      <Container style={{ backgroundColor: theme.color.gray10 }}>
        <Link href={"/opensource"} style={{ textDecoration: "none" }} passHref>
          <Card>
            <CardImg>
              <Image
                src={github}
                alt={""}
                fill
                style={{ objectFit: "contain" }}
              />
            </CardImg>
            <StyledTitle>Open source projects</StyledTitle>
            <StyledDescription>
              You can find projects of ours on GitHub and our useful and
              carefully-built npm packages
            </StyledDescription>
            <Link href={"/opensource"} passHref>
              <ViewMore>view more</ViewMore>
            </Link>
          </Card>
        </Link>
      </Container>

      <Container>
        <Link
          href={"/case-studies"}
          style={{ textDecoration: "none" }}
          passHref
        >
          <Card>
            <CardImg>
              <Image
                src={caseStudiesCat}
                alt={""}
                fill
                style={{ objectFit: "contain" }}
              />
            </CardImg>
            <StyledTitle>Case studies</StyledTitle>
            <StyledDescription>
              You can find here how our own projects came alive and now bloom
            </StyledDescription>
            <Link href={"/case-studies"} passHref>
              <ViewMore>view more</ViewMore>
            </Link>
          </Card>
        </Link>
      </Container>
    </CardWrapper>
  </Root>
);

export default OurReferences;
