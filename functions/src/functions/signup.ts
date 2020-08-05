import * as functions from "firebase-functions";
import signupHandler from "../signup/signupHandler";

export default functions.https.onCall(signupHandler);
