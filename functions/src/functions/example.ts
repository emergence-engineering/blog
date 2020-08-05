import * as functions from "firebase-functions";

import exampleHandler from "../example/exampleHandler";

// you need to create a file in functions/src/functions for new firebase/cloud functions
// export default functions.https.(onCall/onRequest/trigger functions) and so on check it here, or check the /functinos/README.md
// https://firebase.google.com/docs/functions

// create a new folder in /functions/src for your new firebase or cloud function and create the handler and other necessary files there
export default functions.https.onRequest(exampleHandler);
