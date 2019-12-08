import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";

const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 55%;
  min-height: 20rem;
  background-color: ${theme.color.gray10};
  z-index: 101;
  border-radius: 0.5em;
  opacity: 1;
`;

const Modal: FunctionComponent<{}> = ({ children }) => (
  <Root>
    <ModalWrapper>{children}</ModalWrapper>
  </Root>
);

export default Modal;
