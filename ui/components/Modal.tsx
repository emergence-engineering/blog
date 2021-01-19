import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme from "../../utils/theme";

// TODO: this is a duplicated component original is ModalRoot -> refactor
const Root = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.color.background};
`;

export interface ModalProps {
  displayed: boolean;
}

export const Modal: FunctionComponent<ModalProps> = ({ displayed, children }) =>
  displayed ? <Root>{children}</Root> : null;
