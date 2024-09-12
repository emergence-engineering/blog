import React from "react";
import useLpAnimation from "../utils/useLpAnimation";
import { TwIntroduction } from "./TwIntroduction";
import { TwJoinUsTabs } from "./TwJoinUsTabs";
import TwJoinUsColumns from "./TwJoinUsColumns";
import { TwOurServices } from "./TwOurServices";
import { TwReferences } from "./TwReferences";
import { TwOurProducts } from "./TwOurProducts";
import { TwJoinUsEndCard } from "./TwJoingUsEndCard";
import { TwContact } from "./TwContact";

export const TwLandingPage = () => {
  useLpAnimation();
  return (
    <div className="flex w-full flex-col justify-center bg-white" id="gsapPin">
      <style jsx>{`
        .blackWhiteBgSplit {
          @media (min-width: 769px) {
            background: linear-gradient(to right, black 50%, white 50%);
          }
        }
      `}</style>
      <TwIntroduction />
      <TwJoinUsTabs />
      <div className="blackWhiteBgSplit flex w-full justify-center">
        <div id="gsapContainer" className="flex max-w-[1440px] flex-grow">
          <TwJoinUsColumns />
        </div>
      </div>
      <div className="relative flex h-[650px] w-full max-w-1140 self-center xs:h-[550px] mobile:h-[500px] sm:h-[400px]">
        <div className="absolute -top-[4.2rem] left-1/2 h-100 w-[80%] max-w-[750px] -translate-x-1/2 transform">
          <TwJoinUsEndCard />
        </div>
      </div>
      <TwOurServices />
      <TwReferences />
      <TwOurProducts />
      <TwContact />
    </div>
  );
};
