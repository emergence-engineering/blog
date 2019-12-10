export enum FormType {
  videoConsultation,
  training,
  development,
}

// action types
export const DISPLAY_MODAL = "DISPLAY_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

// action types
interface DisplayModalAction {
  type: typeof DISPLAY_MODAL;
  payload: {
    formType: FormType;
  };
}

interface HideModalAction {
  type: typeof HIDE_MODAL;
}

// acitons and action creators
export const createDisplayModalAction = (
  formType: FormType,
): DisplayModalAction => ({
  type: DISPLAY_MODAL,
  payload: {
    formType,
  },
});
export const hideModalAction: HideModalAction = {
  type: HIDE_MODAL,
};

export type ArticleSalesFormAction = DisplayModalAction | HideModalAction;

// reducer
export const initialState: SalesFormState = {
  isFormDisplayed: false,
  formType: null,
};

interface SalesFormState {
  formType: FormType | null;
  isFormDisplayed: boolean;
}

export function articleSalesFormReducer(
  state: SalesFormState,
  action: ArticleSalesFormAction,
): SalesFormState {
  switch (action.type) {
    case DISPLAY_MODAL:
      return { formType: action.payload.formType, isFormDisplayed: true };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
