import styled from "styled-components";

import { clickable, text } from "../../utils/mixins";
import theme from "../../utils/theme";

interface ButtonProps {
  width?: string;
  type?: "button" | "submit" | "reset";
}

const selectWidth = ({ width = "16rem" }: ButtonProps) => width;

export const Button = styled.button`
  ${text};
  ${clickable};
  width: ${selectWidth};
  height: ${theme.buttonHeight.normal};
  justify-content: center;
  align-items: center;
  letter-spacing: 0.4px;

  background: ${theme.color.white};
  border: 1px solid ${theme.color.gray5};
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 1px;
`;
