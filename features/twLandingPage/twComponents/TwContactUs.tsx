import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import MessageIcon from "../../../public/lp/message.svg";
import MailIcon from "../../../public/lp/mail.svg";
import { post } from "../../../utils/xhr";
import {
  createHubSpotFormBody,
  formAddress,
} from "../../landingPage/utils/hubSpotContatForm";
import Notice, {
  NoticeProps,
  NoticeType,
} from "../../common/components/Notice";
import { Input } from "./Input";
import { Button } from "./Button";
import { Textarea } from "./TextArea";

const createClickHandler =
  (callback: Dispatch<SetStateAction<string>>) =>
  (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = evt.target;
    callback(value);
  };

export const TwContactUs: FC = () => {
  const [noticeVisibility, setNoticeVisibility] = useState<NoticeProps | null>(
    null,
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const firstNameChangeHandler = createClickHandler(setFirstName);
  const lastNameChangeHandler = createClickHandler(setLastName);
  const emailChangeHandler = createClickHandler(setEmail);
  const messageChangeHandler = createClickHandler(setMessage);
  const subjectChangeHandler = createClickHandler(setSubject);

  const submitHandler = useCallback(
    async (evt: SyntheticEvent) => {
      evt.preventDefault();
      setSubmitDisabled(true);

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
        setSubmitDisabled(false);
        return;
      }
      setTimeout(() => {
        setSubmitDisabled(false);
      }, 5000);
      setNoticeVisibility({
        message: "Success: Message sent, we will contact you shortly!",
        type: NoticeType.success,
      });
    },
    [email, firstName, lastName, subject, message],
  );

  useEffect(() => {
    if (noticeVisibility) {
      setTimeout(() => {
        setNoticeVisibility(null);
      }, 2500);
    }
  }, [noticeVisibility]);

  return (
    <div className="align-center flex w-full flex-col justify-start gap-6 border-zinc-600 bg-transparent text-white lg:border-none lg:p-4 xl:gap-3">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row xl:mr-[11%] xl:justify-end">
        <MessageIcon />
        <div className="self-center text-[28px] font-bold lg:text-4xl">
          Write a message
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-left font-montserrat text-base xl:self-end xl:pb-6">
        <div className="hidden lg:block">
          <MailIcon />
        </div>
        contact@emergence-engineering.com
      </div>
      <form
        action={formAddress}
        method="post"
        onSubmit={submitHandler}
        className="flex w-full max-w-full flex-col gap-4 self-center text-left text-base lg:gap-8 lg:self-end xl:max-w-[426px]"
      >
        <Input
          name="firstName"
          handleChange={firstNameChangeHandler}
          placeholder="Rick"
          label="First Name"
        />
        <Input
          name="lastName"
          handleChange={lastNameChangeHandler}
          placeholder="Sanchez"
          label="Last Name"
        />
        <Input
          name="subject"
          handleChange={subjectChangeHandler}
          placeholder="I need more portal fluid"
          label="Subject"
        />
        <Input
          name="email"
          handleChange={emailChangeHandler}
          placeholder="simple@rick.com"
          label="Email"
        />
        <Textarea
          name="message"
          handleChange={messageChangeHandler}
          placeholder="I want more portal fluid, can you help me?"
          label="Message"
        />
        <Button
          className="self-end"
          label={submitDisabled ? "SENDING..." : "SEND"}
          type="submit"
          disabled={submitDisabled}
          theme="primary"
        />
      </form>
      {noticeVisibility ? (
        <Notice
          message={noticeVisibility.message}
          type={noticeVisibility.type}
        />
      ) : null}
    </div>
  );
};
