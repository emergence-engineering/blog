import { Timestamp } from "@firebase/firestore-types";

export type Id = string; // TODO: export this maybe to utils -> types
export type CategoryId = Id; // TODO: categoryId vs CategoryId
export type IngredientId = Id;
export type UserId = string;
export type FridgeId = string;
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

export type FridgeCollection = Record<FridgeId, Fridge>;

export interface User {
  uid: UserId;
  email: string;
  avatar: string;
  userName: string;
  createdAt: Timestamp;
}

export type CustomCategories = Record<CategoryId, CustomIngredientCategory>;

export interface Fridge {
  owner: UserId;
  name: string;
  itemOrder: string[];
  isPublicReadable: boolean;
  isPublicWriteable: boolean;
  isDeleted: boolean;
  collaborators: Record<CollaboratorId, Collaborator>;
  createdAt: Timestamp;
}

export type ingredientId = string;
export type categoryId = string;
export type unitId = string;
export type fieldId = string;
export type formatId = string;

export type IngredientCategories = Record<CategoryId, IngredientCategory>;
export type Ingredients = Record<IngredientId, Ingredient>;

export interface Ingredient {
  categoryId: CategoryId;
  id: Id;
  name: string;
  createdAt: Timestamp;
  owner?: UserId;
  unit: Unit;
  amount: number;
  isDeleted: boolean;
}

export interface IngredientCategory {
  id: CategoryId;
  name: string;
  ingredients: Ingredients;
}

/* The following two types are used for creating custom ingredient categories
 * (=user defined). We omit ingredients from user defined categories since they
 * are already stored in a separate record.
 * */
export type CustomIngredientCategory = Pick<IngredientCategory, "id" | "name">;

// TODO: remove the redundant ones from the following:
export type ingredientCategories = Record<categoryId, IngredientCategory>;
export type ingredients = Record<ingredientId, Ingredient>;
export type unitList = Record<unitId, Unit>;
export type formats = Record<formatId, Format>;

export interface Format {
  name: string;
  decimal: 0 | 1 | 2;
}

export interface Unit {
  unitId?: unitId;
  name: string;
  maxValue: number;
  decimal: 0 | 1 | 2;
}

// TODO: what if category is deleted? -> Ingredient & IngredientCategory is only
// used as a template to create a FridgeItem -> verify if there are items in that
// category
export interface Ingredient {
  categoryId: categoryId;
  name: string;
  createdAt: Timestamp;
  owner?: UserId;
  unit: Unit;
  amount: number;
  isDeleted: boolean;
}

export interface AddNewRecord {
  name: string;
}

export interface FridgeItem {
  fridgeId: FridgeId;
  owner: UserId;
  ingredient: Ingredient;
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
  fridgeTitle: string;
  role: CollaboratorRole;
  fridgeId: FridgeId;
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

export enum UnitEnum {
  gramm = "gramm",
  kilogramm = "kilogramm",
  liter = "liter",
  piece = "piece",
}

export enum CollectionNames {
  fridges = "fridges",
  users = "users",
  invites = "invites",
}
