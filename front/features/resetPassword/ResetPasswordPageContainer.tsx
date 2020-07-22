import React, { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import Router from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFirebase } from "react-redux-firebase";
import { toast } from "react-toastify";

import { RootDiv } from "../auth/components/SignUpPageContainer";
import { Button } from "../../ui/components/Button";
import {
  EmailInput,
  ErrorField,
  InputWrapper,
  Label,
  PassInput,
  Row,
  StyledForm,
} from "../auth/components/EmailSignUp";
import { TwoRowHeader } from "../../ui/components/Header";

interface ResetPasswordProps {
  code: string | undefined;
}

const Root = styled(RootDiv)`
  justify-content: flex-start;
`;

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ResetPasswordPageContainer: FunctionComponent<ResetPasswordProps> = ({
  code,
}) => {
  const firebase = useFirebase();

  const submit = useCallback(
    (values: { email: string; password: string }) => {
      if (!code) {
        toast.error("Missing veryfication code");
        return;
      }
      firebase
        .auth()
        .verifyPasswordResetCode(code)
        .then(verification => {
          console.log("verification", verification);
          if (verification === values.email) {
            firebase
              .auth()
              .confirmPasswordReset(code, values.password)
              .then(() => {
                toast.success("Password changed successfully");
                Router.push("/auth/signup");
              });
          }
        })
        .catch(err => toast.error(err.message));
    },
    [code],
  );
  return (
    <Root>
      <TwoRowHeader title="Password reset" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Schema}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          /* and other goodies */
        }) => (
          <StyledForm>
            <InputWrapper>
              <Label>E-mail</Label>
              <EmailInput
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorField>
                {errors.email && touched.email && errors.email}
              </ErrorField>
              <Label>Password</Label>
              <PassInput
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorField>
                {errors.password && touched.password && errors.password}
              </ErrorField>
            </InputWrapper>
            <Row>
              <Button width="100%" type="submit">
                Change Password
              </Button>
            </Row>
          </StyledForm>
        )}
      </Formik>
    </Root>
  );
};

export default ResetPasswordPageContainer;
