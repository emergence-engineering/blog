import admin from "firebase-admin";
// import * as firebase from "firebase";
// import { Timestamp } from "@firebase/firestore-types";

import sg from "../sendgrid";
import renderSharedItemInvitation from "./renderSharedItemInvitation";

import { getSharedItem, getUserByEmail, getUserProfile } from "./database";
import { getServerTimeStamp } from "../database";
import {
  CollectionNames,
  InvitationStatus,
  Invitation,
  Collaborator,
} from "../../../front/utils/database/types";

const db = admin.firestore();

export default async function handlePendingInvite(
  invite: Invitation & { id: string },
) {
  const batch = db.batch();

  const sharedItemRef = db.collection(CollectionNames.sharedItems).doc(invite.sharedItemId);
  const inviteRef = db
    .collection(CollectionNames.sharedItems)
    .doc(invite.sharedItemId)
    .collection(CollectionNames.invites)
    .doc(invite.id);

  const user = await getUserByEmail(invite.email);
  let link;
  if (user) {
    console.info("there is an existing user", invite.sharedItemId, invite.id);
    const sharedItem = await getSharedItem(invite.sharedItemId);
    const userProfile = await getUserProfile(user.uid);
    // if (!userProfile || !sharedItem) {
    if (!sharedItem) {
      console.log("sharedItem", userProfile, sharedItem);
      return;
    }
    const collaborator: Collaborator = {
      createdAt: getServerTimeStamp(),
      updatedAt: getServerTimeStamp(),
      userKey: user.uid,
      email: invite.email,
      role: invite.role,
      isActive: true,
    };
    batch.update(sharedItemRef, { [`collaborators.${user.uid}`]: collaborator });

    batch.update(inviteRef, {
      status: InvitationStatus.accepted,
      updatedAt: getServerTimeStamp(),
    });

    batch.update(db.collection(CollectionNames.users).doc(user.uid), {
      [`collab.${invite.sharedItemId}`]: true,
    });
    link = `http://localhost:3000/sharedItem/${invite.sharedItemId}`;
  } else {
    console.info("changing to sent", invite.sharedItemId, invite.id);
    batch.update(inviteRef, {
      updatedAt: getServerTimeStamp(),
      status: InvitationStatus.sent,
    });
    link = `http://localhost:3000/auth/invite/${invite.id}/${invite.sharedItemId}`;
  }
  const email: {
    to: string;
    from: string;
    subject: string;
    html: string;
  } = {
    to: invite.email,
    from: "noreply@sharedItembozz.com",
    subject: `Invitation to collaborate on ${invite.sharedItemTitle}`,
    html: renderSharedItemInvitation({
      email: invite.email,
      sharedItemTitle: invite.sharedItemTitle,
      link,
    }),
  };
  console.info(invite.email);
  if (email) {
    await sg.send(email);
  }

  await batch.commit();
  console.info("batch commited");
}
