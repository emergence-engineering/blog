# Emergence Engineering nextjs-firebase starter kit

## What this kit includes

- Next.js 9.0
- Linting with `npm run lint` or `npm run lint:fix`.
  Uses eslint with typescript, extended by airbnb, prettier and react-hooks, with some additional magic
  to keep the coding style as strict as possible
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
   For development you don't need hosting.
   On the finishing screen you'll get all the necessary info, that you will need to fill out
   the .env file which you have to create on the root.
   The env file structure is the following:
   ```
    FIREBASE_API_KEY=<apiKey>
    FIREBASE_PROJECT_ID=<projectId>
    FIREBASE_SENDER_ID=<messagingSenderId>
    FIREBASE_APP_ID=<appId>
   ```
4. On the firebase console, click on your project name.
   That leads you to the firebase manager. Click on database in the `Develop` section.
   Click on Create database, select `Start in test mode`, on the next page, select a location close to your
   firebase db should be ready, and you can view all your data there.

5. Auth set-up: Go to firebase console, click on `Authentication`. Enable Email/Password login and Google login
   ( select project support email too ).

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
