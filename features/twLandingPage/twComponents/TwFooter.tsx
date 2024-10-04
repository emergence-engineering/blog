import { FC } from "react";
import Image from "next/image";

export const TwFooter: FC = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-stone-800 py-4 text-white">
      <div className="flex w-full flex-col items-center gap-4 px-3 py-3 text-center sm:max-w-[540px] md:max-w-[720px] md:flex-row md:justify-between md:gap-0 lg:max-w-[960px] lg:py-2 xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <a
          href="https://stripe.com"
          className="relative aspect-stripe-tag h-[32px]"
        >
          <Image
            src="/stripe-colored-tag.png"
            alt="Stripe Verified Partner"
            fill
          />
        </a>
        <div className="flex font-montserrat">
          © Copyright 2024, Emergence Engineering. All rights reserved
        </div>
      </div>
    </div>
  );
};
