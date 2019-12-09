interface SalesFormState {
  email: string;
  firstName: string;
  lastName: string;
  isFormDisplayed: boolean;
}

export const initialState: SalesFormState = {
  email: "",
  firstName: "",
  lastName: "",
  isFormDisplayed: false,
};
export const DISPLAY_MODAL = "DISPLAY_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export enum FormType {
  videoConsultation,
  training,
  development,
}

interface DisplayModalAction {
  type: typeof DISPLAY_MODAL;
  payload: {
    formType: FormType;
  };
}

interface HideModalAction {
  type: typeof HIDE_MODAL;
}

export type ArticleSalesFormAction = DisplayModalAction | HideModalAction;

export function articleSalesFormReducer(
  state: SalesFormState,
  action: ArticleSalesFormAction,
): SalesFormState {
  switch (action.type) {
    case DISPLAY_MODAL:
      return { ...state, isFormDisplayed: true };
    case HIDE_MODAL:
      return { ...state, isFormDisplayed: false };
    default:
      return state;
  }
}
