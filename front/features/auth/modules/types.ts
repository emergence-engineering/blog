import { Timestamp } from "@firebase/firestore-types";

export enum UserStatus {
  none = "none",
  signedIn = "signedIn",
  full = "full",
}

export interface UserProfile {
  uid: string;
  createdAt: Timestamp;
  email: string;
  displayName: string;
}
