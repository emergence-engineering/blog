import React from "react";
import { TwIntroduction } from "./TwIntroduction";
import { TwJoinUsTabs } from "./TwJoinUsTabs";
import TwJoinUsColumns from "./TwJoinUsColumns";
import { TwOurServices } from "./TwOurServices";
import { TwReferences } from "./TwReferences";
import { TwOurProducts } from "./TwOurProducts";
import { TwJoinUsEndCard } from "./TwJoingUsEndCard";
import { TwContact } from "./TwContact";

export const TwLandingPage = () => {
  return (
    <div className="flex w-full flex-col justify-center bg-white">
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
        <div className="flex max-w-[1440px] flex-grow justify-center bg-black md:bg-inherit">
          <TwJoinUsColumns />
        </div>
      </div>
      <div className="relative flex h-[450px] w-full self-center xs:h-[450px] mobile:h-[350px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="absolute -top-[4.2rem] left-1/2 h-100 w-full max-w-[750px] -translate-x-1/2 transform md:w-[80%]">
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
