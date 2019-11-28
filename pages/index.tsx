import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Layout from "../modules/common/components/Layout";
import { addSampleAction } from "../setup/actions/sample/actions";
import CapabilityBox from "../modules/landingPage/components/CapabilityBox";
import {
  MainTitle,
  IntroductionParagraph,
  IntroductionSection,
  SubTitle,
  IntroductionSectionWrapper,
} from "../modules/landingPage/components/Introduction";
import {
  CapabilityBoxContainer,
  CapabilityBoxContainerWrapper,
  CapabilitySection,
} from "../modules/landingPage/components/Capability";
import TechnologySection from "../modules/landingPage/components/Technology";
import SalesFormSection from "../modules/landingPage/components/SalesMessageForm";
import WhoAreWeSection from "../modules/landingPage/components/WhoAreWeSection";

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
    title: "Fullstack web development",
    content: `We can design the client application that faces your users and the
       complex backend architectures behind it.`,
    iconSrc: "/icons/api.svg",
  },
  {
    title: "Mobile development",
    content: `We can build applications for all major mobile platforms with React
    Native or Ionic. `,
    iconSrc: "/icons/responsive-2.svg",
  },
  {
    title: "PWA development",
    content: `
    If you wan't your app to be available on mobile and also in the browser then we can
    build it as a Progressive Web Application by Google's PWA standards.
    `,
    iconSrc: "/icons/responsive.svg",
  },
  {
    title: "Cloud development",
    content: `
       We are experienced industry leading cloud
       technologies such as Google Cloud Platform and Amazon Web Services.`,
    iconSrc: "/icons/cloud-computing.svg",
  },
  {
    title: "AI solutions",
    content: `We have experience in using cutting edge deep learning solutions.
    We are ready to deploy a neural network either to the backend or to the
    front-end using Google's TensorFlow.js`,
    iconSrc: "/icons/think.svg",
  },
  {
    title: "Trainings",
    content: `We can hold on-site trainings and extend your team's competitiveness by
      introducing best practices and and components that we utilise and perfected
      in our systems.`,
    iconSrc: "/icons/presentation.svg",
  },
];

const Index: FunctionComponent<{} & ReturnType<
  typeof mapDispatchToProps
>> = () => (
  <Layout>
    <IntroductionSectionWrapper>
      <IntroductionSection>
        <MainTitle>emergence</MainTitle>
        <SubTitle>noun [U] /ɪˈmɜː.dʒəns/</SubTitle>
        <IntroductionParagraph>{mainParagraphContent}</IntroductionParagraph>
      </IntroductionSection>
    </IntroductionSectionWrapper>
    <CapabilitySection>
      <CapabilityBoxContainerWrapper>
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
      </CapabilityBoxContainerWrapper>
    </CapabilitySection>
    <WhoAreWeSection />
    <TechnologySection />
    <SalesFormSection />
  </Layout>
);

export default connect(undefined, mapDispatchToProps)(Index);
