import admin from "firebase-admin";
import { Timestamp } from "@firebase/firestore-types";

export const getServerTimeStamp = () =>
  admin.firestore.FieldValue.serverTimestamp() as Timestamp;
