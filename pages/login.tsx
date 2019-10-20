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
        {!isLoaded(auth) ? (
          <span>Loading...</span>
        ) : isEmpty(auth) ? (
          <StyledDiv>
            <button type="button" onClick={loginWithGoogle}>
              Login With Google
            </button>
            <button type="button" onClick={signUpWithPassword}>
              Sign Up With Password
            </button>
            <button type="button" onClick={signInWithPassword}>
              Sign In With Password
            </button>
          </StyledDiv>
        ) : (
          <StyledDiv>
            <button type="button" onClick={logOut}>
              Logout
            </button>
            <pre>{JSON.stringify(auth, null, 2)}</pre>
          </StyledDiv>
        )}
      </div>
    </div>
  );
}
const StyledDiv = styled.div`
  border: 1px solid #018dc4;
  width: 50%;
  background: gray;
  margin: auto;
  padding: 10px;
`;

export default LoginPage;
