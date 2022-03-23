import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { sizes } from "../../../utils/theme";
import {CapabilityBoxContainer, CapabilityBoxContainerWrapper} from "./Capability";
import CapabilityBox, {CapabilityImages} from "./CapabilityBox";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: #ecd2d20d;
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
  padding: 4rem ${sizes.sidePadding};
`;

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
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
        title: "Scala",
        content: `If you want a robust backend that scales easily.`,
        iconSrc: CapabilityImages.ScalaImg,
    },
    {
        title: "DevOps",
        content: `From CI & CD to Kubernetes.`,
        iconSrc: CapabilityImages.KubernetesImg,
    },
    {
        title: "Cloud",
        content: `Experience with all he major cloud providers and some more.`,
        iconSrc: CapabilityImages.CloudImg,
    },
    {
        title: "React",
        content: `The standard of current front-ends.`,
        iconSrc: CapabilityImages.ReactImg,
    },
    {
        title: "ProseMirror",
        content: `Modern web based rich text editors, full of crazy features.`,
        iconSrc: CapabilityImages.ProsemirrorImg,
    },
    {
        title: "Embedded",
        content: `
       From debugging PCBs to writing custom firmware.`,
        iconSrc: CapabilityImages.GroupImg,
    },
];


const WhatWeDoSection: FunctionComponent = () => (
  <Root>
    <SectionTitle>What We do</SectionTitle>
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
