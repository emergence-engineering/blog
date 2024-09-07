import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useState,
} from "react";

import MessageIcon from "../../../public/lp/message.svg";
import MailIcon from "../../../public/lp/mail.svg";
import { post } from "../../../utils/xhr";
import {
  createHubSpotFormBody,
  formAddress,
} from "../../landingPage/utils/hubSpotContatForm";
import { NoticeProps, NoticeType } from "../../common/components/Notice";
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
  const [, setNoticeVisibility] = useState<NoticeProps | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const firstNameChangeHandler = createClickHandler(setFirstName);
  const lastNameChangeHandler = createClickHandler(setLastName);
  const emailChangeHandler = createClickHandler(setEmail);
  const messageChangeHandler = createClickHandler(setMessage);
  const subjectChangeHandler = createClickHandler(setSubject);

  const submitHandler = useCallback(
    async (evt: SyntheticEvent) => {
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
    },
    [email, firstName, lastName, subject, message],
  );

  return (
    <div className="align-center flex w-full flex-col justify-start gap-6 border-zinc-600 bg-transparent text-white lg:border-none lg:p-4 xl:gap-3">
      <div className="flex flex-col items-center justify-center gap-4 font-pt-sans-narrow lg:flex-row xl:mr-[11%] xl:justify-end">
        <MessageIcon />
        <div className="self-center font-pt-sans-narrow text-[28px] font-bold lg:text-4xl">
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
          label="SEND"
          type="submit"
          theme="primary"
        />
      </form>
    </div>
  );
};
