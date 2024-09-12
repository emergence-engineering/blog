import { FC } from "react";

import MessageIcon from "../../../public/lp/message.svg";
import Calendly from "../../landingPage/components/Calendly";

export const TwScheduleACall: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-transparent text-white">
      <div className="flex flex-col items-center justify-center gap-4 font-pt-sans-narrow lg:flex-row lg:justify-start">
        <MessageIcon className="h-[120px] w-[120px]" />
        <div className="w-full self-center text-2xl font-bold lg:text-4xl">
          Schedule a call
        </div>
      </div>
      <div className="w-full max-w-full xl:max-w-[364px]">
        <Calendly />
      </div>
    </div>
  );
};
