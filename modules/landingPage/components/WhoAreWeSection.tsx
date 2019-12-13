import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { sizes } from "../../../utils/theme";

import { IntroductionSection } from "./Introduction";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 20rem;
  background-color: ${theme.color.gray11};
  padding: 2rem ${sizes.sidePadding};
`;

const QuestionRowRoot = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: left;
`;

const Question = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.65rem;
  color: ${theme.color.gray1};
  padding-bottom: 0.5rem;
`;

const Answer = styled.div`
  font-family: ${theme.fontFamily.general};
  font-size: 1.15rem;
  font-weight: 200;
  padding-left: 1.5rem;
  width: 100%;
  color: ${theme.color.gray1};
  padding-bottom: 1.2rem;
`;

const QuestionRow: FunctionComponent<{ question: string; answer: string }> = ({
  question,
  answer,
}) => (
  <QuestionRowRoot>
    <Question>{question}</Question>
    <Answer>{answer}</Answer>
  </QuestionRowRoot>
);

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
`;

const title1 = `We can do complex things, in house`;
const p1 = `Emergence Engineering is a web, mobile and hardware development agency. We plan out, design and build modern cloud based applications.`;

const businessTitle = `We focus on the goals of your business`;
const businessText = `We care about your business. We are not just an other development firm that does the coding.
We are keen on understanding your perspective and your business goals. We will do our best help you to achieve them.`;

const flexibleTitle = `We are flexible`;
const flexibleText = `We can also integrate into ongoing projects with already established workflow and a sophisticated code base.`;

const title2 = `We see the big picture`;
const p2 = `We plan out our journey through the job to make the most out of our time.
We break down the project into pieces that are easy to tackle in asynchronous way.
We progress through the job in an efficient agile manner, finally connecting the pieces into a finished product.`;

const title3 = `We deliver in a continuous and transparent manner`;
const p3 = `You will see how your product is improved day by day. 
Once the work plan has been established, we start to autonomously progress through.
With our CI/CD tools, we are able to deliver the finished pieces as soon as they are done.
We provide an environment where you can see the latest stable integrations,
so you can share the newest improvements with your stakeholders, QA team or clients.`;

const title4 = `We are a remote first team`;
const p4 = `We value your time just as much as ours.
We believe on on-demand meetings, there is no need meaningless waste of time.
We tackle the pre-planned tasks asynchronously so our team members 
don’t have to wait on each other, no time is wasted.`;

const title5 = `We can do hardware`;
const p5 = `If your mobile application needs to communicate with specific devices,
we can design, prototype and build specific hardware and firmware. We can connect your
mobile application to already existing hardware solution as well.`;

const WhoAreWeSection: FunctionComponent<{}> = () => (
  <Root>
    <SectionTitle>Why choose us?</SectionTitle>
    <IntroductionSection>
      <QuestionRow question={title1} answer={p1} />
      <QuestionRow question={businessTitle} answer={businessText} />
      <QuestionRow question={flexibleTitle} answer={flexibleText} />
      <QuestionRow question={title2} answer={p2} />
      <QuestionRow question={title3} answer={p3} />
      <QuestionRow question={title4} answer={p4} />
      <QuestionRow question={title5} answer={p5} />
    </IntroductionSection>
  </Root>
);

export default WhoAreWeSection;
