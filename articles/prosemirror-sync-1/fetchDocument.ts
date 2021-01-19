import { DBCollection, DBSI, PMDocument, DBSchema } from "./types";

export default async function fetchDocument(
  DBS: DBSI | undefined,
  setDocListener: (listener: PouchDB.Core.Changes<DBSchema>) => void,
  setServerDoc: (doc: PMDocument) => void,
  id: string,
  docListener?: PouchDB.Core.Changes<DBSchema>,
  serverDoc?: PMDocument,
) {
  if (!DBS) return;
  if (!docListener && !serverDoc) {
    const listener = DBS.clientDB1.changes({
      since: "now",
      live: true,
      include_docs: true,
      doc_ids: [id],
    });
    setDocListener(listener);
    listener.on("change", (data) => {
      // TODO: Don't listen to it after it is fetched
      data.doc?.collection === DBCollection.PMDocument &&
        setServerDoc(data.doc);
    });
  }
  if (docListener && serverDoc) {
    // In a real time environment the doc should only be fetched once, thus the listener should be cancelled
    // docListener.cancel();
  }
}
