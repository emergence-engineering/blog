import styled from "styled-components";

export const FAIcon = styled.i<{ size: number; color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}rem;
`;

export const InlineFAIcon = styled.i<{ size: number; color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  display: inline-block;
`;
