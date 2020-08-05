import React, { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { actionTypes } from "redux-firestore";
import { toast } from "react-toastify";
import Router from "next/router";

import GoogleSVG from "../../../ui/assets/icons/google.svg";
import FacebookSVG from "../../../ui/assets/icons/facebook.svg";
import { IconButton } from "../../../ui/components/IconButton";
import { createFunction } from "../../../utils";
import { FlexRow } from "../../../ui/components/Layout";

import EmailSignUp from "./EmailSignUp";

export const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19.9375rem;
  height: 100%;
`;

export const Row = styled(FlexRow)`
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
  height: 3.1875rem;
`;

const SignUpPageContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const loginWithProvider = useCallback((provider: "google" | "facebook") => {
    dispatch({ type: actionTypes.CLEAR_DATA });
    firebase
      .login({ provider, type: "popup" })
      .then(() => {
        toast.success("Logged in successfully.");
        Router.push("/dashboard");
      })
      .catch((err) => toast.error(err.message));
  }, []);

  const loginWithGoogle = useCallback(() => loginWithProvider("google"), []);
  const loginWithFacebook = useCallback(
    () => loginWithProvider("facebook"),
    [],
  );
  const loginWithEmail = useCallback((email: string, password) => {
    // dispatch({ type: actionTypes.CLEAR_DATA });
    firebase
      .login({ email, password })
      .then(() => {
        toast.success("Logged in successfully.");
        Router.push("/dashboard");
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          const signUpCallable = createFunction<
            { email: string; password: string },
            void
          >("signup");
          return signUpCallable({ email, password })
            .then(() => {
              toast.success("Sign up successful");
              firebase.login({ email, password });
            })
            .catch((error) => toast.error(error.message));
        }
        return toast.error(err.message);
      });
  }, []);

  const resetEmail = useCallback((email: string) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => toast.success("Email sent"))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <RootDiv>
      <EmailSignUp login={loginWithEmail} resetEmail={resetEmail} />
      <Wrapper>
        <Row>
          <IconButton
            width="100%"
            src={GoogleSVG}
            handleClick={loginWithGoogle}
          >
            Sign up with Google
          </IconButton>
        </Row>
        <Row>
          <IconButton
            width="100%"
            src={FacebookSVG}
            handleClick={loginWithFacebook}
          >
            Sign up with Facebook
          </IconButton>
        </Row>
      </Wrapper>
    </RootDiv>
  );
};

export default SignUpPageContainer;
