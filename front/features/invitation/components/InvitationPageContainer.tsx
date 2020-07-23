import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useFirebase } from "react-redux-firebase";

import { Root } from "../../../ui/components/Layout";
import { IconButton } from "../../../ui/components/IconButton";
import GoogleSVG from "../../../ui/assets/icons/google.svg";
import FacebookSVG from "../../../ui/assets/icons/facebook.svg";
import { Row } from "../../auth/components/SignupPageContainer";
import { acceptInvitationWithProvider } from "../modules/utils";

export default () => {
  const router = useRouter();
  const {
    query: { fridgeId, invitationId },
  } = router;

  if (!fridgeId || !invitationId) {
    return null; // TODO: something with better ux, maybe loading bar...
  }

  const firebase = useFirebase();

  const acceptWithGoogle = useCallback(async () => {
    await firebase.login({ provider: "google", type: "popup" });
    await acceptInvitationWithProvider(
      fridgeId as string,
      invitationId as string,
    );
  }, []);

  const acceptWithFacebook = useCallback(async () => {
    await firebase.login({ provider: "facebook", type: "popup" });
    await acceptInvitationWithProvider(
      fridgeId as string,
      invitationId as string,
    );
  }, []);

  return (
    <Root>
      <Row>
        <IconButton width="100%" src={GoogleSVG} handleClick={acceptWithGoogle}>
          Sign up with Google
        </IconButton>
      </Row>
      <Row>
        <IconButton
          width="100%"
          src={FacebookSVG}
          handleClick={acceptWithFacebook}
        >
          Sign up with Facebook
        </IconButton>
      </Row>
    </Root>
  );
};
