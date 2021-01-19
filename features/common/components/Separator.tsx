import styled from "styled-components";
import React, { FunctionComponent } from "react";

const SeparatorLine = styled.div<{ height: number; color: string }>`
  width: 8rem;
  height: ${({ height }) => height}rem;
  background-color: ${({ color }) => color};
`;
const SeparatorContainer = styled.div<{ backGroundColor: string }>`
  display: flex;
  justify-content: center;
  background-color: ${({ backGroundColor }) => backGroundColor};
`;
export const Separator: FunctionComponent<{
  height: number;
  color: string;
  backGroundColor: string;
}> = ({ height, color, backGroundColor }) => (
  <SeparatorContainer backGroundColor={backGroundColor}>
    <SeparatorLine height={height} color={color} />
  </SeparatorContainer>
);
