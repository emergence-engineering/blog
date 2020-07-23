import { toast } from "react-toastify";

import { SharedItemId, InvitationStatus } from "../../../utils/database/types";
import { getServerTimestamp } from "../../../utils";
import { SharingValues } from "../components/SharingForm";

import { addInvite, getSharedItemTitleById } from "./database";

interface AddInvitationParams extends SharingValues {
  sharedItemId: SharedItemId;
}
export const addInvitation = async (invitation: AddInvitationParams) => {
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
