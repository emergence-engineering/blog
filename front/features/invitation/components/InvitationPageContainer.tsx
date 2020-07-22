import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useFirebase } from "react-redux-firebase";

import { Root } from "../../../ui/components/Layout";
import { IconButton } from "../../../ui/components/IconButton";
import GoogleSVG from "../../../ui/assets/icons/google.svg";
import FacebookSVG from "../../../ui/assets/icons/facebook.svg";
import { Row } from "../../auth/components/SignUpPageContainer";
import { acceptInvitationWithProvider } from "../modules/utils";

// TODO: early termination is required, something should be displayed to the user
// when error happens...
export default function InvitationPageContainer() {
  const router = useRouter();
  const {
    query: { sharedItemId, invitationId },
  } = router;


  const firebase = useFirebase();

  const acceptWithGoogle = useCallback(async () => {
    if (!sharedItemId || !invitationId) {
      return; // TODO*
    }
    await firebase.login({ provider: "google", type: "popup" });
    await acceptInvitationWithProvider(
      sharedItemId as string,
      invitationId as string,
    );
  }, []);

  const acceptWithFacebook = useCallback(async () => {
    if (!sharedItemId || !invitationId) {
      return; // TODO*
    }
    await firebase.login({ provider: "facebook", type: "popup" });
    await acceptInvitationWithProvider(
      sharedItemId as string,
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
}
