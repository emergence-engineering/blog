import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes } from "../../../utils/theme";

const HorizontalLogo = styled.img`
  width: 100%;
`;

const VerticalLogo = styled.img`
  height: 100%;
`;

export enum Direction {
  Vertical,
  Horizontal,
}

interface Logo {
  src: string;
  direction: Direction;
}

export interface LogoColumnProps {
  columnName: string;
  logos: Logo[];
}

const LogoContainer = styled.div<{ horizontal: boolean }>`
  height: 4.5rem;
  width: 8rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${screenSizes.medium}px) {
    height: ${({ horizontal }) => (horizontal ? "4" : "6")};
    width: ${({ horizontal }) => (horizontal ? "6" : "4")};
  }
`;

export const renderLogo: FunctionComponent<Logo> = (
  { direction, src },
  index,
) => (
  <LogoContainer key={index} horizontal={direction === Direction.Horizontal}>
    {direction === Direction.Horizontal ? (
      <HorizontalLogo src={src} />
    ) : (
      <VerticalLogo src={src} />
    )}
  </LogoContainer>
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
  color: ${theme.color.primary1};
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
