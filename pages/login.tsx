import React, { FunctionComponent, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import styled from "styled-components";
import { RootState } from "../setup/reducers/rootReducer";

const LoginPage: FunctionComponent<{}> = () => {
  const firebase = useFirebase();
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore TODO
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const eMailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const loginWithGoogle = useCallback((e: any) => {
    firebase.login({ provider: "google", type: "popup" });
  }, []);

  const logOut = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    firebase.auth().signOut();
  }, []);
  const signUpWithPassword = useCallback((e: any) => {
    if (userNameRef.current && eMailRef.current && passwordRef.current) {
      firebase.createUser(
        { email: eMailRef.current.value, password: passwordRef.current.value },
        { username: userNameRef.current.value, email: eMailRef.current.value },
      );
    }
  }, []);
  const loginWithPassword = useCallback((e: any) => {
    if (userNameRef.current && eMailRef.current && passwordRef.current) {
      firebase.login({
        email: eMailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <div style={{ width: "100%" }}>
        {(() => {
          if (!isLoaded(auth)) return <span>Loading...</span>;
          if (isLoaded(auth) && !isEmpty(auth))
            return (
              <StyledDiv>
                <StyledButton type="button" onClick={logOut}>
                  Logout
                </StyledButton>
                <pre>{JSON.stringify(auth, null, 2)}</pre>
              </StyledDiv>
            );
          return (
            <StyledDiv>
              <StyledInput ref={userNameRef} placeholder="Username" />
              <StyledInput ref={eMailRef} placeholder="Email adress" />
              <StyledInput ref={passwordRef} placeholder="Password" />
              <StyledButton type="button" onClick={loginWithGoogle}>
                Login With Google
              </StyledButton>
              <StyledButton type="button" onClick={signUpWithPassword}>
                Sign Up With Password
              </StyledButton>
              <StyledButton type="button" onClick={loginWithPassword}>
                Login With Password
              </StyledButton>
            </StyledDiv>
          );
        })()}
      </div>
    </div>
  );
};
const StyledDiv = styled.div`
  border: 1px solid #018dc4;
  width: 100%;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 20rem;
  border: 1px solid #018dc4;
  border-radius: 3px;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: #ffc107;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);
`;
const StyledInput = styled.input`
  width: 20rem;
  display: inline;
  border: 1px solid #b7b7b7;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: rgba(252, 252, 252, 1);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
`;
export default LoginPage;
