import React from "react";
import { LPSEO } from "../features/blog/components/LPSEO";
import TwOpenSource from "../features/twBlog/TwOpenSource";
import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { EnContact } from "../features/ge/components/EnContact";

export default function Opensource() {
  return (
    <TwLayout>
      <LPSEO />
      <TwOpenSource />
      <EnContact />
    </TwLayout>
  );
}
