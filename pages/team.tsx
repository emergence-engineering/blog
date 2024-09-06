import React from "react";

import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { TwTeamPage } from "../features/twTeamPage/TwTeamPage";
import { TeamSEO } from "../features/blog/components/TEAMSEO";

export default function Team() {
  return (
    <TwLayout>
      <TeamSEO />
      <TwTeamPage />
    </TwLayout>
  );
}
