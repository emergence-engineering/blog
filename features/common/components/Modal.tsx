import React, { FunctionComponent, PropsWithChildren } from "react";
import styled from "styled-components";
import Image from "next/image";

import theme, { screenSizes } from "../../../utils/theme";

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

const ModalWrapper = styled.div<{ fillScreen?: boolean }>`
  ${({ fillScreen }) =>
    fillScreen
      ? `
  width: 100%;
  min-height: 100%;
  `
      : `
  width: 55%;
  min-height: 20rem;
  `}
  background-color: ${theme.color.gray10};
  z-index: 101;
  border-radius: 0.5em;
  opacity: 1;
  padding: 2rem;
  @media screen and (max-width: ${screenSizes.medium}px) {
    height: 100vh;
    border-radius: 0;
    overflow: scroll;
    width: 100%;
  }
`;

const ModalHeaderRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 2rem;
`;
const CloseIcon = styled(Image)`
  cursor: pointer;
`;

const ModalHeader: FunctionComponent<{
  title: string;
  onClose: () => void;
}> = ({ title, onClose }) => (
  <ModalHeaderRoot>
    <ModalTitle>{title}</ModalTitle>
    <CloseIcon
      src="/material-close.svg"
      onClick={onClose}
      width="24"
      height="24"
      alt="close"
    />
  </ModalHeaderRoot>
);

const Modal = ({
  onLoseFocus,
  title,
  fillScreen,
  children,
}: PropsWithChildren<{
  onLoseFocus: () => void;
  title: string;
  fillScreen?: boolean;
}>) => (
  <Root>
    <ModalWrapper fillScreen={fillScreen}>
      <ModalHeader title={title} onClose={onLoseFocus} />
      {children}
    </ModalWrapper>
  </Root>
);

export default Modal;
