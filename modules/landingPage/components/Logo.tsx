import styled from "styled-components";
import React, { FunctionComponent } from "react";

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

const LogoContainer = styled.div`
  height: 75px;
  width: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const renderLogo: FunctionComponent<Logo> = (
  { direction, src },
  index,
) => (
  <LogoContainer key={index}>
    {direction === Direction.Horizontal ? (
      <HorizontalLogo src={src} />
    ) : (
      <VerticalLogo src={src} />
    )}
  </LogoContainer>
);
