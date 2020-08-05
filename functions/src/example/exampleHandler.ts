import * as functions from "firebase-functions";

import example from "./example";

export default async function(req: functions.Request, res: functions.Response) {
  // get parameters, and make any necessary checks here
  // example: in a callable function you can get the userId from the context variable, check if it exists or throw a new HttpsError if the userId is missing
  // you can access any query parameters like this
  const { name } = req.query;

  // this is just a handler file, use logger and error handling here, but put the function logic to a different file in the same directory
  return example(name)
    .then(data => res.status(200).send(data))
    .catch(err => {
      // logger will be implemented in the future don't forget to use it!!
      console.error("error in example function", err);
      // you can throw functions https error like this, check for FunctionsErrorCode here
      // https://firebase.google.com/docs/reference/functions/providers_https_#functionserrorcode
      throw new functions.https.HttpsError(
        "unknown",
        "error in firebase function example",
      );
    });
}
