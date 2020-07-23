import { toast } from "react-toastify";

import { FridgeId, InvitationStatus } from "../../../utils/database/types";
import { getServerTimestamp } from "../../../utils";
import { SharingValues } from "../components/SharingForm";

import { addInvite, getFridgeTitleById } from "./database";

interface AddInvitationParams extends SharingValues {
  fridgeId: FridgeId;
}
export const addInvitation = async (invitation: AddInvitationParams) => {
  try {
    const { name } = await getFridgeTitleById(invitation.fridgeId);
    await addInvite({
      ...invitation,
      fridgeTitle: name,
      createdAt: getServerTimestamp(),
      updatedAt: getServerTimestamp(),
      status: InvitationStatus.new,
    });
    toast.success("Invitation sent.");
  } catch (err) {
    toast.error(err.message);
  }
};
