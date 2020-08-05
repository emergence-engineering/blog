## Functions

## [Read the docs on the official firebase functions page](https://firebase.google.com/docs/functions)

## [Start working with functions](https://firebase.google.com/docs/functions/get-started)

- firebase functions is already set for you in this project
- you just have to install `firebase-tools` globally by running `npm install -g firebase-tools`
- and login to your firebase project, run `firebase login` to log in via the browser and authenticate the firebase tool

## Deploy your functions

- run `firebase deploy --only functions`
- you can deploy specific functions too by running `firebase deploy --only functions:myFunctionName`

## [Environment configuration](https://firebase.google.com/docs/functions/config-env)

- example: `firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"`
- to make it work with the emulator:
  - you have to create a `.runtimeconfig.json`
  - firebase functions:config:get > .runtimeconfig.json
- you can also `firebase functions:config:unset myVar`

## [Emulator](https://firebase.google.com/docs/functions/local-emulator)

- download the latest JDK version
- go to ~/.config/gcloud and delete application_default_credentials.json if it exist. I had no such file/directory.
- Open the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) pane of the Google Cloud Console
- From the actions select Create key/JSON and download it.
- install database and firestore emulators:
  - run `firebase setup:emulators:database` downloads the database emulator
  - run `firebase setup:emulators:firestore` downloads the firestore emulator
- run `export GOOGLE_APPLICATION_CREDENTIALS="SERVICE_ACCOUNT_PATH.json` in the session you want to use.
- for custom functions configuration variables (env vars) run `firebase functions:config:get > .runtimeconfig.json` in /firebase directory

* firebase functions: `firebase emulators:start --only functions`
  - callable functions (`onCall`)
  - http request functions (`onRequest`)
* cloud functions (and firebase functions too): `firebase emulators:start`
  - `firebase` and `firestore` db is running on localhost
  - firerbase functions
  - `triggered functions`

- [testing with the emulator](https://firebase.google.com/docs/firestore/security/test-rules-emulator)

### Overview

#### Types of functions:

##### Function calls:

- [Call functions from your app](https://firebase.google.com/docs/functions/callable)
  - you can call these functions from your app for example from the front end by their name
  - we should implement generic functions HOC to handle these calls generic
  - [generic HOC to implement](https://leolabs.org/blog/typesafe-firebase-cloud-functions)
- [Call functions via HTTP requests](https://firebase.google.com/docs/functions/http-events)
  - you can call these functions by http request like `https://us-central1-<project-id>.cloudfunctions.net/example?name=asd`
- [schedule functions/jobs](https://firebase.google.com/docs/functions/schedule-functions)
  - if you want to schedule functions to run at specified times
- [Cloud Firestore triggers](https://firebase.google.com/docs/functions/firestore-events)
  - you can listen on firestore document `onCreate / onUpdate / onDelete / onWrite`
