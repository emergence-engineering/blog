import React, { FunctionComponent } from "react";
import { TwLandingPage } from "../features/twLandingPage/twComponents/TwLandingPage";
import { LPSEO } from "../features/blog/components/LPSEO";
import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";

const Index: FunctionComponent = () => {
  return (
    <TwLayout>
      <LPSEO />
      <TwLandingPage />
    </TwLayout>
  );
};

export default Index;
