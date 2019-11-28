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
  background-color: ${theme.color.primary};
  padding: 0 ${sizes.sidePadding};
  padding: 2rem 1rem;
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
  color: ${theme.color.gray10};
  padding-bottom: 0.5rem;
`;

const Answer = styled.div`
  font-family: ${theme.fontFamily.general};
  font-size: 1.15rem;
  font-weight: 200;
  padding-left: 1.5rem;
  width: 100%;
  color: ${theme.color.gray10};
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
  color: ${theme.color.gray10};
`;

const remoteAnswer = `
We have experience in remotely work for clients inside the EU and the US, 
either by integrating into an existing team or doing the job by only ourselves.
`;
const hardwareAnswer = `
We can help you if you want your application to be able to communicate with
special devices. We can design hardware that best fits needs.
`;

const WhoAreWeSection: FunctionComponent<{}> = () => (
  <Root>
    <SectionTitle>Who are we?</SectionTitle>
    <IntroductionSection>
      <QuestionRow
        question="What are we?"
        answer="We are a software engineering firm from Budapest, Hungary"
      />
      <QuestionRow
        question="Why choose us?"
        answer="We build performant, reliable and clean software"
      />
      <QuestionRow question="How do we work?" answer={remoteAnswer} />
      <QuestionRow
        question="What about specific hardware?"
        answer={hardwareAnswer}
      />
    </IntroductionSection>
  </Root>
);

export default WhoAreWeSection;
