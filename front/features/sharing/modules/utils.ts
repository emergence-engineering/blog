import { toast } from "react-toastify";

import { SharedItemId, InvitationStatus } from "../../../utils/database/types";
import {
  ItemId,
  InvitationStatus,
  CollaboratorRole,
} from "../../../utils/database/types";
import { getServerTimestamp } from "../../../utils";

import { addInvite, getSharedItemTitleById } from "./database";

interface AddInvitationParams extends SharingValues {
  email: string;
  role: CollaboratorRole;
  sharedItemId: ItemId;
}

export const addInvitation = async (
  invitation: AddInvitationParams,
): Promise<void> => {
  try {
    const { name } = await getSharedItemTitleById(invitation.sharedItemId);
    await addInvite({
      ...invitation,
      sharedItemTitle: name,
      createdAt: getServerTimestamp(),
      updatedAt: getServerTimestamp(),
      status: InvitationStatus.new,
    });
    toast.success("Invitation sent.");
  } catch (err) {
    toast.error(err.message);
  }
};
