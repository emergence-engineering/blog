import * as functions from "firebase-functions";

import listenPendingInvitesHandler from "../listenPendingInvites/listenPendingInvitesHandler";
import { CollectionNames } from "../../../front/utils/database/types";

export default functions.firestore
  .document(
    `${CollectionNames.sharedItems}/{sharedItemId}/${CollectionNames.invites}/{id}`,
  )
  .onCreate(listenPendingInvitesHandler);
