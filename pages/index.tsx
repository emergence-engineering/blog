import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";
import Header from "../modules/common/components/Header";
import CapabilityBox from "../modules/landingPage/components/CapabilityBox";
import {
  MainTitle,
  HeaderWordEmphasis,
  IntroductionHeader,
  IntroductionSection,
  SubTitle,
} from "../modules/landingPage/components/Introduction";
import {
  CapabilityBoxContainer,
  CapabilitySection,
} from "../modules/landingPage/components/Capability";
import  TechnologySection  from "../modules/landingPage/components/Technology";
import { SalesFormSection } from "../modules/landingPage/components/SalesMessageForm";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const LandingPageContent = styled.section`
  flex-grow: 1;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: black;
  color: white;
  height: 100px;
`;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addSample: addSampleAction,
    },
    dispatch,
  );

const mainParagraphContent = `
Emergence refers to how collective properties of a system arise from the properties of it's parts.
How behavior at a larger scale arises from the detailed structure and the relationships between the system's building
components at a finer scale.`;

const CapabilityBoxes = [
  {
    title: "Fullstack web appication development",
    content: `We can design the client application that faces your users and the
       complex backend architectures behind it.
       We are experienced industry leading cloud
       technologies such as Amazon Web Services or Google Cloud Platform.`,
    iconSrc: "/consulting.svg",
  },
  {
    title: "Mobile and PWA development",
    content: `We can build applications for all major mobile platforms with React
    and Ionic. If you wan't your app to be also available in the browser then we can
    build it as a Progressive Web Application by Google's PWA standards.`,
    iconSrc: "/consulting.svg",
  },
  {
    title: "AI solutions",
    content: `We have experience in using cutting edge deep learning solutions.
    We are ready to deploy a neural network either to the backend or to the
    front-end using Google's TensorFlow.js`,
    iconSrc: "/artificial-intelligence.svg",
  },
  {
    title: "Trainings",
    content: `We can hold on-site trainings and extend your team's competitiveness by
      introducing best practices and and components that we utilise and perfected
      in our systems.`,
    iconSrc: "/coaching.svg",
  },
];

const Index: FunctionComponent<{} & ReturnType<
  typeof mapDispatchToProps
>> = () => (
  <Root>
    <Header />
    <LandingPageContent>
      <IntroductionSection>
        <MainTitle>emergence</MainTitle>
        <SubTitle>noun [U] /ɪˈmɜː.dʒəns/</SubTitle>
        <IntroductionHeader>{mainParagraphContent}</IntroductionHeader>
      </IntroductionSection>
      <CapabilitySection>
        <CapabilityBoxContainer>
          {CapabilityBoxes.map(({ title, content, iconSrc }, index) => (
            <CapabilityBox
              title={title}
              content={content}
              iconSrc={iconSrc}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))}
        </CapabilityBoxContainer>
      </CapabilitySection>
      <IntroductionSection>
        <IntroductionHeader>
          We are a software engineering firm that builds
          <HeaderWordEmphasis> performant </HeaderWordEmphasis> and
          <HeaderWordEmphasis> reliable </HeaderWordEmphasis>
          software in a <HeaderWordEmphasis> clean </HeaderWordEmphasis> way.
        </IntroductionHeader>
      </IntroductionSection>
      <TechnologySection />
      <SalesFormSection>
        <h1>Sales form</h1>
      </SalesFormSection>
      <Footer>TODO: footer</Footer>
    </LandingPageContent>
  </Root>
);

export default connect(undefined, mapDispatchToProps)(Index);
