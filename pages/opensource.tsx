import React from "react";
import { LPSEO } from "../features/blog/components/LPSEO";
import TwOpenSource from "../features/twBlog/TwOpenSource";
import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";

export default function Opensource() {
  return (
    <TwLayout>
      <LPSEO />
      <TwOpenSource />
    </TwLayout>
  );
}
