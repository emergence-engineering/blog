import { useSelector } from "react-redux";
import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { isLoaded, isEmpty } from "react-redux-firebase";
import Router from "next/router";

import { RootState } from "../../../utils/reducers/rootReducer";
import { UserStatus } from "../modules/types";
import { getUser, getUserProfile } from "../modules/selectors";

export const UserStatusContext = createContext<UserStatus | null>(null);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WithRedirectProps {}

export default (options: { [key in UserStatus]?: string }) => <
  P extends Record<string, unknown>
>(
  Component: React.ComponentType<P & WithRedirectProps>,
): FunctionComponent<P> => props => {
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);

  const profile = useSelector(getUserProfile);
  const user = useSelector(getUser);
  const isDataLoaded = useSelector(
    (state: RootState) =>
      isLoaded(getUser(state)) && isLoaded(getUserProfile(state)),
  );

  useEffect(() => {
    if (!isDataLoaded) {
      return setUserStatus(null);
    }

    const isLoggedIn = user && !isEmpty(user);

    if (!isLoggedIn) {
      return setUserStatus(UserStatus.none);
    }
    return setUserStatus(UserStatus.signedIn);
  }, [isDataLoaded, user, profile]);

  useEffect(() => {
    if (options && userStatus && options[userStatus]) {
      Router.push(options[userStatus] || "");
    }
  }, [userStatus]);

  if (options && (userStatus === null || options[userStatus])) {
    return null;
  }

  return (
    <UserStatusContext.Provider value={userStatus}>
      <Component {...props} />
    </UserStatusContext.Provider>
  );
};
