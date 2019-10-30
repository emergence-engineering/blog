import { useSelector } from "react-redux";
import React from "react";
import { isLoaded } from "react-redux-firebase";
import Router from "next/router";

import { UserStatus } from "../../types/auth";
import { RootState } from "../../setup/reducers/rootReducer";

export default (options: { [key in UserStatus]?: string }) => (
  Component: React.ComponentType,
) => (props: React.ComponentProps<typeof Component>) => {
  const profile = useSelector((state: RootState) => state.firebase.profile);

  if (!isLoaded(profile)) {
    return null;
  }
  const signedInRedirect = options[UserStatus.signedIn];
  if (!profile.isEmpty && signedInRedirect) {
    Router.push(signedInRedirect);
  }

  const noneRedirect = options[UserStatus.none];
  if (profile.isEmpty && noneRedirect) {
    Router.push(noneRedirect);
  }
  return <Component {...props} />;
};
