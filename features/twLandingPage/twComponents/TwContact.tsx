import Image from "next/image";
import BGImage from "../../../public/lp/hyperspace.webp";
import MobileBGImage from "../../../public/lp/hyperspace_mobile.webp";
import { TwContactUs } from "./TwContactUs";
import { TwScheduleACall } from "./TwScheaduleACall";

export const TwContact = () => {
  return (
    <div className="justify-centera flex w-full flex-col items-center bg-black text-white">
      <div className="relative flex w-full justify-center">
        <div className="hidden md:block">
          <Image
            src={BGImage.src}
            alt="background"
            sizes="100vw"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            fill
            priority
          />
        </div>

        <div className="block md:hidden">
          <Image
            src={MobileBGImage.src}
            alt="background"
            sizes="100vw"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            fill
            priority
          />
        </div>
        <div className="z-10 flex w-full max-w-[1440px] flex-col justify-center gap-16 p-3 xl:p-36">
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
    </div>
  );
};
