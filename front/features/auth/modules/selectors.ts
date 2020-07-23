import { createSelector } from "reselect";

import { RootState } from "../../../utils/reducers/rootReducer";

const getFirebaseAuth = (state: RootState) => state.firebase.auth;

export const getUser = createSelector(
  getFirebaseAuth,
  auth => auth as firebase.User,
);

export const getUserProfile = createSelector(
  (state: RootState) => state.firebase,
  firebase => firebase.profile,
);

export const getUserKey = createSelector(getFirebaseAuth, auth => auth.uid);
