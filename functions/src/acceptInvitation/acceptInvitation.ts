import admin from "firebase-admin";
import { getSharedItem, getInvitation } from "./database";
import {
  Collaborator,
  InvitationStatus,
} from "../../../front/utils/database/types";
import { getServerTimeStamp } from "../database";

const db = admin.firestore();

export default async function(
  invitationId: string,
  sharedItemId: string,
  email?: string,
  password?: string,
  uid?: string,
) {
  console.info({ invitationId, sharedItemId });

  const invite = await getInvitation(invitationId, sharedItemId);

  if (!invite || invite.status !== "sent") {
    throw {
      type: "acceptInvite-invitation-not-valid",
      message: "Invalid invitation.",
    };
  }
  let user = null;
  if (uid) {
    console.info("uid", uid);
    user = await admin.auth().getUser(uid);
    console.info("got user", user);
  } else if (email && password) {
    console.info("no uid", email, password);
    user = await admin.auth().createUser({ email, password });
  }
  if (!user) {
    throw {
      type: "acceptInvite-user-not-found",
      message: "User not found.",
    };
  }
  const sharedItem = await getSharedItem(sharedItemId);
  console.info("sharedItem", sharedItem);
  if (!sharedItem) {
    throw {
      type: "acceptInvite-sharedItem-not-found",
      message: "SharedItem not found.",
    };
  }
  const collaborator: Collaborator = {
    createdAt: getServerTimeStamp(),
    updatedAt: getServerTimeStamp(),
    userKey: user.uid,
    email: invite.email,
    role: invite.role,
    isActive: true,
  };
  const batch = db.batch();

  const sharedItemRef = db.collection("sharedItems").doc(sharedItemId);
  const inviteRef = db
    .collection("sharedItems")
    .doc(sharedItemId)
    .collection("invites")
    .doc(invitationId);
  console.log("refs");
  batch.update(sharedItemRef, {
    [`collaborators.${user.uid}`]: collaborator,
    updatedAt: getServerTimeStamp(),
  });

  batch.update(inviteRef, {
    status: InvitationStatus.accepted,
    updatedAt: getServerTimeStamp(),
  });

  batch.update(db.collection("users").doc(user.uid), {
    [`collab.${sharedItemId}`]: true,
  });
  await batch.commit();
}
