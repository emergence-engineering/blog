import { FC } from "react";

import IdeaIcon from "../../../public/lp/idea.svg";
import PlanIcon from "../../../public/lp/plan.svg";
import PrototypeIcon from "../../../public/lp/prototype.svg";
import ValidateIcon from "../../../public/lp/validate.svg";
import ProductIcon from "../../../public/lp/product.svg";
import DividerIcon from "../../../public/lp/divider_dot.svg";
import HereIcon from "../../../public/lp/you_are_here.svg";
import HereIconMobile from "../../../public/lp/you_are_here_mobile.svg";

interface IconWrapperProps {
  label: string;
  alt: string;
  Icon: any;
  sub: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ label, alt, Icon, sub }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 lg:h-[350px] lg:flex-col lg:justify-start lg:gap-0">
      <div className="flex flex-row items-center lg:flex-col">
        <div className="h-24 w-24 lg:h-36 lg:w-36">
          <Icon style={{ display: "flex", width: "100%", height: "auto" }} />
        </div>
        <div className="font-pt-sans text-2xl font-bold">{label}</div>
      </div>
      <div className="max-w-[300px] text-center font-montserrat font-bold lg:max-w-[190px] lg:px-2 lg:pt-4">
        {sub}
      </div>
    </div>
  );
};

export const TwJoinUsTabs: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-11 self-center bg-white px-3 py-8 sm:max-w-[540px] md:max-w-[720px] md:py-16 lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <h1 className="text-center text-xl font-bold lg:mb-20 lg:max-w-3xl lg:text-4xl">
        Join us on the following journey and we will guide you through our
        process
      </h1>
      <div className="relative flex flex-col items-baseline justify-between gap-8 lg:w-full lg:flex-row lg:items-center lg:gap-0">
        <div className="absolute -top-20 left-3 hidden lg:flex">
          <HereIcon />
        </div>
        <div className="absolute -left-0 -top-3 flex lg:hidden">
          <HereIconMobile />
        </div>
        <IconWrapper
          alt="idea_icon"
          Icon={IdeaIcon}
          label="Idea"
          sub="You have an idea and want to expand your team to speed up development "
        />
        <div className="hidden lg:mb-44 lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper
          alt="plan_icon"
          Icon={PlanIcon}
          label="Plan"
          sub="We do our pilot projects, test performance and make our battle plan together"
        />
        <div className="hidden lg:mb-44 lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper
          alt="prototype_icon"
          Icon={PrototypeIcon}
          label="Prototype"
          sub="We start building and give you the first edition as soon as possible "
        />
        <div className="hidden lg:mb-44 lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper
          alt="validate_icon"
          Icon={ValidateIcon}
          label="Validate"
          sub="We monitor performance and adjust if needed. Repeat this cycle until you are happy with the results"
        />
        <div className="hidden lg:mb-44 lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper
          alt="product_icon"
          Icon={ProductIcon}
          label="Product"
          sub="You have a working product that is scaling quickly. Our team provides maintenance and support"
        />
      </div>
    </div>
  );
};
