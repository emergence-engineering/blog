import React from "react";

import {
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

const mainParagraphContent = `Emergence Engineering is a full-stack software development company from Budapest (EU).`;

export default function Index() {
  return (
    <Layout>
      <LPSEO />
      <IntroductionSectionWrapper>
        <IntroductionSection>
          <IntroductionParagraph>{mainParagraphContent}</IntroductionParagraph>
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
        backGroundColor={theme.color.gray11}
      />
      <Separator
        height={0.2}
        color={theme.color.tertiary}
        backGroundColor={theme.color.gray11}
      />
        <AboutUsSection/>
      <Separator
        height={0.2}
        color={theme.color.tertiary}
        backGroundColor={theme.color.gray11}
      />
      <SalesFormSection />
    </Layout>
  );
}
