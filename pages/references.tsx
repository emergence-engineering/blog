import React from "react";

import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { LPSEO } from "../features/blog/components/LPSEO";
import { TwOurReferences } from "../features/twReferencesPage/TwOurReferences";
import { TwWhatTheySaid } from "../features/twReferencesPage/TwWhatTheySaid";
import { EnContact } from "../features/ge/components/EnContact";

export default function CaseStudies() {
  return (
    <TwLayout>
      <LPSEO />
      <TwOurReferences />
      <TwWhatTheySaid />
      <EnContact />
    </TwLayout>
  );
}
