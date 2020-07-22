import { NextPage } from "next";
import React from "react";

import ResetPasswordPageContainer from "../../features/resetPassword/ResetPasswordPageContainer";

interface ResetPasswordPageProps {
  code: string | undefined;
}

const ResetPasswordPage: NextPage<ResetPasswordPageProps> = ({ code }) => (
  <ResetPasswordPageContainer code={code} />
);

ResetPasswordPage.getInitialProps = async (ctx) => {
  const code = ctx.query.oobCode as string | undefined;
  return { code };
};

export default ResetPasswordPage;
