import { css } from "styled-components";

import theme from "./theme";

export const font = css`
  font-family: ${theme.font.poppins};
  color: ${theme.color.gray6};
`;

export const error = css`
  font-family: ${theme.font.poppins};
  font-size: ${theme.fontSize.error};
  color: ${theme.color.error};
`;

export const text = css`
  font-family: ${theme.font.poppins};
  font-size: ${theme.fontSize.small};
  line-height: ${theme.lineHeight.normal};
  font-style: normal;
  font-weight: 500;
  color: ${theme.color.gray6};
`;

export const titleText = css`
  font-family: ${theme.font.poppins};
  font-size: ${theme.fontSize.large};
  color: ${theme.color.gray6};
`;

export const clickable = css`
  cursor: pointer;
  user-select: none;
`;
export const border = css`
  border: 1px solid ${theme.color.gray1};
  border-radius: 1px;
`;
