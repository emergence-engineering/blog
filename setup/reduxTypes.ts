import { ThunkAction } from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { RootState } from "./reducers/rootReducer";

export interface ThunkExtraArgument {
  getFirebase: typeof getFirebase;
}

// TODO: Maybe unnecessary interface, and it can be done with type?
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThunkActionFiresbase<R = void | Promise<void>>
  extends ThunkAction<R, RootState, ThunkExtraArgument, any> {}
