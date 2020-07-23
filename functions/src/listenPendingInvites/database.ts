import admin from "firebase-admin";
import {
  CollectionNames,
  SharedItem,
  SharedItemId,
  User,
} from "../../../front/utils/database/types";

const db = admin.firestore();

export const getUserByEmail = async (email: string) => {
  try {
    return await admin.auth().getUserByEmail(email);
  } catch (err) {
    return null;
  }
};

export const getUserProfile = async (userKey: string) => {
  const snapshot = await db
    .collection(CollectionNames.users)
    .doc(userKey)
    .get();
  const data = snapshot.data();
  return data as User;
};

export const getSharedItem = async (sharedItemKey: SharedItemId) => {
  const snapshot = await db
    .collection(CollectionNames.sharedItems)
    .doc(sharedItemKey)
    .get();
  return snapshot.data() as SharedItem | undefined;
};
