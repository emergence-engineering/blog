import * as functions from "firebase-functions";
import { CallableContext } from "firebase-functions/lib/providers/https";
import signup from "./signup";

export default async function signupHandler(
  { email, password }: { email: string; password: string },
  context: CallableContext,
) {
  if (!email || !password) {
    console.error("missing required fields");
    throw new functions.https.HttpsError(
      "invalid-argument",
      "missing required fields",
    );
  }

  return signup(email, password)
    .then(userKey =>
      console.info("signUp success", {
        userKey,
      }),
    )
    .catch(err => {
      console.error({ err }, "could not sign up user");
      throw new functions.https.HttpsError("unknown", "could not sign up user");
    });
}
