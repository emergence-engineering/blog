# Sentry usage

Sentry is an error tracker (similar to NewRelic, Prometheus...). 
It supports Node.js and React projects as well.

## Official documentation
Sentry's official documentation is excellent ➡️ https://docs.sentry.io/ 

## Configuration
The Sentry SDK requires a DSN address to identify the project. 
The DNS address can be generated in `Project Settings → Client Keys (DSN)`

The generated DSN address has to be added to the .env file of the project, 
so Next.js can pick it up and provide it for both the server and 
the client via `next-config` node module.

```dotenv
SENTRY_DSN=https://1d1ljnd1io2n21oin1osions@od2321.ingest.sentry.io/1203479
```

In order make the environment variable available
for `next-config` consumers it has to be added to project's `next.config.js`

```js
{
  publicRuntimeConfig: {
    // Will be available on both server and client
    SENTRY_DSN: process.env.SENTRY_DSN
  }
}
```


## Integrating to GitLab
Follow the guide in the settings of the Sentry project. It appears when
the GitLab integration is enabled for the first time for the project.

## Resolving issues
All issues (uncaught exceptions) of the same type will be
reported by Sentry in the project error log. The errors are
assigned a unique error id. You can resolve Sentry issues 
via GitLab commits and merge requests by including 
`Fixes PROJECT-[issue id]` in the commit message.
