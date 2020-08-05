import admin from "firebase-admin";

const db = admin.firestore();

export const getInvitation = async (invitationId: string, sharedItemId: string) => {
  const snapshot = await db
    .collection("sharedItems")
    .doc(sharedItemId)
    .collection("invites")
    .doc(invitationId)
    .get();
  return snapshot.data();
};

export const getSharedItem = async (sharedItemId: string) => {
  const snapshot = await db
    .collection("sharedItems")
    .doc(sharedItemId)
    .get();
  return snapshot.data();
};
