import { FC } from "react";

import Calendly from "../../landingPage/components/Calendly";

export const TwScheduleACall: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-transparent text-white">
      <div className="font-pt-sans-narrow flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start">
        <div className="w-full self-center text-2xl font-bold lg:text-4xl">
          Schedule a call
        </div>
      </div>
      <div className="w-full">
        <Calendly />
      </div>
    </div>
  );
};
