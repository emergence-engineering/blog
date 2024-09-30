import { PropsWithChildren } from "react";
import { TwFooter } from "./TwFooter";

import { TwHeader } from "./TwHeader";

export const TwLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center bg-black">
        <div className="flex w-full items-center justify-center">
          <TwHeader />
        </div>
        <div className="flex w-full flex-grow flex-col items-center justify-center overflow-scroll bg-white">
          {children}
        </div>
      </div>
      <TwFooter />
    </div>
  );
};
