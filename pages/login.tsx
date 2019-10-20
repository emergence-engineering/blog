import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import styled from "styled-components";
import { RootState } from "../setup/reducers/rootReducer";

function LoginPage() {
  const firebase = useFirebase();
  const auth = useSelector((state: RootState) => state.firebase.auth);

  const loginWithGoogle = useCallback((e: any) => {
    firebase.login({ provider: "google", type: "popup" });
  }, []);

  const logOut = useCallback((e: any) => {
    firebase.auth().signOut();
  }, []);
  const signUpWithPassword = useCallback((e: any) => {}, []);
  const signInWithPassword = useCallback((e: any) => {}, []);

  return (
    <div>
      <div>
        <h2>Auth</h2>
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
              <StyledButton type="button" onClick={loginWithGoogle}>
                Login With Google
              </StyledButton>
              <StyledButton type="button" onClick={signUpWithPassword}>
                Sign Up With Password
              </StyledButton>
              <StyledButton type="button" onClick={signInWithPassword}>
                Sign In With Password
              </StyledButton>
            </StyledDiv>
          );
        })()}
      </div>
    </div>
  );
}
const StyledDiv = styled.div`
  border: 1px solid #018dc4;
  width: 80%;
  background: gray;
  margin: auto;
  padding: 10px;
`;
const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #018dc4;
  border-radius: 3px;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: #ffc107;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);
`;
const StyledInput = styled.input`
  padding: 10px 20px;
  display: inline;
  border: 1px solid #b7b7b7;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: rgba(252, 252, 252, 1);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
`;
export default LoginPage;
