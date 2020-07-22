import React from "react";
import { FormikProps, Form } from "formik";
import styled from "styled-components";

import { Button } from "../../../ui/components/Button";
import {
  EmailInput,
  ErrorField,
  InputWrapper,
  Label,
  Row,
} from "../../auth/components/EmailSignUp";
import { CollaboratorRole } from "../../../utils/database/types";
import { SelectField } from "../../form/components";
import { AddItemFormValues } from "../../addItem/modules/types";

export interface SharingValues {
  email: string;
  role: CollaboratorRole;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  flex-basis: content;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export default ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: FormikProps<SharingValues>) => (
  <Root>
    {console.log(values)}
    <StyledForm>
      <InputWrapper>
        <Label>E-mail</Label>
        <EmailInput
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <ErrorField>{errors.email && touched.email && errors.email}</ErrorField>
      </InputWrapper>
      <SelectField<AddItemFormValues>
        fieldName="role"
        title="Role"
        content={{
          Edit: { id: CollaboratorRole.Edit, name: CollaboratorRole.Edit },
          View: { id: CollaboratorRole.View, name: CollaboratorRole.View },
        }}
      />
      <Row>
        <Button width="100%" type="submit">
          Share
        </Button>
      </Row>
    </StyledForm>
  </Root>
);
