import { PropsWithChildren } from "react";
import { TwFooter } from "./TwFooter";

import { TwHeader } from "./TwHeader";

export const TwLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center bg-black">
        <div className="flex w-full items-center justify-center bg-black text-amber-50">
          <TwHeader />
        </div>
        <div className="flex w-full flex-grow flex-col justify-center overflow-scroll">
          {children}
        </div>
      </div>
      <TwFooter />
    </div>
  );
};
