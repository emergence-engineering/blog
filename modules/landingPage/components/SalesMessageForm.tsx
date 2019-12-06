import styled from "styled-components";
import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import { Button } from "../../common/components/Button";
import { createHubSpotFormBody, formAddress } from "../utils/hubSpotContatForm";
import Notice, {
  NoticeProps,
  NoticeType,
} from "../../common/components/Notice";
import { post } from "../../../utils/xhr";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.primary};
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
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

const LabelSpan = styled.span`
  flex: 1;
  font-family: ${theme.fontFamily.title};
  letter-spacing: 0.08rem;
  font-size: 1.2rem;
  color: ${theme.color.gray10};
`;

const SalesForm = styled.form``;

const ContentWrapper = styled.div`
  padding: 0 ${sizes.sidePadding};
  max-width: 40rem;
  width: 100%;
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

const Title = styled.h1`
  width: 100%;
  text-align: center;
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

const SendButton = styled(Button)`
  font-size: 1rem;
  font-weight: 200;
`;

const createClickHandler = (callback: Dispatch<SetStateAction<string>>) => (
  evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const { value } = evt.target;
  callback(value);
};

interface InputRowProps {
  name: string;
  isRequired: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type: string;
  label: string;
}
const TextInputRow: FunctionComponent<InputRowProps> = ({
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

const SalesFormSection: FunctionComponent<{}> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [noticeVisibility, setNoticeVisibility] = useState<NoticeProps | null>(
    null,
  );

  const firstNameChangeHandler = createClickHandler(setFirstName);
  const lastNameChangeHandler = createClickHandler(setLastName);
  const emailChangeHandler = createClickHandler(setEmail);
  const messageChangeHandler = createClickHandler(setMessage);
  const subjectChangeHandler = createClickHandler(setSubject);
  const submitHandler = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    const formBody = createHubSpotFormBody(
      email,
      firstName,
      lastName,
      subject,
      message,
    );

    const { error } = await post(formAddress, formBody);
    if (error) {
      setNoticeVisibility({
        message: "Failure: couldn't send message, please try again.",
        type: NoticeType.error,
      });
      return;
    }
    setNoticeVisibility({
      message: "Success: Message sent, we will contact you shortly!",
      type: NoticeType.success,
    });
  };
  return (
    <Root>
      <ContentWrapper>
        <Title>Contact us</Title>
        <SalesForm action={formAddress} method="post" onSubmit={submitHandler}>
          <TextInputRow
            name="firstname"
            isRequired
            onChange={firstNameChangeHandler}
            placeholder="Rick"
            type="text"
            label="First name"
          />
          <TextInputRow
            name="lastname"
            isRequired
            onChange={lastNameChangeHandler}
            placeholder="Sanchez"
            type="text"
            label="Last name"
          />
          <TextInputRow
            name="subject"
            isRequired
            onChange={subjectChangeHandler}
            placeholder="I need more portal fluid"
            type="text"
            label="Subject"
          />
          <InputRow>
            <LabelSpan>Message</LabelSpan>
            <InputWrapper>
              <TextArea
                name="message"
                id=""
                rows={10}
                placeholder="I want to get schwifty, can you help me?"
                onChange={messageChangeHandler}
              />
            </InputWrapper>
          </InputRow>
          <TextInputRow
            name="email"
            isRequired
            onChange={emailChangeHandler}
            placeholder="simple@rick.com"
            type="email"
            label="Email"
          />
          <InputRow>
            <div />
            <SendButton type="submit" color="secondary">
              Send message
            </SendButton>
          </InputRow>
        </SalesForm>
      </ContentWrapper>
      {noticeVisibility ? (
        <Notice
          message={noticeVisibility.message}
          type={noticeVisibility.type}
        />
      ) : null}
    </Root>
  );
};

export default SalesFormSection;
