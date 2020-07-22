import { DBSI, PMDocument } from "./types";

export default async (
  DBS: DBSI | undefined,
  setDocListener: (listener: PouchDB.Core.Changes<{}>) => void,
  setServerDoc: (doc: PMDocument) => void,
  id: string,
  docListener?: PouchDB.Core.Changes<{}>,
  serverDoc?: PMDocument,
) => {
  if (!DBS) return;
  if (!docListener && !serverDoc) {
    const listener = DBS.clientDB1.changes({
      since: "now",
      live: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      include_docs: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      doc_ids: [id],
    });
    setDocListener(listener);
    listener.on("change", data => {
      // TODO: Don't listen to it after it is fetched
      setServerDoc(data.doc as any);
    });
  }
  if (docListener && serverDoc) {
    // TODO: remove
    // docListener.cancel();
  }
};
