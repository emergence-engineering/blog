import PouchDB from "pouchdb";

import { DBCollection, DBSI, DocID, PMDocument, DBSchema } from "./types";
import { initialDoc } from "./schema";
import { getTimestamp } from "./time";

const intializeDB = async (
  DBS: DBSI | undefined,
  setDBS: (dbs: DBSI) => void,
) => {
  let serverDB = new PouchDB<DBSchema>("server");
  let clientDB1 = new PouchDB<DBSchema>("client1");
  let clientDB2 = new PouchDB<DBSchema>("client2");

  // Cleaning old data
  await serverDB.destroy();
  await clientDB1.destroy();
  await clientDB2.destroy();

  serverDB = new PouchDB("server");
  clientDB1 = new PouchDB("client1");
  clientDB2 = new PouchDB("client2");

  clientDB1.sync(serverDB, { live: true });
  clientDB2.sync(serverDB, { live: true });

  serverDB.setMaxListeners(20);
  clientDB1.setMaxListeners(20);
  clientDB2.setMaxListeners(20);

  setDBS({
    serverDB,
    clientDB1,
    clientDB2,
  });
};

export const fillInitial = async (DBS?: DBSI) => {
  if (!DBS) return;
  const docRev = await DBS.serverDB.get(DocID).catch((e) => console.log(e));
  const doc: PMDocument = {
    _id: DocID,
    collection: DBCollection.PMDocument,
    doc: initialDoc,
    version: 0,
    updatedAt: getTimestamp(),
    // eslint-disable-next-line no-underscore-dangle
    ...(docRev ? { _rev: docRev._rev } : {}),
  };
  DBS.serverDB.put(doc);
};

export default intializeDB;
