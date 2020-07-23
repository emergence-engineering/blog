import { toast } from "react-toastify";

import {
  ItemId,
  InvitationStatus,
  CollaboratorRole,
} from "../../../utils/database/types";
import { getServerTimestamp } from "../../../utils";

import { addInvite, getSharedItemById } from "./database";

interface AddInvitationParams {
  email: string;
  role: CollaboratorRole;
  sharedItemId: ItemId;
}

export const addInvitation = async (
  invitation: AddInvitationParams,
): Promise<void> => {
  try {
    const { name } = await getSharedItemById(invitation.sharedItemId);
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
