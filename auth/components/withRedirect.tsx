import { useSelector } from "react-redux";
import React, { FunctionComponent } from "react";
import { isLoaded } from "react-redux-firebase";
import Router from "next/router";

import { UserStatus } from "../../types/auth";
import { RootState } from "../../setup/reducers/rootReducer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WithRedirectProps {}

export default (options: { [key in UserStatus]?: string }) => <
  P extends object
>(
  Component: React.ComponentType<P & WithRedirectProps>,
): FunctionComponent<P> => props => {
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
