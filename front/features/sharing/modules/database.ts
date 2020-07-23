import { getFirebase } from "react-redux-firebase";

import {
  CollectionNames,
  SharedItem,
  SharedItemId,
  Invitation,
} from "../../../utils/database/types";

export const addInvite = async (invite: Invitation) => {
  const firestore = getFirebase().firestore();
  await firestore
    .collection(CollectionNames.sharedItems)
    .doc(invite.sharedItemId)
    .collection(CollectionNames.invites)
    .add(invite);
};

export const getSharedItemTitleById = async (sharedItemId: SharedItemId) => {
  const firestore = getFirebase().firestore();
  const snapshot = await firestore
    .collection(CollectionNames.sharedItems)
    .doc(sharedItemId)
    .get();

  return snapshot.data() as SharedItem;
};
