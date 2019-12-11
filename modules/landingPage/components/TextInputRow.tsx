import styled from "styled-components";
import React, { ChangeEvent, FunctionComponent } from "react";

import theme, { screenSizes } from "../../../utils/theme";

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
  }
`;
export const InputWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Label = styled.label`
  flex: 1;
  font-family: ${theme.fontFamily.title};
  font-size: 1.2rem;
  letter-spacing: 0.08rem;
  color: ${theme.color.gray10};
`;
const Input = styled.input`
  display: block;
  margin: 0;
  padding: 0.6rem;
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  border: none;
  border-radius: 0.2rem;
  transition: box-shadow 0.2s;
`;

const TextArea = styled.textarea`
  resize: none;
  display: block;
  margin: 0;
  padding: 0.6rem;
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  border: none;
  border-radius: 0.2rem;
  transition: box-shadow 0.2s;
`;

const LabelSpan = styled.span`
  flex: 1;
  font-family: ${theme.fontFamily.title};
  letter-spacing: 0.08rem;
  font-size: 1.2rem;
  color: ${theme.color.gray10};
`;

interface InputRowProps {
  name: string;
  isRequired: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type: string;
  label: string;
}

interface TextAreaInputRowProps {
  name: string;
  isRequired: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  label: string;
}
export const TextInputRow: FunctionComponent<InputRowProps> = ({
  name,
  onChange,
  type,
  label,
  placeholder,
}) => (
  <InputRow>
    <Label htmlFor={name}>{label}</Label>
    <InputWrapper>
      <Input
        type={type}
        name={name}
        id={name}
        required
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  </InputRow>
);

export const TextAreaInputRow: FunctionComponent<TextAreaInputRowProps> = ({
  name,
  onChange,
  label,
  placeholder,
}) => (
  <InputRow>
    <LabelSpan>{label}</LabelSpan>
    <InputWrapper>
      <TextArea
        name={name}
        id={name}
        rows={10}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  </InputRow>
);
