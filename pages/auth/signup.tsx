import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import Link from "next/link";
import { RootState } from "../../setup/reducers/rootReducer";
import { Input } from "../../common/components/Input";
import { Button } from "../../common/components/Button";
import {
  AuthPaper,
  Error,
  RedirectLink,
  Root,
  SignInOrUpRoot,
} from "../../auth/components/Common";

const LoginPage: FunctionComponent<{}> = () => {
  const firebase = useFirebase();
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore TODO
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const logOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);
  const signUpWithPassword = useCallback(() => {
    if (userName && email && password) {
      setError("");
      firebase
        .createUser(
          {
            email,
            password,
          },
          {
            username: userName,
            email,
          },
        )
        .catch(({ message }) => setError(message));
    } else {
      setError("Missing name, email or password");
    }
  }, [userName, email, password]);

  const changeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setError("");
  }, []);

  const changePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  }, []);

  const changeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  }, []);
  return (
    <Root>
      {(() => {
        if (!isLoaded(auth)) return <span>Loading...</span>;
        if (isLoaded(auth) && !isEmpty(auth))
          return (
            <AuthPaper>
              <Button type="button" onClick={logOut}>
                Logout
              </Button>
              <pre>{JSON.stringify(auth, null, 2)}</pre>
            </AuthPaper>
          );
        return (
          <AuthPaper>
            <Input
              placeholder="Username"
              value={userName}
              onChange={changeName}
            />
            <Input
              placeholder="Email address"
              value={email}
              onChange={changeEmail}
              type="email"
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={changePassword}
              type="password"
            />
            <Button type="button" onClick={signUpWithPassword}>
              Sign Up
            </Button>
            <Error>{error}</Error>
            <SignInOrUpRoot>
              <Link href="/auth/login">
                <RedirectLink>Already have an account?</RedirectLink>
              </Link>
            </SignInOrUpRoot>
          </AuthPaper>
        );
      })()}
    </Root>
  );
};

export default LoginPage;
