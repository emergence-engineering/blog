# Seven consulting nextjs-firebase starter kit

## What this kit includes
- Next.js 9.0
- Linting with `npm run lint` or `npm run lint:fix`.
Uses eslint with typescript, extended by airbnb, prettier and react-hooks, with some additional magic
 to kepp the coding style as strict as possible
- styled-components with server side rendering enabled

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

## Webstorm tips
- Enable eslint in settings to see linting issues on the fly
