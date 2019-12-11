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
  padding: 2rem;
`;

const ModalHeaderRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 2rem;
`;
const CloseIcon = styled.img``;

const ModalHeader: FunctionComponent<{
  title: string;
  onClose: () => void;
}> = ({ title, onClose }) => (
  <ModalHeaderRoot>
    <ModalTitle>{title}</ModalTitle>
    <CloseIcon decoding="async" src="/material-close.svg" onClick={onClose} />
  </ModalHeaderRoot>
);

const Modal: FunctionComponent<{ onLoseFocus: () => void; title: string }> = ({
  onLoseFocus,
  title,
  children,
}) => (
  <Root>
    <ModalWrapper>
      <ModalHeader title={title} onClose={onLoseFocus} />
      {children}
    </ModalWrapper>
  </Root>
);

export default Modal;
