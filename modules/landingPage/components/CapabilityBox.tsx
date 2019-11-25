import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { sizes } from "../../../utils/theme";

const BoxRoot = styled.div`
  width: 100%;
  min-height: 10rem;
  height: 100%;
  border: 1px solid ${theme.color.gray6};
  border-radius: 0.2rem 0.2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SvgImg = styled.img`
  width: 3rem;
  height: auto;
  margin: 0 0.1em;
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${sizes.sidePadding};
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
  <BoxWrapper>
    <BoxRoot>
      <HeaderRow>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
        <SvgImg decoding="async" src={iconSrc} />
      </HeaderRow>
      <p>{content}</p>
    </BoxRoot>
  </BoxWrapper>
);

export default CapabilityBox;
