import * as functions from "firebase-functions";
import { CallableContext } from "firebase-functions/lib/providers/https";
import acceptInvitation from "./acceptInvitation";

export default async function acceptInvitationHandler(
  {
    email,
    password,
    invitationId,
    sharedItemId,
  }: {
    email?: string;
    password?: string;
    invitationId: string;
    sharedItemId: string;
  },
  context: CallableContext,
) {
  if (!invitationId || !sharedItemId) {
    console.error("missing required field");
    throw new functions.https.HttpsError(
      "invalid-argument",
      "missing required fields",
    );
  }
  return acceptInvitation(
    invitationId,
    sharedItemId,
    email,
    password,
    context.auth?.uid,
  )
    .then(() => console.info("invitation accepted"))
    .catch(err => {
      console.error({ err }, "could not accept invitation");
      throw new functions.https.HttpsError(
        "unknown",
        "could not accept invitation",
      );
    });
}
