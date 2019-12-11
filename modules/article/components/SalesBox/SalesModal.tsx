import React, { FunctionComponent } from "react";

import Modal from "../../../common/components/Modal";

import { ArticleSalesFormAction, FormType, HIDE_MODAL } from "./state";
import SalesForm from "./SalesForm";

export const SalesModal: FunctionComponent<{
  displayed: boolean;
  dispatch: (action: ArticleSalesFormAction) => void;
  formType: FormType;
}> = ({ displayed, formType, dispatch }) => {
  function dispatchHideModalAction() {
    dispatch({ type: HIDE_MODAL });
  }
  return displayed ? (
    <Modal onLoseFocus={dispatchHideModalAction} title="Let us contact you">
      <SalesForm formType={formType} />
    </Modal>
  ) : null;
};
