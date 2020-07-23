import * as functions from "firebase-functions";

import acceptInvitationHandler from "../acceptInvitation/acceptInvitationHandler";

export default functions.https.onCall(acceptInvitationHandler);
