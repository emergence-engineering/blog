import { Timestamp } from "@firebase/firestore-types";

export type Id = string;
export type UserId = string;
export type SharedItemId = string;
export type ItemId = string;
export type FieldId = string;
export type ItemField =
  | NumberField
  | DateField
  | TextField
  | SearchField
  | DisplayField
  | CategorySelectionField;
export type CollaboratorId = UserId;

export type SharedItemCollection = Record<SharedItemId, SharedItem>;

export interface User {
  uid: UserId;
  email: string;
  avatar: string;
  userName: string;
  createdAt: Timestamp;
}

export interface SharedItem {
  owner: UserId;
  name: string;
  itemOrder: string[];
  isPublicReadable: boolean;
  isPublicWriteable: boolean;
  isDeleted: boolean;
  collaborators: Record<CollaboratorId, Collaborator>;
  createdAt: Timestamp;
}

export type fieldId = string;
export type formatId = string;

export type formats = Record<formatId, Format>;

export interface Format {
  name: string;
  decimal: 0 | 1 | 2;
}

export interface AddNewRecord {
  name: string;
}

export interface SharedItemItem {
  sharedItemId: SharedItemId;
  owner: UserId;
  fields: Record<FieldId, ItemField>;
  fieldOrder: string[];
  createdAt: Timestamp;
  isDeleted: boolean;
  isCompleted: boolean;
}

export interface Collaborator {
  role: CollaboratorRole;
  userKey: UserId;
  email: string;
  isActive: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

interface FieldBase {
  fieldId: fieldId;
  type: FieldTypes;
  title: string;
}

export interface NumberField extends FieldBase {
  type: FieldTypes.number;
  amount: number;
  unit: Unit | undefined;
}

export interface DateField extends FieldBase {
  type: FieldTypes.date;
  date: Timestamp;
}

export interface TextField extends FieldBase {
  type: FieldTypes.text;
  text: string;
}

export interface SearchField extends FieldBase {
  type: FieldTypes.search;
}

export interface DisplayField extends FieldBase {
  type: FieldTypes.textDisplay;
  onClick?: () => void;
}

export interface CategorySelectionField extends FieldBase {
  type: FieldTypes.selection;
  value: string;
  dropdownContent: ingredientCategories | ingredients | unitList | formats;
  handleSelectionChange?: (id: string, fieldId: string) => void;
  addCustom?: (fieldId: FieldId, customValue: string) => void;
}

export enum InvitationStatus {
  new = "new",
  sent = "sent",
  accepted = "accepted",
}

export interface Invitation {
  email: string;
  sharedItemTitle: string;
  role: CollaboratorRole;
  sharedItemId: SharedItemId;
  status: InvitationStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export enum FieldTypes {
  number = "number",
  date = "date",
  text = "text",
  search = "search",
  textDisplay = "textDisplay",
  selection = "selection",
}

export enum CollaboratorRole {
  Edit = "Edit",
  View = "View",
}

/**
 * Create sharing based on SharedItem and exampleSharedItems
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SharedItem {
  collaborators: Collaborator[];
}

export enum CollectionNames {
  sharedItems = "sharedItems",
  users = "users",
  invites = "invites",
}
