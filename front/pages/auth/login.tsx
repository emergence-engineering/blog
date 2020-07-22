import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useFirebase } from "react-redux-firebase";
import styled from "styled-components";
import Link from "next/link";

import { Input } from "../../ui/components/Input";
import { Button } from "../../ui/components/Button";
import {
  AuthPaper,
  Error,
  RedirectLink,
  SignInOrUpRoot,
} from "../../features/auth/components/Common";
import withRedirect from "../../features/auth/components/withRedirect";
import { UserStatus } from "../../features/auth/modules/auth";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPage: FunctionComponent = () => {
  const firebase = useFirebase();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const loginWithGoogle = useCallback(() => {
    firebase.login({ provider: "google", type: "popup" });
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
          <Link href="/front/features/auth/signup">
            <RedirectLink>Register here</RedirectLink>
          </Link>
        </SignInOrUpRoot>
      </AuthPaper>
    </Root>
  );
};

export default withRedirect({ [UserStatus.signedIn]: "/samplePage" })(
  LoginPage,
);
