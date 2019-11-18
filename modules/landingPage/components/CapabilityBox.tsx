import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";

const BoxRoot = styled.div`
  width: 400px;
  height: 270px;
  border: ${theme.color.gray6};
  border-width: 1px;
  border-style: solid;
  margin: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SvgImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 0.1em;
`;

const TitleContainer = styled.div`
  width: 100%;
`;

interface SkillBoxProps {
  title: string;
  content: string;
  iconSrc?: string;
}

const CapabilityBox: FunctionComponent<SkillBoxProps> = ({
  title,
  content,
  iconSrc,
}) => (
  <BoxRoot>
    <HeaderRow>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <SvgImg decoding="async" src={iconSrc} />
    </HeaderRow>
    <p>{content}</p>
  </BoxRoot>
);

export default CapabilityBox;
