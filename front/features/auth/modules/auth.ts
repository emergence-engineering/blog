import { Timestamp } from "@firebase/firestore-types";

export enum UserStatus {
  none = "none",
  signedIn = "signedIn",
}

export interface UserProfile {
  uid: string;
  createdAt: Timestamp;
  email: string;
  displayName: string;
}
