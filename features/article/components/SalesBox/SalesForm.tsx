import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";

import { Button } from "../../../common/components/Button";
import Notice, {
  NoticeProps,
  NoticeType,
} from "../../../common/components/Notice";
import {
  createHubSpotFormBody,
  formAddress,
} from "../../../landingPage/utils/hubSpotContatForm";
import { post } from "../../../../utils/xhr";
import { LabelSpan } from "../../../landingPage/components/TextInputRow";

import { InputRow, TextAreaInputRow, TextInputRow } from "./TextInputRow";
import { FormType } from "./state";

const SendButton = styled(Button)`
  font-size: 1rem;
  font-weight: 200;
`;

const FormRoot = styled.form``;

const createClickHandler =
  (callback: Dispatch<SetStateAction<string>>) =>
  (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = evt.target;
    callback(value);
  };

interface ArticleSalesFormPlaceholders {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

const articleSalesFormPlaceholders: ArticleSalesFormPlaceholders = {
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
  message: "Please describe your issue here...",
};

type FormTypes =
  | FormType.videoConsultation
  | FormType.development
  | FormType.training
  | FormType.empty;
type SubjectMap = { [formType in FormTypes]: string };

const subjects: SubjectMap = {
  [FormType.development]: "Development",
  [FormType.training]: "Training",
  [FormType.videoConsultation]: "Video consultation",
  [FormType.empty]: "",
};

const SalesForm: FunctionComponent<{ formType: FormType }> = ({ formType }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const firstNameChangeHandler = createClickHandler(setFirstName);
  const lastNameChangeHandler = createClickHandler(setLastName);
  const emailChangeHandler = createClickHandler(setEmail);
  const messageChangeHandler = createClickHandler(setMessage);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const [noticeVisibility, setNoticeVisibility] = useState<NoticeProps | null>(
    null,
  );

  const verifyCallback = useCallback(() => {
    setCaptchaVerified(true);
  }, []);

  // this function magically stops an error that is being thrown
  // from the official google reCAPTCHA API...
  // eslint-disable-next-line no-console
  const onCaptchaLoad = useCallback(() => console.info("reCAPTCHA loaded"), []);

  const submitHandler = useCallback(
    async (evt: SyntheticEvent) => {
      evt.preventDefault();

      if (!isCaptchaVerified) {
        setNoticeVisibility({
          message: "Please verify that you are not a bot!",
          type: NoticeType.error,
        });
        return;
      }

      const formBody = createHubSpotFormBody(
        email,
        firstName,
        lastName,
        subjects[formType],
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
    },
    [email, firstName, lastName, message, formType, isCaptchaVerified],
  );

  return (
    <>
      <FormRoot action={formAddress} method="post" onSubmit={submitHandler}>
        <TextInputRow
          name="firstname"
          isRequired
          onChange={firstNameChangeHandler}
          placeholder={articleSalesFormPlaceholders.firstName}
          type="text"
          label="First name"
        />
        <TextInputRow
          name="lastname"
          isRequired
          onChange={lastNameChangeHandler}
          placeholder={articleSalesFormPlaceholders.lastName}
          type="text"
          label="Last name"
        />
        <TextInputRow
          name="subject"
          value={subjects[formType]}
          readonly
          type="text"
          label="Subject"
        />
        <TextInputRow
          name="email"
          isRequired
          onChange={emailChangeHandler}
          placeholder={articleSalesFormPlaceholders.email}
          type="email"
          label="Email"
        />
        <TextAreaInputRow
          name="message"
          isRequired
          onChange={messageChangeHandler}
          placeholder={articleSalesFormPlaceholders.message}
          label="Message"
        />
        <InputRow>
          <LabelSpan>Verification</LabelSpan>
          <Recaptcha
            sitekey="6LffkrgZAAAAAABzuwhbunyE9-nEHncoNze7B6O0"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={onCaptchaLoad}
          />
        </InputRow>
        <InputRow>
          <div />
          <SendButton type="submit" color="secondary">
            Send message
          </SendButton>
        </InputRow>
      </FormRoot>

      {noticeVisibility ? (
        <Notice
          message={noticeVisibility.message}
          type={noticeVisibility.type}
        />
      ) : null}
    </>
  );
};

export default SalesForm;
