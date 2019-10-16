import { ThunkActionFiresbase } from "../../reduxTypes";
import { addSample } from "./types";

export const addSampleAction = (data: string): ThunkActionFiresbase<void> => (
  dispatch,
  getState,
  { getFirebase },
) => {
  // do something with Firestore Example
  const firestore = getFirebase().firestore();
  firestore
    .collection("samples")
    .add({ value: data })
    .then(() => {
      dispatch(addSample(data));
    });
  //
};
