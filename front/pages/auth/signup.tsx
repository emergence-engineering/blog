import { NextPage } from "next";
import React from "react";

import withRedirect from "../../features/auth/components/withRedirect";
import { UserStatus } from "../../features/auth/modules/types";
import SignupPageContainer from "../../features/auth/components/SignupPageContainer";

const SignupPage: NextPage<{}> = () => <SignupPageContainer />;

export default withRedirect({
  [UserStatus.signedIn]: "/dashboard",
})(SignupPage);
