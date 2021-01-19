import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";

import theme, { sizes } from "../../../utils/theme";

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
  flex: 1;
  margin: 0 0.1em;
  align-self: stretch;
  display: flex;
  justify-content: flex-end;
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

interface SkillBoxProps {
  title: string;
  content: string;
  iconSrc: string;
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
          <Image src={iconSrc} height={75} width={75} />
        </ImgWrapper>
      </HeaderRow>
      <Content>{content}</Content>
    </BoxRoot>
  </BoxWrapper>
);

export default CapabilityBox;
