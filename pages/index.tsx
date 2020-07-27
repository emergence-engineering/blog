import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Layout from "../modules/common/components/Layout";
import { addSampleAction } from "../setup/actions/sample/actions";
import CapabilityBox from "../modules/landingPage/components/CapabilityBox";
import {
  IntroductionParagraph,
  IntroductionSection,
  IntroductionSectionWrapper,
  MainTitle,
  SubTitle,
} from "../modules/landingPage/components/Introduction";
import {
  CapabilityBoxContainer,
  CapabilityBoxContainerWrapper,
  CapabilitySection,
} from "../modules/landingPage/components/Capability";
import TechnologySection from "../modules/landingPage/components/Technology";
import SalesFormSection from "../modules/landingPage/components/SalesMessageForm";
import WhoAreWeSection from "../modules/landingPage/components/WhoAreWeSection";
import AboutUsSection from "../modules/landingPage/components/AboutUsSection";
import { Separator } from "../modules/common/components/Separator";
import theme from "../utils/theme";

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
    title: "Hardware solutions",
    content: `
    We can design and prototype new hardware or extend an already existing one.
    We can connect your application to IoT devices, sensors or actuators.`,
    iconSrc: "/icons/settings.svg",
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
    <Separator
      height={0.2}
      color={theme.color.tertiary}
      backGroundColor={theme.color.gray11}
    />
    <AboutUsSection />
    <Separator
      height={0.2}
      color={theme.color.tertiary}
      backGroundColor={theme.color.gray11}
    />
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
    <Separator
      height={0.2}
      color={theme.color.tertiary}
      backGroundColor={theme.color.gray11}
    />
    <WhoAreWeSection />
    <Separator
      height={0.2}
      color={theme.color.tertiary}
      backGroundColor={theme.color.gray11}
    />
    {/*<TechnologySection />*/}
    <SalesFormSection />
  </Layout>
);

export default connect(undefined, mapDispatchToProps)(Index);
