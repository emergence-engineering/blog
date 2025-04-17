import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { sizes } from "../../../utils/theme";
import { oswald } from "../../../utils/fonts";
import {
  CapabilityBoxContainer,
  CapabilityBoxContainerWrapper,
} from "./Capability";
import CapabilityBox, { CapabilityImages } from "./CapabilityBox";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.background2};
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
  padding: 4rem ${sizes.sidePadding};
`;

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
  font-size: 2rem;
  font-weight: 700;
`;

export const FacePictureWrapper = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  img {
    border-radius: 50%;
  }
`;

const CapabilityBoxes = [
  {
    title: "ProseMirror",
    content: `Modern web based rich text editors, full of crazy features`,
    iconSrc: CapabilityImages.ProsemirrorImg,
  },
  {
    title: "TipTap",
    content: `Headless, TypeScript based out of the box collaborative rich text editor with ProseMirror under the hood`,
    iconSrc: CapabilityImages.TipTapImg,
  },
  {
    title: "Collaborative UIs",
    content: `Real time collaboration for your web app with Yjs, Hocuspocus, GraphQL or Firebase`,
    iconSrc: CapabilityImages.GroupImg,
  },
  {
    title: "React",
    content: `The standard of current front-ends`,
    iconSrc: CapabilityImages.ReactImg,
  },
  {
    title: "Scala",
    content: `If you want a robust backend that scales easily.`,
    iconSrc: CapabilityImages.ScalaImg,
  },
  {
    title: "Cloud",
    content: `Experience with all of the major cloud providers and some more.`,
    iconSrc: CapabilityImages.CloudImg,
  },
  {
    title: "DevOps",
    content: `From CI & CD to Kubernetes.`,
    iconSrc: CapabilityImages.KubernetesImg,
  },
];

const WhatWeDoSection: FunctionComponent = () => (
  <Root>
    <SectionTitle className={`${oswald.className}`}>What We do</SectionTitle>
    <CapabilityBoxContainerWrapper>
      <CapabilityBoxContainer>
        {CapabilityBoxes.map(({ title, content, iconSrc }) => (
          <CapabilityBox
            title={title}
            content={content}
            iconSrc={iconSrc}
            key={title}
          />
        ))}
      </CapabilityBoxContainer>
    </CapabilityBoxContainerWrapper>
  </Root>
);

export default WhatWeDoSection;
