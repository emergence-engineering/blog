import { FC } from "react";

import AiIcon from "../../../public/lp/ai.svg";
import SoftwareIcon from "../../../public/lp/software.svg";
import RichTextIcon from "../../../public/lp/rich_text.svg";
import FintechIcon from "../../../public/lp/fintech.svg";
import PPCIcon from "../../../public/lp/ppc.svg";
import CollabIcon from "../../../public/lp/collab.svg";

import { scrollToContact } from "../utils/scrollToContact";
import { TwServiceCard } from "./TwServicesGrid";
import { Button } from "./Button";

export const TwOurServices: FC = () => {
  return (
    <div
      id="our-services-section"
      className="flex w-full flex-col items-center justify-center gap-12 self-center py-12 font-bold text-black sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:gap-16 lg:py-16 xl:max-w-[1140px] 2xl:max-w-[1320px]"
    >
      <div className="flex min-h-full justify-center text-4.5xl lg:self-start lg:text-7.5xl">
        OUR SERVICES
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <TwServiceCard
          Icon={SoftwareIcon}
          title="Software development"
          content="If you need a web app software product, API so on... you get the idea."
        />
        <TwServiceCard
          Icon={RichTextIcon}
          title="Rich Text editors"
          content="The next Google docs or a great input for a chat: we got you covered."
          path="/prosemirror"
        />
        <TwServiceCard
          Icon={FintechIcon}
          title="Fintech"
          content="The cure for your subscription, coupon and tax issues."
        />
        <TwServiceCard
          Icon={PPCIcon}
          title="PPC & Marketing"
          content="Get the word out and bring in the users in bulk."
        />
        <TwServiceCard
          Icon={AiIcon}
          title="AI development"
          content="Create products that feel like magic."
        />
        <TwServiceCard
          Icon={CollabIcon}
          title="Collaborative UIs with YJS"
          content="Katy and Matt editing the same page? Not a problem."
        />
      </div>

      <Button handleClick={scrollToContact} label="GET A QUOTE" />
    </div>
  );
};
