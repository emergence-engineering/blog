import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";

import theme, { sizes } from "../../../utils/theme";
import ProsemirrorImage from "../../../public/icons/prosemirror.png";
import GroupImage from "../../../public/icons/group.png";
import APIImage from "../../../public/icons/api.png";
import ResponsiveImage from "../../../public/icons/responsive.png";
import Responsive2Image from "../../../public/icons/responsive-2.png";
import CloudImage from "../../../public/icons/cloud-computing.png";
import SettingsImage from "../../../public/icons/settings.png";
import PresentationImage from "../../../public/icons/presentation.png";
import ScalaImage from "../../../public/icons/scala.png";
import KubernetesImage from "../../../public/icons/kubernetes.png";
import ReactImage from "../../../public/icons/react.png";
import TipTapImage from "../../../public/icons/tiptap.svg";
import MicrochipImage from "../../../public/icons/microchip.svg"

export enum CapabilityImages {
  TipTapImg = "TipTapImg",
  ProsemirrorImg = "ProsemirrorImg",
  GroupImg = "GroupImg",
  APIImg = "APIImg",
  ResponsiveImg = "ResponsiveImg",
  Responsive2Img = "Responsive2Img",
  CloudImg = "CloudImg",
  SettingsImg = "SettingsImg",
  PresentationImg = "PresentationImg",
  ScalaImg = "ScalaImg",
  KubernetesImg = "KubernetesImg",
  ReactImg = "ReactImg",
  MicrochipImg = "MicrochipImg",
}

const BoxRoot = styled.div`
  min-height: 10rem;
  height: 100%;
  border: 1px solid ${theme.color.gray6};
  border-radius: 0.2rem 0.2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.15s ease-in-out;
  :hover {
    box-shadow: 5px 5px 5px ${theme.color.gray8};
  }
`;

const ImgWrapper = styled.div`
  //flex: 1;
  //margin: 0 0.1em;
  //align-self: stretch;
  //display: flex;
  //justify-content: flex-end;
  //height: 75px;
  //width: 75px;
  position: relative;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 5rem;
`;

const Content = styled.p`
  color: ${theme.color.gray1};
  font-family: Tahoma, serif;
  font-weight: 200;
`;

const TitleContainer = styled.div`
  flex: 2;
  color: ${theme.color.gray1};
  width: 100%;
  font-weight: 900;
  font-size: 1.7rem;
  font-family: "Oswald", sans-serif;
`;

const BoxWrapper = styled.div`
  padding: ${sizes.sidePadding};
`;

const images = {
  [CapabilityImages.ProsemirrorImg]: ProsemirrorImage,
  [CapabilityImages.GroupImg]: GroupImage,
  [CapabilityImages.APIImg]: APIImage,
  [CapabilityImages.ResponsiveImg]: ResponsiveImage,
  [CapabilityImages.Responsive2Img]: Responsive2Image,
  [CapabilityImages.CloudImg]: CloudImage,
  [CapabilityImages.SettingsImg]: SettingsImage,
  [CapabilityImages.PresentationImg]: PresentationImage,
  [CapabilityImages.ScalaImg]: ScalaImage,
  [CapabilityImages.KubernetesImg]: KubernetesImage,
  [CapabilityImages.ReactImg]: ReactImage,
  [CapabilityImages.TipTapImg]: TipTapImage,
  [CapabilityImages.MicrochipImg]: MicrochipImage,
};

interface SkillBoxProps {
  title: string;
  content: string;
  iconSrc: CapabilityImages;
}

const CapabilityBox: FunctionComponent<SkillBoxProps> = ({
  title,
  content,
  iconSrc,
}) => (
  <BoxWrapper>
    <BoxRoot>
      <HeaderRow>
        <TitleContainer>{title}</TitleContainer>
        <ImgWrapper>
          <Image
            alt="capabilityImage"
            src={images[iconSrc]}
            height={75}
            width={75}
            // placeholder="blur"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </ImgWrapper>
      </HeaderRow>
      <Content>{content}</Content>
    </BoxRoot>
  </BoxWrapper>
);

export default CapabilityBox;
