import React, { FunctionComponent, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import styled from "styled-components";
import { RootState } from "../setup/reducers/rootReducer";
import theme, { screenSizes } from "../utils/theme";
import { Input } from "../common/components/Input";
import { Button } from "../common/components/Button";

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
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const eMailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const loginWithGoogle = useCallback(() => {
    firebase.login({ provider: "google", type: "popup" });
  }, []);

  const logOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);
  const signUpWithPassword = useCallback(() => {
    if (userNameRef.current && eMailRef.current && passwordRef.current) {
      firebase.createUser(
        {
          email: eMailRef.current.value,
          password: passwordRef.current.value,
        },
        {
          username: userNameRef.current.value,
          email: eMailRef.current.value,
        },
      );
    }
  }, []);
  const loginWithPassword = useCallback(() => {
    if (userNameRef.current && eMailRef.current && passwordRef.current) {
      firebase.login({
        email: eMailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  }, []);

  return (
    <Root>
      {(() => {
        if (!isLoaded(auth)) return <span>Loading...</span>;
        if (isLoaded(auth) && !isEmpty(auth))
          return (
            <StyledDiv>
              <Button type="button" onClick={logOut}>
                Logout
              </Button>
              <pre>{JSON.stringify(auth, null, 2)}</pre>
            </StyledDiv>
          );
        return (
          <StyledDiv>
            <Input ref={userNameRef} placeholder="Username" />
            <Input ref={eMailRef} placeholder="Email adress" />
            <Input ref={passwordRef} placeholder="Password" />
            <Button type="button" onClick={loginWithGoogle}>
              Login With Google
            </Button>
            <Button type="button" onClick={signUpWithPassword}>
              Sign Up With Password
            </Button>
            <Button type="button" onClick={loginWithPassword}>
              Login With Password
            </Button>
          </StyledDiv>
        );
      })()}
    </Root>
  );
};
const StyledDiv = styled.div`
  width: 30rem;
  padding: 8rem 5rem 16rem 5rem;
  border: 1px solid ${theme.color.gray9};
  box-shadow: 0.5rem 0.5rem 0.25rem ${theme.color.gray8};
  background: ${theme.color.gray10};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media screen and (max-width: ${screenSizes.medium}px) {
    height: 100%;
    width: 100%;
  }
`;
export default LoginPage;
