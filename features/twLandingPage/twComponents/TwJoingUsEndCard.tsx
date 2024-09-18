import { FC } from "react";

import EELogo from "../../../public/lp/ee_logo.svg";
import { scrollToContact } from "../utils/scrollToContact";
import { montserrat } from "../../../utils/fonts";
import { Button } from "./Button";

export const TwJoinUsEndCard: FC = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-4 rounded-sm border-2 border-neutral-700 bg-black p-8 text-white md:opacity-0"
      id="join-end-card"
    >
      <EELogo className="h-[100px] w-[100px]" />
      <h1 className="text-center text-2xl font-bold">
        We are here not only to build a working application{" "}
      </h1>
      <div className={`text-left ${montserrat.className}`}>
        but to create a working business that generates revenue. For that to
        happen you must go through a lot of difficulties, testing, twist end
        turns so you better have team that you enjoy working with and whom you
        can trust. It’s a long road, choose your companions well.
      </div>
      <Button
        label="START YOUR JOURNEY WITH US"
        handleClick={scrollToContact}
        theme="secondary"
        wide
      />
    </div>
  );
};
