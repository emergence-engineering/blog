import React, { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

import { Button } from "../../../ui/components/Button";
import { text } from "../../../utils/mixins";
import theme from "../../../utils/theme";
import { PasswordInput, TextInput } from "../../../ui/components/Input";

interface EmailSignUpProps {
  resetEmail: (email: string) => void;
  login: (email: string, password: string) => void;
}

interface EmailSignUpValues {
  email: string;
  password: string;
}

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const EmailInput = styled(TextInput)`
  width: 100%;
`;

export const PassInput = styled(PasswordInput)`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 19.9375rem;
  justify-content: center;
  margin-bottom: 2rem;
  height: 3.1875rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 19.9375rem;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  ${text};
  font-size: ${theme.fontSize.normal};
  margin-bottom: 1rem;
  align-self: center;
  margin-top: 2rem;
  max-width: 20rem;
  width: 100%;
`;

export const ErrorField = styled.div`
  ${text};
  font-size: ${theme.fontSize.small};
  color: ${theme.color.error};
  align-self: center;
  margin-top: 0.5rem;
  max-width: 20rem;
  width: 100%;
`;

const Text = styled.div`
  ${text};
  margin-top: 3rem;
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const EmailSignup: FunctionComponent<EmailSignUpProps> = ({
  login,
  resetEmail,
}) => {
  const submit = useCallback((values: EmailSignUpValues) => {
    login(values.email, values.password);
  }, []);

  const sendResetEmail = (values: EmailSignUpValues) => () => {
    resetEmail(values.email);
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }: /* and other goodies */
        FormikProps<EmailSignUpValues>) => (
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
              <Text onClick={sendResetEmail(values)}>
                Did you forget your password?
              </Text>
            </InputWrapper>
            <Row>
              <Button width="100%" type="submit">
                Sign in
              </Button>
            </Row>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default EmailSignup;
