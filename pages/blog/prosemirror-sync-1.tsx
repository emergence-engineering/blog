import React from "react";
import dynamic from "next/dynamic";

import ArticleShareOgTags from "../../modules/article/components/ArticleShareOgTags";
import { ArticleIntro } from "../../types/article";
// import Editors from "../../articles/prosemirror-sync-1";
import ArticleWrapper from "../../modules/article/components/ArticleWrapper";
import Disqus from "../../modules/disqus/Disqus";
import MarkDown from "../../modules/article/components/Markdown";

const EditorsDynamic = dynamic(
  () => import("../../articles/prosemirror-sync-1"),
  { ssr: false },
);

export const article2Metadata: ArticleIntro = {
  title: "Collaborative text editor with ProseMirror and a sync database",
  author: "Viktor & Balazs",
  authorLink: null,
  introText: /* language=md */ `
 With the collaborative editing functionality in ProseMirror it's possible to create documents that are
editable by multiple users at the same time. Although the **prosemirror-collab** module is not very hard to use, 
a communication layer is necessary for the clients to receive new steps to update their local document, keeping them in sync.
This is usually done with WebSockets, which adds another layer in the stack where bugs can hide.
This article shows a path to get rid of that layer by using a well-tested layer in the form as a syncing database.
In this article PouchDB/CouchDB is used, so the emulated "server" can also live in the browser, thus making the example simpler.
This approach has also been tested with Firestore.
 
  `,
  postId: "prosemirror-sync-1",
  timestamp: 1595947851782,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-sync-1",
};

const MD0 = /* language=md */ `# Collaborative text editor with ProseMirror and a sync database

Length: 15 minutes.

# What's this about?

With the collaborative editing functionality in ProseMirror it's possible to create documents that are
editable by multiple users at the same time. Although the **prosemirror-collab** module is not very hard to use, 
a communication layer is necessary for the clients to receive new steps to update their local document, keeping them in sync.
This is usually done with WebSockets, which adds another layer in the stack where bugs can hide.
This article shows a path to get rid of that layer by using a well-tested layer in the form as a syncing database.
In this article PouchDB/CouchDB is used, so the emulated "server" can also live in the browser, thus making the example simpler.
This approach has also been tested with Firestore.

All the necessary code can be found at https://gitlab.com/emergence-engineering/blog/-/tree/master/articles/prosemirror-sync-1

**TLDR**: Create a web based collaborative editor with a communication layer provided by a sync database
# Demo
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
- *Sync database*: A database which is capable of automatically replicate the state of a remote database, s
o they both contain the same content eventually. For example CouchDB, Google Firestore etc... 
These are all NoSQL databases ( as far as I know )
- *PouchDB*: A JS implementation of the CouchDB protocol. This means that it can run in the browser, and sync up to another database which
implements the CouchDB protocol.
- *listener*: A callback which is called every the there is new data in the database
- *collection*: to separate different kinds of data stored in the database a **collection** field is added, with different values, depending on the type.

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
Our implementations root file is **index.ts** in the repo linked earlier.

A very good explanation of the collaborative algorithm used by ProseMirror can be found at https://prosemirror.net/docs/guide/#collab

In this demo ther are two ProseMirror editors and each of them has a dedicated PouchDB instance.
These databases sync up to a third database, which belongs to a "server". If client A is updated, then the server
is updated which ideally propagates client B.

There are three collections:
- **PMDocument** stores the ProseMirror document
- **ClientSteps** stores the steps coming from the clients
- **ServerSteps** stores the steps accepted by the server 

## Data flow on the server
- the server listens to new documents in **ClientSteps**
- If the version of the steps is correct ( the client is synced up to the server ), then it
1. Updates the ProseMirror document stored in **PMDocument** ( referenced by the incoming step )
2. saves the accepted steps to **ServerSteps**
    
The server functionality is implemented in **processSteps.ts**

## Data flow on the clients

### Sending new steps
The function in **postNewsteps.ts** is called by ProseMirror whenever there is an incoming ProseMirror transaction ( either the user did something in the editor, or the server
sent new steps coming from another user ). In that function, sendable steps are calculated by the **prosemirror-collab** module, and if there's any then they are written to the database as **ClientSteps**. The ProseMirror view is also updated.

### Receiving new steps

The **fetchNewStepsClient.ts** contains a function which is used in a React **useEffect** in **index.ts**, and gets reloaded every time the version of the document is updated.
This is necessary since this function only listens to the step in **ServerSteps** which has the version that updates the current document. If there is a new step then
new ProseMirror transaction is sent to the ProseMirror view, which contains all the necessary information to both updates the view and the collab state.

# Improvements, challenges and everything else

This example runs in just a single browser instance, but if one moves the server-side code ( mostly **processSteps.ts** and some parts of **initializeDB** ), removes one
of the editors, and changes the remote DB location on the client-side, then it will work as a fully functional collaborative editor.
Offline functionality is also possible with the same structure ( with some added code ), but keep in mind that ProseMirror's collaborative feature is not meant for
offline use and it is possible to lose some information ( for example in a user typed into an existing paragraph when offline, and then the paragraph is deleted then the information is lost ), 
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
      <MarkDown source={MD0} />
      <EditorsDynamic />
      <MarkDown source={MD1} />
      <Disqus pageUrl={article2Metadata.url} pageId={article2Metadata.postId} />
    </ArticleWrapper>
  );
}
