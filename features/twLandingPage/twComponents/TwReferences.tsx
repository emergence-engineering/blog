import React, { FC } from "react";
import { useRouter } from "next/router";

import { Button } from "./Button";
import { TwReferencesGrid } from "./TwReferencesGrid";

export const TwReferences: FC = () => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-center bg-black">
      <div className="flex w-full flex-col items-center justify-center gap-12 py-12 text-left text-white sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:gap-16 lg:py-16 xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="font-left flex w-full justify-center text-4.5xl font-bold uppercase lg:justify-start lg:text-7.5xl">
          references
        </div>
        <TwReferencesGrid />
        <Button
          handleClick={() => {
            router.push("/references");
          }}
          label="SEE MORE REFERENCES"
          theme="secondary"
        />
      </div>
    </div>
  );
};
