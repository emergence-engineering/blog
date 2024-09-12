import React, { FC } from "react";
import { useRouter } from "next/router";

import { Button } from "./Button";
import { TwReferencesGrid } from "./TwReferencesGrid";

export const TwReferences: FC = () => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-center bg-black">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-2 py-12 text-left text-white lg:gap-16 lg:px-2 lg:py-16">
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
