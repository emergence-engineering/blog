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

import { createHubSpotFormBody, formAddress } from "../utils/hubSpotContatForm";
import { Button } from "../../common/components/Button";
import { post } from "../../../utils/xhr";
import Notice, {
  NoticeProps,
  NoticeType,
} from "../../common/components/Notice";

import {
  InputRow,
  LabelSpan,
  TextAreaInputRow,
  TextInputRow,
} from "./TextInputRow";

const SendButton = styled(Button)`
  cursor: pointer;
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


const SalesForm: FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const firstNameChangeHandler = createClickHandler(setFirstName);
  const lastNameChangeHandler = createClickHandler(setLastName);
  const emailChangeHandler = createClickHandler(setEmail);
  const messageChangeHandler = createClickHandler(setMessage);
  const subjectChangeHandler = createClickHandler(setSubject);

  const [noticeVisibility, setNoticeVisibility] = useState<NoticeProps | null>(
    null,
  );

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
    },
    [isCaptchaVerified, email, firstName, lastName, subject, message],
  );


  const verifyCallback = useCallback(() => {
    setCaptchaVerified(true);
  }, []);

  // this function magically stops an error that is being thrown
  // from the official google reCAPTCHA API...
  const onCaptchaLoad = useCallback(() => console.info("reCAPTCHA loaded"), []);

  return (
    <>
      <FormRoot action={formAddress} method="post" onSubmit={submitHandler}>
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
        <TextInputRow
          name="email"
          isRequired
          onChange={emailChangeHandler}
          placeholder="simple@rick.com"
          type="email"
          label="Email"
        />
        <TextAreaInputRow
          name="message"
          isRequired
          onChange={messageChangeHandler}
          placeholder="I want more portal fluid, can you help me?"
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
