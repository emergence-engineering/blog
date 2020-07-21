import PouchDB from "pouchdb";

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
  doc: object;
  version: number;
  updatedAt: string;
}

export interface ClientStep {
  collection: DBCollection.ClientSteps;
  pmViewId: string | number;
  status: StepStatus;
  steps: object[];
  version: number;
  docId: string;
}

export interface ServerStep {
  collection: DBCollection.ServerSteps;
  step: object;
  version: number;
  pmViewId: string | number;
  docId: string;
}

export const DocID = "ee";

export interface DBSI {
  serverDB: PouchDB.Database<{}>;
  clientDB1: PouchDB.Database<{}>;
  clientDB2: PouchDB.Database<{}>;
}
