type Timestamp = number;
export enum DBCollection {
  PMDocument = "PMDocument",
  ClientSteps = "ClientSteps",
  ServerSteps = "ServerSteps",
}

export enum StepStatus {
  NEW = "NEW",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export interface PMDocument {
  _id: string;
  _rev?: string;
  collection: DBCollection.PMDocument;
  doc: Record<any, any>;
  version: number;
  updatedAt: Timestamp;
}

export interface ClientStep {
  collection: DBCollection.ClientSteps;
  pmViewId: string | number;
  status: StepStatus;
  steps: Record<any, any>[];
  version: number;
  docId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ServerStep {
  collection: DBCollection.ServerSteps;
  step: Record<any, any>;
  version: number;
  pmViewId: string | number;
  docId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type DBSchema = ServerStep | ClientStep | PMDocument;

export const DocID = "ee";

export interface DBSI {
  serverDB: PouchDB.Database<DBSchema>;
  clientDB1: PouchDB.Database<DBSchema>;
  clientDB2: PouchDB.Database<DBSchema>;
}
