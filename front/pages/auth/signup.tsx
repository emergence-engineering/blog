import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useFirebase } from "react-redux-firebase";
import Link from "next/link";

import { Input } from "../../ui/components/Input";
import { Button } from "../../ui/components/Button";
import {
  AuthPaper,
  Error,
  RedirectLink,
  Root,
  SignInOrUpRoot,
} from "../../features/auth/components/Common";
import withRedirect from "../../features/auth/components/withRedirect";
import { UserStatus } from "../../features/auth/modules/auth";

const LoginPage: FunctionComponent = () => {
  const firebase = useFirebase();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

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
      <AuthPaper>
        <Input placeholder="Username" value={userName} onChange={changeName} />
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
          <Link href="/front/features/auth/login">
            <RedirectLink>Already have an account?</RedirectLink>
          </Link>
        </SignInOrUpRoot>
      </AuthPaper>
    </Root>
  );
};

export default withRedirect({ [UserStatus.signedIn]: "/samplePage" })(
  LoginPage,
);
