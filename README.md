# Emergence Engineering nextjs-firebase starter kit

## What this kit includes

- Next.js 9.0
- Linting with `npm run lint` or `npm run lint:fix`.
  Uses eslint with typescript, extended by airbnb, prettier and react-hooks, with some additional magic
  to keep the coding style as strict as possible
- styled-components with server side rendering enabled

## How to set up

- Run `npm i` in the root folder.
- Create '.env' file in the root folder ( or ask your team for one ) to confiugure firebase.

### How to set up firebase.

1. [Register to firebase](firebase.google.com)

2. [Go to the firebase console](https://console.firebase.google.com), and create
   a new Firebase project

3. Add your app to your project:
    - Click the gear icon and go to the project settings.
    - Scroll down and, in the `Your apps` section, click on the `< \>` icon to add your first app.
    - Set the name ( Best practice: Set it to the GitLab project name ).
    - Hosting is NOT required for development.
    - After clicking on Register App you will see the config settings. Use it to fill in the created `.env` file:
      ```
       FIREBASE_API_KEY=<apiKey>
       FIREBASE_PROJECT_ID=<projectId>
       FIREBASE_SENDER_ID=<messagingSenderId>
       FIREBASE_APP_ID=<appId>
      ```
    - After exiting the app registration, you will arive on the project main screen.

4. Create your database:
    - In your project, on the sidebar, under `Development`, click `Database`.
    - On top, in `Cloud Firestore`, click on `Create Database`.
    - Choose `Start in test mode` and select a location.
    - Click on next and done.
    - Here you can see al the data you stored.

5. Auth set-up: 
    - In your project, on the sidebar, under `Development`, click `Authentication`.
    - Click the `Sign-in Metod` tab.
    - Enable `Email/Password` and `Google`

## Storybook
Storybook is used to test componens in a separate environment, it's also a way of providing sample
codes for using common components.

To start it just type `npm run storybook` into the console, and it should 
come up on `http://localhost:6006`

## How it works

### Redux-Next-Firebase integration

The store setup mostly follows
https://github.com/piotrwitek/react-redux-typescript-guide
except for the Next.js integration, which is not discussed in the link above.
Redux is integrated using the `next-redux-wrapper` package.

## Left to do

- Database typings / figure out the best way to type firestore/firebase
- Figure out best way to add pwa functionality
- Testing setup with jest / enzyme
- Integrate redux-form
- Set up server:
    - Re-send password
- Upgrade react-redux-firebase: latest throws `regeneratorRuntime is not defined` babel error.

## Webstorm tips

- Enable eslint in settings to see linting issues on the fly

## Deploying the project as a static website on Firebase Hosting

### First steps
To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.

#### Set up Firebase and Firebase hosting
```shell script
npm install -g firebase-tools
```

Open a terminal window and navigate to or create a root directory for your web app

Sign in to Google

```shell script
firebase login
```

Initiate your project
This step is needed if the project folder is not associated with a FireBase project. If you want to change to another 
FireBase project then run `firebase use <project name>`. To list available projects run `firebase projects:list` 
Run this command from your app’s root directory:

```shell script
firebase init
```

When initializing the project choose "hosting" and for the hosting questions answer the following:
```
? What do you want to use as your public directory? static-export
? Configure as a single-page app (rewrite all urls to /index.html)? No
? File static-export/404.html already exists. Overwrite? No
? File static-export/index.html already exists. Overwrite? No
```

#### Building for static deployment
First run
```
npm run build
```
After that just run

```shell script
npm run export-static
```

This command will create a the static-export folder and populate it with the statically rendered pages.

When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

```shell script
npm run deploy-static
```

(This uses shell `firebase deploy` under the hood)

After deploying, view your app at https://<firebase-app-name>.firebaseapp.com

## Gitlab CI setup

Install firebase tools globally:
```shell script
sudo npm i -g firebase-tools
```
Log into firebase with
```shell script
firebase login
```
Get your firebase token. A browser will pop up, where you should log in, and accept that firebase-cli will
have the right permissions.
```shell script
firebase login:ci
```
Copy the token, go to gitlab/settings/CI/CD and add a new variable named `FIREBASE_TOKEN` with
the token value as protected and masked.

Set up a new firebase project for the staing/prod environment and define the following variables
in gitlab:
- `STAGING_API_KEY` / `PROD_API_KEY`
- `STAGING_PROJECT_ID` / `PROD_PROJECT_ID`
- `STAGING_SENDER_ID` / `PROD_SENDER_ID`
- `STAGING_APP_ID` / `PROD_APP_ID`

