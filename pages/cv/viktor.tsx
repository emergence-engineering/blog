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
I have a bachelors degree in Electrical Engineering from BUTE with an embedded devices specialization. 
Born with a love in my heart for sciences I picked up programming at 8 and did a lot of advanced physics courses during my time at the university, and have solid mathematics foundations.
Worked with a lot of different sides of tech, from GPU programming to FPGAs, ARM microcontrollers, and the web.

I always look at things from the business side too, it's not enough for me for something to be interesting, the end-goal should also make sense. My goal when working for any business is to help that business achieve its goals, and not just writing code, but providing valuable feedback.
I'm a pro foosball player, and a hobby musician.
`;
const imgSrc = "/bio/viktor.png";

const ViktorCV: FunctionComponent<{}> = () => (
  <Layout>
    <Root>
      <Content>
        <CvTopSection
          imgSrc={imgSrc}
          name="Viktor Váczi"
          roleText="co-founder"
          linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
          githubLink="https://github.com/ViktorVaczi90"
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
              duration="~1 year"
              eventTitle="Greenfield fullstack development project for Chapterly"
              eventDescription="As a part of a small but focused team helped to make Chapterly a reality. A really interesting PWA, involving an offline custom collaborative editor, an image editor, back-end document format conversion, LaTeX book generation and a lot of other things."
            />
            <TimelineItem
              timelineLabel=">"
              duration="1 year"
              eventTitle="Front-end development project for pissup.com"
              eventDescription="Helped in the performance optimization of the existing back office site, developed a brand new customer site. Also helped a junior developer with essentially zero React experience to get up to speed, and be a valuable part of the team."
            />
            <TimelineItem
              timelineLabel=">"
              duration="~1 year"
              eventTitle="Enterprise investment platform development"
              eventDescription="Node.js backend with PostgreSQL, React front-end. It was a huge application with many contributors and interesting performance optimizations."
            />
            <TimelineItem
              timelineLabel="2014"
              duration="2 years"
              eventTitle="Contract Lead developer for Tru2Air (US)"
              specialEventText="First project together with Balázs the co-founder of Emergence Engineering"
              eventDescription="Developed a plug and play protocol over I2C and a custom protocol for accessing sensors over 6LoWPAN and RPL using RIOT and later Contiki OS. I've also worked on a Node.js backend and the React front-end. I've also created a lot of prototypes which involved a lot of SMD work, and designed / printed a custom 3d printed case."
            />
            <TimelineItem
              timelineLabel="2013"
              eventTitle="Electrical Engineering BSc. @ BUTE"
              eventDescription="FPGA and embedded devices specialization. Before getting my degree I've started doing freelancing work for a water treatment plant. My thesis was a custom DC motor servo controller with a magnetic encoder."
              duration=""
            />
            <TimelineItem
              timelineLabel=">"
              eventTitle="FPGA competition 3rd place"
              eventDescription="At our university we had an FPGA competition with the end goal of a Tetris game. Created a VGA, synth and game logic with Verilog. For bitmap generation our two-person team made a C# application."
              duration=""
            />
            <TimelineItem
              position="BOTTOM"
              timelineLabel="2011"
              eventTitle="Hobby CNC machine"
              eventDescription="Created a working ( although not very good ) CNC machine with one of my friends and learned a lot about embedded devices, SolidWorks, CAD/CAM, LinuxCNC, mechanical design and stepper motors."
              duration=""
            />
          </TimelineContainer>
        </TimelineContainerRoot>
      </Content>
    </Root>
  </Layout>
);

export default ViktorCV;
