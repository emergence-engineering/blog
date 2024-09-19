import React, { PropsWithChildren } from "react";

import { TwLayout } from "../../twLandingPage/twComponents/TwLayout";
import { TwContact } from "../../twLandingPage/twComponents/TwContact";

const ArticleWrapper = ({ children }: PropsWithChildren) => (
  <TwLayout>
    <div className="flex w-full flex-grow flex-col items-center bg-white md:px-2">
      <section className="flex min-h-screen w-full max-w-3xl flex-grow flex-col justify-center py-8 text-justify">
        {children}
      </section>
    </div>
    <TwContact />
  </TwLayout>
);

export default ArticleWrapper;
