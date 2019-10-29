import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import styled from "styled-components";
import Link from "next/link";
import { RootState } from "../../setup/reducers/rootReducer";
import { Input } from "../../common/components/Input";
import { Button } from "../../common/components/Button";
import {
  AuthPaper,
  Error,
  RedirectLink,
  SignInOrUpRoot,
} from "../../auth/components/Common";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPage: FunctionComponent<{}> = () => {
  const firebase = useFirebase();
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore TODO
  const auth = useSelector((state: RootState) => state.firebase.auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const loginWithGoogle = useCallback(() => {
    firebase.login({ provider: "google", type: "popup" });
  }, []);

  const logOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const loginWithPassword = useCallback(() => {
    if (email && password) {
      firebase
        .login({
          email,
          password,
        })
        .catch(({ message }) => setError(message));
    } else {
      setError("Missing email or password");
    }
  }, [email, password]);

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
            <Button type="button" onClick={loginWithPassword}>
              Log In with Username
            </Button>
            <Button type="button" onClick={loginWithGoogle}>
              Log In With Google
            </Button>
            <Error>{error}</Error>
            <SignInOrUpRoot>
              <Link href="/auth/signup">
                <RedirectLink>Register here</RedirectLink>
              </Link>
            </SignInOrUpRoot>
          </AuthPaper>
        );
      })()}
    </Root>
  );
};

export default LoginPage;
