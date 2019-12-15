import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes } from "../../../utils/theme";

const Logo = styled.img<{ scale: number }>`
  width: ${({ scale }) => scale * 100}%;
  height: auto;
`;

const LogoWrapper = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 6rem;
  padding: 0.8rem;
  @media screen and (max-width: ${screenSizes.medium}px) {
    height: 6rem;
    width: 6rem;
  }
`;

interface Logo {
  src: string;
  scale: number;
}

export interface LogoColumnProps {
  columnName: string;
  logos: Logo[];
}

export const renderLogo: FunctionComponent<Logo> = ({ scale, src }, index) => (
  <LogoWrapper key={index}>
    <Logo src={src} scale={scale} />
  </LogoWrapper>
);

const LogoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const LogoColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  padding-bottom: 2rem;
`;

const Title = styled.div`
  color: ${theme.color.gray1};
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const LogoColumn: FunctionComponent<LogoColumnProps> = ({
  logos,
  columnName,
}) => (
  <LogoColumnRoot>
    <Title>{columnName}</Title>
    <LogoListWrapper>{logos.map(renderLogo)}</LogoListWrapper>
  </LogoColumnRoot>
);

export default LogoColumn;
