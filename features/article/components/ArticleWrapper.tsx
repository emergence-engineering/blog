import React, { PropsWithChildren } from "react";

import { TwLayout } from "../../twLandingPage/twComponents/TwLayout";
import { EnContact } from "../../ge/components/EnContact";

const ArticleWrapper = ({ children }: PropsWithChildren) => (
  <TwLayout>
    <div className="flex w-full flex-grow flex-col items-center bg-paper px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <section className="flex min-h-screen w-full max-w-3xl flex-grow flex-col justify-center py-8 text-justify">
        {children}
      </section>
    </div>
    <EnContact />
  </TwLayout>
);

export default ArticleWrapper;
