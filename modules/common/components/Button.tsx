import styled from "styled-components";

import theme from "../../../utils/theme";

export const Button = styled.button<{ color?: "primary" | "secondary" }>`
  border: 1px solid ${theme.color.gray2};
  height: 2.5rem;
  border-radius: 0.125rem;
  color: white;
  font-weight: bold;
  background-color: ${({ color }) =>
    color === "secondary" ? theme.color.secondary : theme.color.primary};
  box-shadow: 2px 2px 2px 0 ${theme.color.shadow};
  margin: 0.2rem;
`;
