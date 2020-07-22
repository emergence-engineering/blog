import { createSelector } from "reselect";

import { RootState } from "../../../utils/reducers/rootReducer";
import { CollectionNames, SharedItem } from "../../../utils/database/types";
import { withKey } from "../../units/collections";

const getFirestoreData = (state: RootState) => state.firestore.data;

export const getCollaborators = createSelector(getFirestoreData, data => {
  const sharedItem = data[CollectionNames.sharedItems]
    ? (Object.values(data[CollectionNames.sharedItems])[0] as SharedItem)
    : null;

  // TODO: use the type of the shared item
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return sharedItem?.collaborators ? withKey(sharedItem.collaborators) : [];
});
