import { execFile } from "child_process";
import util, { promisify } from "util";
import fs from "fs";

const readFile = util.promisify(fs.readFile);
const appendFile = util.promisify(fs.appendFile);
const execFilePromise = promisify(execFile);

export const camelToSnake = (input: string) =>
  input.replace(/[a-z]([A-Z])/g, (m) => `${m[0]}_${m[1]}`).toUpperCase();

interface FirebaseConfig {
  projectId: string;
  appId: string;
  databaseURL: string;
  storageBucket: string;
  locationId: string;
  apiKey: string;
  authDomain: string;
  messagingSenderId: string;
}

const getConfig = async () => {
  const projectsCMD = await execFilePromise("firebase", ["projects:list"]);
  const projectId = projectsCMD.stdout
    .match(/.* \(current\)/g)?.[0]
    .split(" ")[1];
  console.log(`projectId: ${projectId}`);

  const appsCMD = await execFilePromise("firebase", ["apps:list", "-j"]);
  const { appId } = JSON.parse(appsCMD.stdout).result.filter(
    (i: any) => i.displayName === projectId,
  )[0];
  console.log(`appId: ${appId}`);

  const configCMD = await execFilePromise("firebase", [
    "apps:sdkconfig",
    "WEB",
    appId,
  ]);

  const config: FirebaseConfig = JSON.parse(
    configCMD.stdout.replace(/\n/g, "").match(/\{.*\}/)?.[0] || "{}",
  );

  let serviceAccountKey = "";
  if (process.env.GET_SERVICE_ACCOUNT) {
    const accountsListCMD = await execFilePromise("gcloud", [
      "iam",
      "service-accounts",
      "list",
      "--format=json",
    ]);
    const adminEmail: string = JSON.parse(accountsListCMD.stdout).filter(
      (i: any) => i.disabled === false && i.displayName === "firebase-adminsdk",
    )[0].email;
    console.log(`adminEmail: ${adminEmail}`);
    await execFilePromise("gcloud", [
      "iam",
      "service-accounts",
      "keys",
      "create",
      "./key.json",
      "--iam-account",
      adminEmail,
    ]);
    serviceAccountKey = await readFile("./key.json", "utf-8").then((key) =>
      key.replace(/\n/g, ""),
    );
    await execFilePromise("rm", ["./key.json"]);
  }
  const configToEnv = `
${serviceAccountKey ? `FIREBASE_SERVICE_ACCOUNT=${serviceAccountKey}` : ""}
FIREBASE_API_KEY=${config.apiKey}
FIREBASE_PROJECT_ID=${config.projectId}
FIREBASE_DATABASE_NAME=${config.projectId}
FIREBASE_MESSAGING_SENDER_ID=${config.messagingSenderId}`;
  await appendFile(".env", configToEnv);
  console.log("Successfully wrote firebase config into .env file");
};

getConfig();
