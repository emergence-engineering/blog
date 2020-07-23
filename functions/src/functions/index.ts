import "firebase-functions";
import * as admin from "firebase-admin";
import exportCloudFunctions from "better-firebase-functions";

admin.initializeApp();

exportCloudFunctions(__dirname, __filename, exports, "./", "./**/*.js");
