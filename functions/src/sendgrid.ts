// import * as functions from "firebase-functions";
import sg from "@sendgrid/mail";

// sg.setApiKey(functions.config().sendgrid.api.key as string);
sg.setApiKey(
  "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",
);

export default sg;
