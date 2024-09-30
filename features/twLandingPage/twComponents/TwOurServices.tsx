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
          title="Full-Stack Web development"
          content="If you need a webapp, software product, API connection,  so on...  our full-stack experts will help your team write better code faster."
        />
        <TwServiceCard
          Icon={RichTextIcon}
          title="Rich Text editors"
          content="The next Google docs or a better input system for a chat platform, we got you covered. Our team builds custom WYSIWYG features and complete editors."
          path="/prosemirror"
        />
        <TwServiceCard
          Icon={FintechIcon}
          title="Fintech and payment solutions"
          content="Our team creates robust  fintech products and payment solutions that are the cure for your subscription, coupon and tax issues."
        />
        <TwServiceCard
          Icon={AiIcon}
          title="AI development"
          content="We help create custom artificial intelligence solutions that feel like magic."
        />
        <TwServiceCard
          Icon={CollabIcon}
          title="Collaborative UIs with YJS"
          content="Katy and Matt editing the same page? Not a problem. We are experts at creating interfaces that allow users to work together simultaneously."
        />
        <TwServiceCard
          Icon={PPCIcon}
          title="PPC & Marketing"
          content="Get the word out and bring in the users in bulk. We provide custom solutions for marketing your software product and getting your first users ."
        />
      </div>

      <Button handleClick={scrollToContact} label="GET A QUOTE" />
    </div>
  );
};
