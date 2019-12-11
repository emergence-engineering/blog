import React, { FunctionComponent } from "react";

import Modal from "../../../common/components/Modal";

import { ArticleSalesFormAction, HIDE_MODAL } from "./state";
import SalesForm from "./SalesForm";

export const SalesModal: FunctionComponent<{
  displayed: boolean;
  dispatch: (action: ArticleSalesFormAction) => void;
  title: string
}> = ({ displayed, dispatch }) => {
  function dispatchHideModalAction() {
    dispatch({ type: HIDE_MODAL });
  }
  return displayed ? (
    <Modal onLoseFocus={dispatchHideModalAction} title="Let us contact you">
      <SalesForm />
    </Modal>
  ) : null;
};
