import React from "react";

import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { TwTeamPage } from "../features/twTeamPage/TwTeamPage";
import { TeamSEO } from "../features/blog/components/TEAMSEO";
import { TwContact } from "../features/twLandingPage/twComponents/TwContact";

export default function Team() {
  return (
    <TwLayout>
      <TeamSEO />
      <TwTeamPage />
      <TwContact />
    </TwLayout>
  );
}
