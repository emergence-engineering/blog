import * as firebase from "firebase/app";
import Router from "next/router";
import { toast } from "react-toastify";

import { createFunction } from "../../../utils";

export const acceptInvitationWithEmail = async (
  email: string,
  password: string,
  invitationId: string,
): Promise<void> => {
  try {
    const acceptInvitationCallable = createFunction<
      { email?: string; password?: string; invitationId: string },
      void
    >("acceptInvitation");
    await acceptInvitationCallable({ email, password, invitationId });
    await firebase.auth().signInWithEmailAndPassword(email, password);
    toast.success("Invitation accepted.");
  } catch (err) {
    toast.error(err.message);
  }
};

export const acceptInvitationWithProvider = async (
  sharedItemId: string,
  invitationId: string,
): Promise<void> => {
  try {
    const acceptInvitationCallable = createFunction<
      {
        email?: string;
        password?: string;
        invitationId: string;
        sharedItemId: string;
      },
      void
    >("acceptInvitation");
    await acceptInvitationCallable({ invitationId, sharedItemId });
    Router.push(`/sharedItem/${sharedItemId}`);
    toast.success("Invitation accepted.");
  } catch (err) {
    toast.error(err.message);
  }
};
