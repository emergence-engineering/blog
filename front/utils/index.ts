import * as firebase from "firebase";
import { Timestamp } from "@firebase/firestore-types";

export const getServerTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp() as Timestamp;

export const createFunction = <T = any, R = any>(
  name: string,
): ((data: T) => Promise<R>) => {
  const callable = firebase.functions().httpsCallable(name);
  return async (data: T) => (await callable(data)).data;
};
