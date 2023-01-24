import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../utils/theme";
import Layout from "../../features/common/components/Layout";
import {
  TimelineContainerRoot,
  TimelineItem,
} from "../../features/cv/Timeline";
import { CvTopSection } from "../../features/cv/CvTopSection";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.background2};
  padding: 1rem ${sizes.sidePadding};
  width: 100%;
  @media screen and (max-width: ${screenSizes.small}px) {
    padding: 0 ${sizes.sidePadding} 2rem ${sizes.sidePadding};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${screenSizes.medium}px;
`;

const Introduction = styled.div`
  font-family: ${theme.fontFamily.general};
  font-weight: 200;
  font-size: 1.2rem;
  text-align: justify;
  text-justify: newspaper;
`;

const TimelineContainer = styled.div`
  border-left: solid;
  border-left-color: ${theme.color.tertiary};
  border-left-width: 0.1rem;
`;

const introText = `
I have a masters degree in Informatics from BUTE with distributed systems & cloud computing specialization. 
Interested in blockchain tech, cloud computing, 3d printing. Scala is my favourite language so far.
`;

const TorcsiCV: FunctionComponent = () => (
  <Layout>
    <Root>
      <Content>
        <CvTopSection
          imgSrc="torcsi"
          name="Gergő Törcsvári"
          roleText="scala team lead"
          // linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
          githubLink="https://github.com/tg44"
        />
        <Introduction>{introText}</Introduction>
        <TimelineContainerRoot>
          <TimelineContainer>
            <TimelineItem
              position="TOP"
              eventTitle="Freelance developer"
              timelineLabel="2020"
              eventDescription="Helping startups with their Industry 3.0 & Scala problems"
              duration=""
            />
            <TimelineItem
              timelineLabel="2016"
              duration="4 years"
              eventTitle="Developer at a software consulting firm"
              eventDescription="Worked on a lot of different projects with Scala, Java, did a lot of CI/CD/Infra work."
            />
            <TimelineItem
              timelineLabel="2016"
              duration=""
              eventTitle="Informatics MSc. @ BUTE"
              eventDescription="Flow simulation on compute shader."
            />
            <TimelineItem
              timelineLabel="2015"
              duration="2 years"
              eventTitle="Teaching @ BUTE"
              eventDescription="Database lab teaching assistant."
            />
            <TimelineItem
              timelineLabel="2014"
              duration=""
              eventTitle="Google Summer of Code"
              // specialEventText="First project together with Balázs the co-founder of Emergence Engineering"
              eventDescription="Followed up my Bsc. work with Lucene, managed to improve its text classifier."
            />
            <TimelineItem
              timelineLabel="2013"
              eventTitle="Informatics BSc. @ BUTE"
              eventDescription="Thesis was about patent classification from the text with Lucene. Started working with multiple companies during the Bsc. period, one of the was a really early IOT project."
              duration=""
            />
            <TimelineItem
              timelineLabel="2012"
              eventTitle="University community websites"
              eventDescription="Developed websites helping the integration of freshman students."
              duration=""
            />
            <TimelineItem
              position="BOTTOM"
              timelineLabel="2008"
              eventTitle="Started programming"
              eventDescription="Doing forums & games in PHP / Javascript."
              duration=""
            />
          </TimelineContainer>
        </TimelineContainerRoot>
      </Content>
    </Root>
  </Layout>
);

export default TorcsiCV;
