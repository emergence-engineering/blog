import styled from "styled-components";
import React from "react";

import theme from "../../utils/theme";

import { FlexColumn, FlexRow } from "./Layout";
import { Modal } from "./Modal";
import { Button } from "./Button";

const ContentWrapper = styled(FlexColumn)`
  flex-basis: 100%;
  justify-content: center;
`;

const Content = styled(FlexColumn)`
  text-align: center;
  flex-basis: 10.625rem;
  align-items: center;
`;

const ButtonWrapper = styled(FlexRow)`
  justify-content: space-between;
  min-width: 13.25rem;
`;

const DeleteButton = styled(Button)`
  background-color: ${theme.color.error};
  color: ${theme.color.fontWhite};
  width: 5.875rem;
`;

const CancelButton = styled(Button)`
  width: 5.875rem;
`;

interface DeleteConfirmationModalProps {
  displayed: boolean;
  closeCb: () => void;
  acceptCb: () => void;
}

export function DeleteConfirmationModal({
  displayed,
  closeCb,
  acceptCb,
}: DeleteConfirmationModalProps) {
  return (
    <Modal displayed={displayed}>
      <ContentWrapper>
        <Content>
          <ButtonWrapper>
            <DeleteButton onClick={acceptCb}>Delete</DeleteButton>
            <CancelButton onClick={closeCb}>Cancel</CancelButton>
          </ButtonWrapper>
        </Content>
      </ContentWrapper>
    </Modal>
  );
}
