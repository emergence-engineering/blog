import React from "react";
import dynamic from "next/dynamic";

import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import { ArticleHeadline } from "../../features/article/components/ArticleHeadline";
import SalesBox from "../../features/article/components/SalesBox";
import Markdown from "../../features/article/components/Markdown";

const EditorsDynamic = dynamic(
  () => import("../../articles/prosemirror-sync-1"),
  { ssr: false },
);

export const article2Metadata: ArticleIntro = {
  title: "Collaborative text editor with ProseMirror and a syncing database",
  author: "Viktor & Balazs",
  authorLink: null,
  introText: /* language=md */ `
 With the collaborative editing functionality in ProseMirror it's possible to create documents that are
editable by multiple users at the same time. Although the **[ prosemirror-collab ]** module is not very hard to use, 
a communication layer is necessary for the clients to receive new steps to update their local document, keeping them in sync.
This is usually done with WebSockets, which adds another layer in the stack where bugs can hide.
This article shows a path to get rid of that layer by using a well-tested layer in the form of a syncing database.
In this article PouchDB/CouchDB is used, so the emulated "server" can also live in the browser, thus making the example simpler.
This approach has also been tested with Firestore.
 
  `,
  postId: "prosemirror-sync-1",
  timestamp: 1595947851782,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-sync-1",
};

const tldrContent = /* language=md */ `
# TLDR

* We introduce a method to create a web based collaborative editor based on ProseMirror
* We use PouchDB (CouchDB) to abstract away all the hassle that comes with directly managing WebSockets
* Any database with real time syncing functionality can be used
* For the interactive demo we used React and TypeScript
`;

const MD0 = /* language=md */ `
# What's this about?

With the collaborative editing functionality in ProseMirror it's possible to create documents that are
editable by multiple users at the same time. Although the **[ prosemirror-collab ](https://prosemirror.net/docs/guide/#collab)** module is not very hard to use, 
a communication layer is necessary for the clients to receive new steps to update their local document, keeping them in sync.
This is usually done with WebSockets, which adds another layer in the stack where bugs can hide.
This article shows a path to get rid of that layer by using a well-tested layer in the form as a syncing database.
In this article PouchDB/CouchDB is used, so the emulated "server" can also live in the browser, thus making the example simpler.
This approach has also been tested with Firestore.

[The code for this post is here](https://gitlab.com/emergence-engineering/blog/-/tree/master/articles/prosemirror-sync-1)
`;

const demo = /* language=md */ `
# Demo
Try typing in any of the editors below!

### Client steps
 You can follow the steps (changes) that are emitted from the active editor in the
*ClientSteps list* table. Here you can see all the steps that are being sent from the clients.

### Server steps
The *ServerSteps list* table displays the history of the valid conflict free steps ( changes ).
Each of these steps has a version just like git commits.

### Server document
The JSON object below displays the latest state of the document on the server.
`;

const MD1 = /* language=md */ `
# Prerequisites
## ProseMirror
- *ProseMirror*: a framework / toolkit with which one can create custom text editors
- *collaborative editor*: A text editor where multiple people can edit the same document, for example, Google docs
- *ProseMirror document / doc*: An object which describes the contents of a rich text document 
- *step*: an object which describes the necessary information to update a document ( like add/delete a letter from a given
position in a document.
- *ProseMirror document version*: A version of the document starts from 0 and incremented every time a new step is applied.

## Sync database
- *Sync database*: A database which is capable of automatically replicating the state of a remote database, so they both contain the same content eventually. For example CouchDB, Google Firestore etc... 
- *PouchDB*: A JS implementation of the CouchDB protocol. This means that it can run in the browser, and sync up to another database which
implements the CouchDB protocol.
- *listener*: A callback which is called every time the there is new data in the database
- *collection*: A collection field is added to every entry in the database. This field helps marks items that belong in the same category. A collection is somewhat analogous to a table in relational databases.

# How everything comes together

In some cases of client-server communications, one can use the syncing functionality of a database to send data from a client
to the server by:
- adding elements to the database
- listening to added elements on the server-side, and when the processing is finished then either
    - Add a new element to the database
    - Modify the added element by the client
- listening to the changes made by the server on the client-side

This is very similar to a REST API, but the server now can push data to the clients directly. Of course
this can be done with just WebSockets ( and that's what behind the implementation of most sync databases ), but that's usually
a quite complex hard-to-test part, and using a well-tested database has some obvious benefits in that sense. 
Our implementations root file is [ index.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/index.tsx) in the repo linked earlier.

A very good explanation of the collaborative algorithm used by ProseMirror can be found [here](https://prosemirror.net/docs/guide/#collab).

In this demo there are two ProseMirror editors and each of them has a dedicated PouchDB instance.
These databases sync up to a third database, which belongs to a "server". If client A is updated, then the server
is updated which ideally propagates client B.

## The database layer

As we mentioned above we use PouchDB for this demo which is a JavaScript implementation of the CouchDB protocol.
There are three collections:
\`\`\`typescript
enum DBCollection {
  PMDocument = "PMDocument",
  ClientSteps = "ClientSteps",
  ServerSteps = "ServerSteps",
}
\`\`\`

**1. PMDocument**: stores the ProseMirror document
\`\`\`typescript
interface PMDocument {
  _id: string;
  _rev?: string;
  collection: DBCollection.PMDocument;
  doc: object;
  version: number;
  updatedAt: Timestamp;
}
\`\`\`

**2. ClientSteps**: stores the steps coming from the clients
\`\`\`typescript
export interface ClientStep {
  collection: DBCollection.ClientSteps;
  pmViewId: string | number;
  status: StepStatus;
  steps: object[];
  version: number;
  docId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
\`\`\`


**3. ServerSteps**: stores the steps accepted by the server 

\`\`\`typescript
interface ServerStep {
  collection: DBCollection.ServerSteps;
  step: object;
  version: number;
  pmViewId: string | number;
  docId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
  \`\`\`

## Data flow on the server
1. The server listens to new documents in **ClientSteps**
\`\`\`typescript
  //listening to ClientSteps
  DBS.serverDB
    .changes({
      since: "now",
      live: true,
      filter: data =>
        data.collection === DBCollection.ClientSteps &&
        data.status === StepStatus.NEW,
    })
\`\`\`
2. If the version of the steps is correct the client is synced up to the server
\`\`\`typescript
        if (clientStep?.collection !== DBCollection.ClientSteps) {
          return;
        }
        const syncDoc = await DBS.serverDB.get(clientStep.docId);
        if (
          clientStep.version !== syncDoc.version ||
          syncDoc.collection !== DBCollection.PMDocument
        ) {
          // Set status to StepStatus.REJECTED
          await syncClientStep(DBS, clientStep, StepStatus.REJECTED);
          return;
        }
\`\`\`
3. And finally: the server updates the ProseMirror document stored in **PMDocument**
( referenced by the incoming step ) and saves the accepted steps to **ServerSteps**

\`\`\`typescript
        const newDoc: PMDocument = {
          ...syncDoc,
          version: newVersion,
          doc: doc.toJSON(),
          _rev: syncDoc._rev,
          updatedAt: getTimestamp(),
        };
        await DBS.serverDB
          .put(newDoc)
          .then(() => DBS.serverDB.bulkDocs(serverSteps))
          .then(() => syncClientStep(DBS, clientStep, StepStatus.ACCEPTED));
\`\`\`
    
The server functionality is implemented in [ processSteps.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/processSteps.ts)

## Data flow on the clients

### Sending new steps
The function in [ postSteps.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/postNewSteps.ts) is called by ProseMirror whenever there is an incoming ProseMirror transaction ( either the user did something in the editor, or the server
sent new steps coming from another user ). In that function, sendable steps are calculated by the **prosemirror-collab** module, and if there's any then they are written to the database as **ClientSteps**. The ProseMirror view is also updated.

\`\`\`typescript
  import { sendableSteps } from "prosemirror-collab";
\`\`\`

A ProseMirror editor state is created from the transaction:
\`\`\`typescript
  //body of the postNewSteps function
  const newState = view.state.apply(tr); // transaction
\`\`\`

This newly created state is then passed into the *sendableSteps* function provided 
by the **[ prosemirror-collab ](https://prosemirror.net/docs/guide/#collab)** module:

\`\`\`typescript
  //body of the postNewSteps function
  const sendable = sendableSteps(newState);
  if (sendable) {
    const timestamp = getTimestamp();
    const newStep: ClientStep = {
      steps: sendable.steps.map(step => step.toJSON()),
      version: sendable.version,
      status: StepStatus.NEW,
      collection: DBCollection.ClientSteps,
      docId: DocID,
      pmViewId: sendable.clientID,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    DB.post(newStep);
  }
  setPmState(newState);
\`\`\`

### Receiving new steps

The [ fetchNewStepsClient.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/fetchNewStepsClient.ts) contains a function which is used in a React **useEffect** in [ index.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/index.tsx), and gets reloaded every time the version of the document is updated.
This is necessary since this function only listens to the step in **ServerSteps** which has the version that updates the current document. If there is a new step then
new ProseMirror transaction is sent to the ProseMirror view, which contains all the necessary information to both updates the view and the collab state.

\`\`\`typescript
  listener.on("change", data => {
    const serverStep = data.doc;
    if (serverStep?.collection !== DBCollection.ServerSteps) {
      return;
    }
    getVersion(pmView.state) === serverStep.version &&
      pmView.dispatch(
        receiveTransaction(
          pmView.state,
          [Step.fromJSON(mySchema, serverStep.step)],
          [serverStep.pmViewId],
        ),
      );
  });
\`\`\`

# Improvements, challenges and everything else

This example runs in just a single browser instance, but if one moves the server-side code ( mostly [ processSteps.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/processSteps.ts) and some parts of **[ initializeDB.ts ](https://gitlab.com/emergence-engineering/blog/-/blob/master/articles/prosemirror-sync-1/initializeDB.ts )** ), removes one
of the editors, and changes the remote DB location on the client-side, then it will work as a fully functional collaborative editor.
Offline functionality is also possible with the same structure ( with some added code ), but keep in mind that ProseMirror's collaborative feature is not meant for
offline use and it is possible to lose some information ( for example if a user typed into an existing paragraph when offline, and then the paragraph is deleted then the information is lost ), 
but in general, it works great.`;

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article2Metadata.url}
        title={article2Metadata.title}
        description={article2Metadata.introText}
        imgSrc={article2Metadata.imgSrc}
      />
      <ArticleHeadline tldr={tldrContent} {...article2Metadata} />
      <Markdown source={MD0} />
      <Markdown source={demo} />
      <EditorsDynamic />
      <Markdown source={MD1} />
      <SalesBox />
    </ArticleWrapper>
  );
}
