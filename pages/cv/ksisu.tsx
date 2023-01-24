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
I have a BSc degree in Informatics from BUTE with software architecture specialization. 
Interested in Scala, hard DevOps problems, teaching & a maybe little bit of embedded.

Father of young kid, enjoying gardening in my free time.
`;

const KsisuCV: FunctionComponent = () => (
    <Layout>
      <Root>
        <Content>
          <CvTopSection
              imgSrc="ksisu"
              name="Kristóf Horváth"
              roleText="scala team lead"
              // linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
              githubLink="https://github.com/Ksisu"
          />
          <Introduction>{introText}</Introduction>
          <TimelineContainerRoot>
            <TimelineContainer>
              <TimelineItem
                  position="TOP"
                  eventTitle="Freelance developer"
                  timelineLabel="2020"
                  eventDescription="Doing mostly Scala, Angular / React, DevOps projects"
                  duration=""
              />
              <TimelineItem
                  timelineLabel="2017"
                  eventTitle="Informatics BSc. @ BUTE"
                  eventDescription="Learned how Angular works on a serious project."
                  duration=""
              />
              <TimelineItem
                  timelineLabel="2016"
                  duration="4 years"
                  eventTitle="Developer at a software consulting firm"
                  eventDescription="Learned about Angular, Kubernetes, Scala and AWS on the job."
              />
              <TimelineItem
                  timelineLabel="2012"
                  eventTitle="University community websites"
                  eventDescription="Developed community websites for students in JAVA EE."
                  duration=""
              />
              <TimelineItem
                  timelineLabel="2009"
                  eventTitle="Embedded programming"
                  eventDescription="Hobby projects with PIC microcontrollers."
                  duration=""
              />
              <TimelineItem
                  position="BOTTOM"
                  timelineLabel="2006"
                  eventTitle="Started programming"
                  eventDescription="School portal in PHP Fusion, modding CoD2."
                  duration=""
              />
            </TimelineContainer>
          </TimelineContainerRoot>
        </Content>
      </Root>
    </Layout>
);

export default KsisuCV;
