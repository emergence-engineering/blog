import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../utils/theme";
import Layout from "../../modules/common/components/Layout";
import { CvTopSection } from "../../modules/cv/CvTopSection";
import { TimelineContainerRoot, TimelineItem } from "../../modules/cv/Timeline";

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

const introText = `I am passionate about technology and problem solving. I started programming at a very young age. 
My road in technology lead to becoming a polyglot programmer with experience in both low level hardware development,
systems programming and scripting. 
I am an open-source software and Linux enthusiast. Currently my main interests are autonomous robotics and computer vision.
I hold a masters degree in Molecular Biology from ELTE with specialization in Bioinformatics. 
I spent my time in the IT and the Physics programmes of the same university before finally switching
to bioinformatics. 
I am dog person, my hobbies are photoraphy, a powerlifting and Brazilian Jiu Jitsu.
`;
const imgSrc = "/bio/balazs.jpg";

const BalazsCV: FunctionComponent<{}> = () => (
  <Layout>
    <Root>
      <Content>
        <CvTopSection
          imgSrc={imgSrc}
          name="Balázs Horváth"
          roleText="co-founder"
        />
        <Introduction>{introText}</Introduction>
        <TimelineContainerRoot>
          <TimelineContainer>
            <TimelineItem
              position="TOP"
              eventTitle="Co-founded Emergence Engineering"
              timelineLabel="2019"
              eventDescription=""
              duration=""
            />
            <TimelineItem
              timelineLabel=">"
              duration=""
              eventTitle="AWS Certified Developer"
              eventDescription="Certification ID: 8F340GF1JJE11RCL"
            />
            <TimelineItem
              timelineLabel=">"
              duration="~half year"
              eventTitle="Blockchain developer for a London based Advertising company"
              eventDescription="Wanted to do something new, I was offered to join an ongoing blockchain project. Chaincode development in Go."
            />
            <TimelineItem
              timelineLabel=">"
              duration="~3 months"
              eventTitle="Team lead developer for a London based multinational company"
              eventDescription="Lead developer of a small team. Fullstack work, porting old solutions to- and prototyping new thing in Node.js and React.js"
            />
            <TimelineItem
              timelineLabel=">"
              duration="~1 year"
              eventTitle="Team lead developer for a London based Medical-Tech startup"
              eventDescription="Web and iOS app development. Fullstack work: React.js, Node.js. In the second half of the project promotion to team lead developer for the project: sprint planning, task delegation, technology decisions,"
            />
            <TimelineItem
              timelineLabel=">"
              duration="~1 year"
              eventTitle="IoT project for a British startup in the beef industry"
              eventDescription={`Remotely integrated into a greenfield project, where the majority of the team was London based.
                Main focus on the "Internet" side of IoT. Fullstack applications with React.js, Redux, Node.js MongoDb and Python`}
            />
            <TimelineItem
              timelineLabel="2015"
              duration="~2 years"
              eventTitle="Remote contractor for Tru2Air (US)"
              specialEventText="First project with Viktor the co-founder of Emergence Engineering"
              eventDescription="Remotely working for a US based  IOT startup. Developing software for both hardware (panStamp, Ti MCUs) in C and web applications (React, Node.js)."
            />
            <TimelineItem
              timelineLabel=">"
              duration="~2 years"
              eventTitle="Software developer intern at NetBiol"
              eventDescription="Analysis of biological network data with Python. Web application development with React and Node.js. Reference: http://signafish.org/"
            />
            <TimelineItem
              position="BOTTOM"
              timelineLabel="2013"
              eventTitle="PHP developer"
              eventDescription="Fullstack job using HTML, CSS, Javascript"
              duration="1 year"
            />
          </TimelineContainer>
        </TimelineContainerRoot>
      </Content>
    </Root>
  </Layout>
);

export default BalazsCV;
