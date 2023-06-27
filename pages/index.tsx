import React, { FunctionComponent, useEffect, useState } from "react";

import {
  IntroductionFeatureBox,
  IntroductionFeatures,
  IntroductionFeatureStart,
  IntroductionFeatureWrapper,
  IntroductionParagraph,
  IntroductionSection,
  IntroductionSectionWrapper,
} from "../features/landingPage/components/Introduction";
import Layout from "../features/common/components/Layout";
import SalesFormSection from "../features/landingPage/components/SalesMessageForm";
import theme from "../utils/theme";
import { Separator } from "../features/common/components/Separator";
import { LPSEO } from "../features/blog/components/LPSEO";
import WhatWeDoSection from "../features/landingPage/components/WhatWeDo";
import AboutUsSection from "../features/landingPage/components/AboutUsSection";
import References from "../features/landingPage/components/References";
import { useMediaQuery } from "react-responsive";

const mainParagraphContent = `Emergence Engineering is a full-stack software development company from Budapest (🇪🇺)`;

const featureList = [
  "ProseMirror editors",
  "AI and LLM apps",
  "collaborative UIs",
  "mobile applications",
  "web applications",
];

const Index: FunctionComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const comeAndGo = [
    { transform: "translateY(100px)", opacity: 0 },
    { transform: "translateY(0px)", opacity: 1 },
    { transform: "translateY(0px)", opacity: 1 },
    { transform: "translateY(0px)", opacity: 1 },
    { transform: "translateY(-100px)", opacity: 0 },
  ];
  const comeAndGoSideBySide = [
    { transform: "translateX(100px)", opacity: 0 },
    { transform: "translateX(0px)", opacity: 1 },
    { transform: "translateX(0px)", opacity: 1 },
    { transform: "translateX(0px)", opacity: 1 },
    { transform: "translateX(-100px)", opacity: 0 },
  ];
  const animationTiming = { duration: 2800, iterations: 10000 };

  const scrollingFeature = () => {
    if (currentFeatureIndex === featureList.length - 1) {
      return setCurrentFeatureIndex(0);
    } else {
      return setCurrentFeatureIndex(currentFeatureIndex + 1);
    }
  };

  useEffect(() => {
    const feature = document.querySelector("#feature");
    if (feature) {
      if (isMobile) {
        feature.animate(comeAndGoSideBySide, animationTiming);
      } else {
        feature.animate(comeAndGo, animationTiming);
      }
    }

    const interval = setInterval(() => {
      scrollingFeature();
    }, 2800);
    return () => clearInterval(interval);
  });

  return (
    <Layout>
      <LPSEO />
      <IntroductionSectionWrapper>
        <IntroductionSection>
          <IntroductionParagraph>{mainParagraphContent}</IntroductionParagraph>

          <IntroductionFeatureWrapper>
            <IntroductionFeatureStart>We build</IntroductionFeatureStart>
            <IntroductionFeatureBox>
              <IntroductionFeatures id={"feature"}>
                {featureList[currentFeatureIndex]}
              </IntroductionFeatures>
            </IntroductionFeatureBox>
          </IntroductionFeatureWrapper>
        </IntroductionSection>
      </IntroductionSectionWrapper>
      <Separator
        height={0.2}
        color={theme.color.tertiary}
        backGroundColor={theme.color.gray11}
      />
      <WhatWeDoSection />
      <Separator
        height={0.2}
        color={theme.color.tertiary}
        backGroundColor={theme.color.background2}
      />
      <References />

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
      <SalesFormSection />
    </Layout>
  );
};

export default Index;
