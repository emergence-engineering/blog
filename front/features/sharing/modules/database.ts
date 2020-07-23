import { getFirebase } from "react-redux-firebase";

import {
  CollectionNames,
  Fridge,
  FridgeId,
  Invitation,
} from "../../../utils/database/types";

export const addInvite = async (invite: Invitation) => {
  const firestore = getFirebase().firestore();
  await firestore
    .collection(CollectionNames.fridges)
    .doc(invite.fridgeId)
    .collection(CollectionNames.invites)
    .add(invite);
};

export const getFridgeTitleById = async (fridgeId: FridgeId) => {
  const firestore = getFirebase().firestore();
  const snapshot = await firestore
    .collection(CollectionNames.fridges)
    .doc(fridgeId)
    .get();

  return snapshot.data() as Fridge;
};
