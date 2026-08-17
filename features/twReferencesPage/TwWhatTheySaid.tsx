import React, { FunctionComponent } from "react";

import { TestimonialCards } from "../ge/components/TestimonialCards";

/** Client quotes on the references page. */
export const TwWhatTheySaid: FunctionComponent = () => (
  <div className="flex w-full flex-col items-center bg-paper px-3 pb-16 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
    <TestimonialCards heading="WHAT THEY" headingAccent="SAID" />
  </div>
);
