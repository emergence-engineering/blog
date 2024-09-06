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
}

const IconWrapper: FC<IconWrapperProps> = ({ label, alt, Icon }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-2 lg:flex-col lg:gap-0">
      <div className="w-24 lg:w-36">
        <Icon style={{ display: "flex", width: "100%", height: "auto" }} />
      </div>
      <div className="font-pt-sans text-2xl font-bold">{label}</div>
    </div>
  );
};

export const TwJoinUsTabs: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-11 bg-white p-8 md:p-16">
      <h1 className="text-center font-pt-sans-narrow text-xl font-bold lg:mb-20 lg:max-w-3xl lg:text-4xl">
        Join us on a journey, and we will guide you through our process,
        developed over years.
      </h1>
      <div className="relative flex flex-col items-baseline justify-center gap-4 lg:flex-row lg:items-center">
        <div className="absolute -top-20 left-3 hidden lg:flex">
          <HereIcon />
        </div>
        <div className="absolute -right-8 -top-1 flex lg:hidden">
          <HereIconMobile />
        </div>
        <IconWrapper alt="idea_icon" Icon={IdeaIcon} label="Idea" />
        <div className="hidden lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper alt="plan_icon" Icon={PlanIcon} label="Plan" />
        <div className="hidden lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper
          alt="prototype_icon"
          Icon={PrototypeIcon}
          label="Prototype"
        />
        <div className="hidden lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper alt="validate_icon" Icon={ValidateIcon} label="Validate" />
        <div className="hidden lg:flex">
          <DividerIcon />
        </div>
        <IconWrapper alt="product_icon" Icon={ProductIcon} label="Product" />
      </div>
    </div>
  );
};
