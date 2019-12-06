import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";

const Root = styled.div`
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 40%;
  min-height: 20rem;
  background-color: ${theme.color.gray10};
  z-index: 3;
  border-radius: 0.5em;
  opacity: 1;
`;

const Modal: FunctionComponent<{}> = ({ children }) => (
  <Root>
    <ModalWrapper>{children}</ModalWrapper>
  </Root>
);

export default Modal;
