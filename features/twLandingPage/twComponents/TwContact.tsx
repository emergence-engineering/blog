import { TwContactUs } from "./TwContactUs";
import { TwScheduleACall } from "./TwScheaduleACall";

export const TwContact = () => {
  return (
    <div className="blur-image-sides flex w-full items-center justify-center bg-black bg-hyperspace bg-cover text-white xl:p-36">
      <div className="flex w-full max-w-[1440px] flex-col justify-center gap-16 p-3">
        <div
          id="contact-us-section"
          className="w-full max-w-4xl self-center p-6 pb-0 text-center font-pt-sans-narrow text-4.5xl font-bold uppercase leading-none lg:p-0 lg:text-7.5xl"
        >
          Let’s build great apps
          <span className="font-pt-sans-narrow text-red-600">together.</span>
        </div>
        <div className="flex w-full flex-col gap-32 xl:flex-row xl:gap-16">
          <TwContactUs />
          <div className="hidden h-auto w-[2px] bg-zinc-600 xl:flex"></div>
          <TwScheduleACall />
        </div>
      </div>
    </div>
  );
};
