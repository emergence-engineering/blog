import React, { FunctionComponent } from "react";

import Modal from "../../../common/components/Modal";
import SalesFormSection from "../../../landingPage/components/SalesMessageForm";

import { ArticleSalesFormAction, HIDE_MODAL } from "./state";

export const SalesModal: FunctionComponent<{
  displayed: boolean;
  dispatch: (action: ArticleSalesFormAction) => void;
}> = ({ displayed, dispatch }) => {
  function dispatchHideModalAction() {
    dispatch({ type: HIDE_MODAL });
  }
  return displayed ? (
    <Modal onLoseFocus={dispatchHideModalAction}>
      <SalesFormSection />
    </Modal>
  ) : null;
};
