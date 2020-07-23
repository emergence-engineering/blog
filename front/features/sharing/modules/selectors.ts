import { createSelector } from "reselect";

import { RootState } from "../../../utils/reducers/rootReducer";
import { CollectionNames, Fridge } from "../../../utils/database/types";
import { withKey } from "../../units/collections";

const getFirestoreData = (state: RootState) => state.firestore.data;

export const getCollaborators = createSelector(getFirestoreData, data => {
  const fridge = data[CollectionNames.fridges]
    ? (Object.values(data[CollectionNames.fridges])[0] as Fridge)
    : null;
  return fridge?.collaborators ? withKey(fridge.collaborators) : [];
});
