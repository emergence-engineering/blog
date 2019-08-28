# Seven consulting nextjs-firebase starter kit

## What this kit includes
- Next.js 9.0
- Linting with `npm run lint` or `npm run lint:fix`.
Uses eslint with typescript, extended by airbnb, prettier and react-hooks, with some additional magic
 to kepp the coding style as strict as possible
- styled-components with server side rendering enabled

## How to set up
Just run `npm i` in the root folder.
You also should set the firebase connection. For that you either have to ask for a
.env file which has all the necessary info, or create a new firebase project and 
a .env file.

### How to set up firebase.
1. [Register to firebase](firebase.google.com)
2. [Go to the firebase console](https://console.firebase.google.com), and create
a new Firebase project
3. Add app to your project by going to project Settings, and in the `Your apps` part
click on the web app icon. Give a name to your new app ( the same as the project is ok ).
For development you don't need hosting. On the finishing screen you'll get all the necessary info.
The env file structure is the following:
```
FIREBASE_API_KEY=<apiKey>
FIREBASE_PROJECT_ID=<projectId>
FIREBASE_SENDER_ID=<messagingSenderId>
FIREBASE_APP_ID=<appId>
```
TODO: Auth writeup

## Issues
- Fix failed builds when typescript has an issue. \
https://github.com/zeit/next.js/issues/7687 \
https://github.com/zeit/next.js/issues/8331 \
https://github.com/zeit/next.js/issues/6466 \
https://www.npmjs.com/package/fork-ts-checker-webpack-plugin

## Left to do
- Connect to firebase with react-redux-firebase
- Figure out best way to add pwa functionality
- Precommit hook
- Testing setup with jest / enzyme
- Set up react-storybook

## Webstorm tips
- Enable eslint in settings to see linting issues on the fly
