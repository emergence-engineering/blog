import React, { FunctionComponent, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import styled from "styled-components";
import { RootState } from "../setup/reducers/rootReducer";
import theme from "../toDoList/theme";

const LoginPage: FunctionComponent<{}> = () => {
  const firebase = useFirebase();
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore TODO
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const eMailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const loginWithGoogle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      firebase.login({ provider: "google", type: "popup" });
    },
    [],
  );

  const logOut = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    firebase.auth().signOut();
  }, []);
  const signUpWithPassword = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
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
    },
    [],
  );
  const loginWithPassword = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (userNameRef.current && eMailRef.current && passwordRef.current) {
        firebase.login({
          email: eMailRef.current.value,
          password: passwordRef.current.value,
        });
      }
    },
    [],
  );

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
  border: 1px solid ${theme.color.border};
  width: 100%;
  background: ${theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 20rem;
  border: 1px solid ${theme.color.border};
  border-radius: 3px;
  background: ${theme.color.button};
  box-shadow: 2px 2px 2px 0 ${theme.color.shadow};
`;
const StyledInput = styled.input`
  width: 20rem;
  display: inline;
  border: 1px solid ${theme.color.border};
  border-radius: 3px;
  color: ${theme.color.shadow};
  background: ${theme.color.inputBackground};
  box-shadow: 2px 2px 2px 0 ${theme.color.shadow} outset;
`;
export default LoginPage;
