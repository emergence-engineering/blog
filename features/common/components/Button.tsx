import styled from "styled-components";

import theme from "../../../utils/theme";

export const Button = styled.button<{ color?: "primary" | "secondary" }>`
  // border: 1px solid ${theme.color.gray2};
  border: none;
  height: 2.5rem;
  border-radius: 0.2rem;
  background-color: ${({ color }) =>
    color === "secondary" ? theme.color.secondary : theme.color.primary};
  //box-shadow: 2px 2px 2px 0 ${theme.color.shadow};
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  letter-spacing: 0.05rem;
  color: ${theme.color.gray10};
  :hover {
    background-color: ${theme.color.secondary2};
  }
`;
