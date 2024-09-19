import { FC } from "react";
import Image from "next/image";

export const TwFooter: FC = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-stone-800 py-4 text-white">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-4 px-3 py-3 text-center md:flex-row md:justify-between md:gap-0 lg:px-2 lg:py-2">
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
