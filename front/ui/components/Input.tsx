import styled, { css } from "styled-components";

import theme from "../../utils/theme";
import { border } from "../../utils/mixins";

const input = css`
  ${border};
  display: flex;
  max-height: 2.5rem;
  background: ${theme.color.white};
  box-sizing: border-box;
  padding: 0.4rem;
`;

export const Input = styled.input`
  border: 1px solid ${theme.color.gray2};
  height: 2.5rem;
  border-radius: 0.125rem;
  color: ${theme.color.gray1};
  font-weight: bold;
  padding-left: 1rem;
  background-color: ${theme.color.gray1};
  box-shadow: 2px 2px 2px 0 ${theme.color.shadow};
  margin: 0.2rem;
`;

const inputText = css`
  font: ${theme.fontFamily.general};
  font-size: ${theme.fontSize.normal};
`;

interface InputProps {
  isError?: boolean;
}

export const PasswordInput = styled.input.attrs({ type: "password" })`
  ${input};
  ${inputText};
`;

const selectBorderColor = ({ isError = false }: InputProps) =>
  isError ? theme.color.error : theme.color.border;

export const TextInput = styled.input.attrs({ type: "text" })<InputProps>`
  ${input};
  ${inputText};
  border-color: ${selectBorderColor};
`;
