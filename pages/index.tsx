import React, { FunctionComponent } from "react";
import { TwLandingPage } from "../features/twLandingPage/twComponents/TwLandingPage";
import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { LPSEO } from "../features/blog/components/LPSEO";

const Index: FunctionComponent = () => {
  return (
    <TwLayout>
      <LPSEO />
      <TwLandingPage />
    </TwLayout>
  );
};

export default Index;
