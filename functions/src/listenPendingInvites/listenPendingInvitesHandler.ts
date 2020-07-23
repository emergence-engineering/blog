import * as functions from "firebase-functions";
import handlePendingInvite from "./handlePendingInvite";
import { Invitation } from "../../../front/utils/database/types";

export default function handlePendingInviteHandler(
  snapshot: functions.firestore.DocumentSnapshot,
  context: functions.EventContext,
) {
  const invite = snapshot.data() as Invitation;
  const { status } = invite;
  if (!status) {
    return;
  }
  const pendingInvite = { ...invite, id: snapshot.id };

  return handlePendingInvite(pendingInvite)
    .then(() => console.info("processed invite", context.params.id))
    .catch(err => {
      console.error({ err }, err.message);
    });
}
