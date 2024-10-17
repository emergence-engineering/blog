import {
  Document,
  Hocuspocus,
  onConnectPayload,
  onLoadDocumentPayload,
  onStoreDocumentPayload,
} from "@hocuspocus/server";
import { Database } from "@hocuspocus/extension-database";

const db: Record<string, Document> = {};

const startServer = async () => {
  const server = new Hocuspocus({
    port: 1234,
    // onConnect: (data: onConnectPayload)=> {
    //   console.log(data.documentName);
    //   console.log("Connected");
    //   return Promise.resolve(true)
    // },
    onStoreDocument(data) {
      console.log("store",data.documentName)
      db[data.documentName] = data.document;
      return Promise.resolve();
    },
    onLoadDocument(data) {
      console.log("load", data.documentName, Object.keys(db));
      return Promise.resolve(db[data.documentName] );
    }
    // extensions: [new Database({
    //   // Return a Promise to retrieve data …
    //   fetch: async ({ documentName }) => {
    //     console.log(documentName, "docName");
    //     return new Promise((resolve, reject) => {
    //       return db[documentName];
    //     });
    //   },
    //   // … and a Promise to store data:
    //   store: async ({ documentName, state }) => {
    //     console.log(documentName, "docName store", state);
    //     db[documentName] = state;
    //   }})
    // ]
  });
  server.listen()
};

startServer();