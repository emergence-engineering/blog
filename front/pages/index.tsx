import React from "react";

import CapabilityBox from "../features/landingPage/components/CapabilityBox";
import {
  IntroductionParagraph,
  IntroductionSection,
  IntroductionSectionWrapper,
  MainTitle,
  SubTitle,
} from "../features/landingPage/components/Introduction";
import WhoAreWeSection from "../features/landingPage/components/WhoAreWeSection";
import {
  CapabilityBoxContainer,
  CapabilityBoxContainerWrapper,
  CapabilitySection,
} from "../features/landingPage/components/Capability";
import AboutUsSection from "../features/landingPage/components/AboutUsSection";
import Layout from "../features/common/components/Layout";
import SalesFormSection from "../features/landingPage/components/SalesMessageForm";
import theme from "../utils/theme";
import { Separator } from "../features/common/components/Separator";

const mainParagraphContent = `
Emergence refers to how collective properties of a system arise from the properties of it's parts.
How behavior at a larger scale arises from the detailed structure and the relationships between the system's building
components at a finer scale.`;

const CapabilityBoxes = [
  {
    title: "ProseMirror consulting",
    content: `ProseMirror is a powerful toolkit to build custom web based rich-text
     editors. It is used by companies like The New York Times, Overleaf and many others.`,
    iconSrc: "https://avatars0.githubusercontent.com/u/13659461?s=200&v=4",
  },
  {
    title: "Collaborative Web UIs",
    content: `Sometimes UIs have to sync up instantly based on the actions of other users maybe a thousand miles away. In some cases
    there is a need for multiple users to see the same document and be able to edit it together.`,
    iconSrc: "/icons/group.svg",
  },
  {
    title: "Fullstack web development",
    content: `We can design the client application that faces your users and the
       complex backend architectures behind it.`,
    iconSrc: "/icons/api.svg",
  },
  {
    title: "Cross Platform App development",
    content: `We can build applications for all major mobile platforms with React
    Native or Ionic.`,
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
      introducing best practices and components that we utilise and perfected
      in our systems.`,
    iconSrc: "/icons/presentation.svg",
  },
];

export default function Index() {
  return (
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
      <SalesFormSection />
    </Layout>
  );
}
