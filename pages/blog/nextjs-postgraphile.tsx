import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import SalesBox from "../../features/article/components/SalesBox";
import React from "react";

export const MD0 = `
# TLDR

- I introduce a battle tested robust architecture that is capable of running a real-time web application
- [GitHub repository included](https://github.com/emergence-engineering/nextjs-postgraphile-example)
- the example is a pruned down version of one of the architectures that we have been continuously improved in the past few years
- there are three services Next.js UI, PostGraphile GraphQL server, Postgres

# Real time web application

Let me clarify what I mean by real time application. It’s a web application that is synced with the state of the database with some mechanism, in our case with GraphQL subscriptions. (Apollo GraphQL also supports polling out of the box).

At Emergence we have a few choices when we are building real time web applications. Our main choice is Firebase with Cloud [Firestore](https://firebase.google.com/docs/firestore) and Cloud Functions. It’s a real time database out of the box and it’s good for most use cases, but in some scenarios it’s just not enough or just simply not the right fit. In such cases our choice is Postgres combined PostGraphile. Postgres is a robust database, PostGraphile provides and instant CRUD API + real time capabilities through GraphQL Subscriptions.

PostGraphile can work with a self-hosted database and managed cloud databases like AWS RDS [Aurora](https://aws.amazon.com/rds/aurora/). In short you can have a real time web app just like with a Firebase project and you also don’t have to deal with managing, scaling, sharding etc. your database.

# A few things that I omitted from the example

I omitted a few things from the example:

- Authentication - The reason I omitted it is because I’m planning another article for it that will include the following: authentication, roles, Postgres row level security etc…
- Monitoring - We are using Sentry for most of our projects. I’m also planning an other article to showcase our monitoring patterns. For example how we track the progression of a request between multiple services. With Sentry you can identify bottlenecks across multiple services
- Testing - I entirely omitted testing from the example.
- deployment, Kubernetes, AWS - There are a couple way that we use architectures like this in production including EC2, Kubernetes, Vercel… I won’t go into the Dev-Ops side of things.

# Services

## Architecture

The architecture consists of three dockerised services inside Docker Compose. Additionally we have Makefile that helps managing these services.

![architecture_image](/postgres-nextjs-architecture.svg)

 So the idea is that Next.js provides a full-stack React server. The browser (or the server side) React code communicates with PostGraphile. PostGraphile watches Postgres and provides CRUD GraphQL resolvers and also a typed GraphQL schema for all tables. We are also using using Apollo's code generation tool for React that watches the typed GraphQL schema from PostGraphile and generates TypesCript bindings. In summary **we instantly get up-to date TS types and TS CRUD methods without any manual work** for all tables and GraphQL CRUD resolvers (queries, mutations, subscriptions) operating on said tables.

## Makefiles

We use Makefiles to manage our services below is the output of \`make help\`:

\`\`\`bash
*** ALL SERVICES DIRECTIVES 
                     
up:                  spins up all the services (if image does not exists it will create one)
down:                shuts down all the docker compose configuration
clean:               cleans docker compose configuration removing services containers
rebuild-all:         Stops, removes and rebuilds all container
ps:                  shows all services status
logs:                Shows services logs
free-space:          Frees some space in your local docker environment
clean-db:            Removes the DB and re-initialises it, which syncs DB changes from the repo
                     
                     
                     
*** SINGLE SERVICES DIRECTIVES 
                     
start:               Starts a specific service
restart:             Re-Starts a specific service
stop:                Stops a specific service
rebuild:             Stops, removes and rebuilds container
rmi:                 Deletes service image and container, and any other stopped images
\`\`\`

This Makefile provides a few useful helpers for building and running stuff. We can start all or just individual services, build all or an individual service, clean and reseed the db etc…

## Starting individual services

When starting services we have to mind that a service maybe dependent on another service. Most of the time Docker Compose can take care of this by a giving it a list of services under the keyword \`depends on\`:

\`\`\`yaml
services:
  db:
    ...
    healthcheck:
    test: [ "CMD-SHELL", "pg_isready -U postgres" ]
  postgraphile:
    ...
    depends_on:
      - db
  ui:
    depends_on:
      - postgraphile
\`\`\`

This just tells Docker compose the order that it needs to start and stop services, but some services need additional information. In general this happens when a service is started but still must do something before downstream services can actively rely on it. To mitigate this in our Docker Compose file each service has a starter Bash script. For example in a starter Bash script you can poll either the healthcheck, version or a custom endpoint of the required service before you start your own service.

\`\`\`bash
#!/bin/bash
if [[ -n "\${REQUIRED_SERVICE_URL}" ]]; then
  echo "API check url: \${REQUIRED_SERVICE_URL}"
  while [[ $(curl -s -o /dev/null -w '%{http_code}' "$REQUIRED_SERVICE_URL") != "200" ]];
  do
    echo "Waiting for REQUIRED_SERVICE_URL to be started..."
    sleep 3;
  done
fi

echo "Starting postgraphile..."
node server.js
\`\`\`

Apart from solving the issue mentioned above you can use these kind of script customize how to run your service in different conditions etc…

All services have a \`/health\` and a \`/version\` endpoint. Although I omitted from this example the \`/version\` isn’t just useful for custom service start logic it’s also used by Monitoring tools such as Sentry.

## Postgres

In this example we use Postgres 15 from DockerHub. The database is seeded from docker compose by executing the first migration inside the db folder attached as a Docker volume.

\`\`\`yaml
services:
  db:
    image: postgres:15
\t\t...
    volumes:
      # Creates initial tables
      - ./services/db/1_create_tables.sql:/docker-entrypoint-initdb.d/1_create_tables.sql
\`\`\`

For projects that are not require complex or frequent migrations I like doing migrations from SQL scripts. If you need complex migrations you can use \`[graphile/migrate](https://github.com/graphile/migrate)\` with PostGraphile it's sponsored by Netflix.

## PostGraphile

In this example we use PostGraphile as a library and the service code is based on the official “How to use PostGraphile as a library” [example](https://www.graphile.org/postgraphile/usage-library/). TLDR the advantage of using PostGraphile as a library let’s us use it as an Express.js middleware. This gives us a lot of flexibility you can add your custom authenication step or use Passport.js or any convenient auth middleware for Express, you can map a user to a Postgres user before handing down the request to GraphQL.

You can check out \`services/postgraphile/src/server.ts\` but I here are a couple of important things:

1. we use the PubSub plug-in to provide subscriptions and make our UI real-time

\`\`\`tsx
const pluginHook = makePluginHook([ PubSub ]);
\`\`\`

1. we the \`compression\` and the \`cors\` Express.js middlewares

\`\`\`tsx
app.use(compression())
app.use(cors())
\`\`\`

1. I will highlight a few important PostGraphile settings
    - watchPg - it enables PostGraphile to rebuild the GraphQL scheme when the DB schema changes on the fly, if set to false you have to restart the Postgraphile service to pick up the new schema
    - simpleSubscriptions - WARNING: don’t use it in production. This option tells PostGraphile to provide a generic subscription that can be used to listen to changes on any table. It’s good for rapid prototyping. In production you might want to restrict subscriptions to certain set of users, optimise a subscription on a very complex table or view or just you need some custom logic before you execute your subscription etc...
    - the \`graphiql\` and the \`enchanceGraphiql\` options will give you [GraphiQL](https://github.com/graphql/graphiql) a great admin or dev tool. You can restrict these features by a custom authentication middleware. These options also enable [Apollo Developer tools](https://www.apollographql.com/docs/react/development-testing/developer-tooling/).

## Next.js

Almost all of our UI projects are in Next.js. I created the UI with \`create-next-app\` and it uses the new \`app\` directory approach from Next.js 13. In \`package.json\` you can find a few scripts additional scripts to the default Next.js ones.

\`\`\`json
{
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "compile-graphql": "graphql-codegen",
    "watch-graphql": "graphql-codegen -w"
  }
}
\`\`\`

**********************************Maintaining TypeScript binding for the DB schema**********************************

This architecture lets us maintain the DB schema and it’s GraphQL representation up to date throughout our services. When the schema changes in the database if the \`watchPg\` option is enabled in PostGraphile, Postgraphile will re-parse the db’s schema. If you are running the \`watch-graphql\` script while developing, it will automatically get the latest GraphQL schema from PostGraphile and update the TS binding for all the GraphQL queries, mutations subsriptions…

****************************************Using .graphqlconfig****************************************

GraphQL config is not necessary but my preferred IDE (IntelliJ) requires it. It provides GraphQL coding assistance in a similar manner.

******************************************************Running the UI in dev mode directly******************************************************

I prefer to run the UI directly in dev mode locally mainly because it enables the full-stack IntelliJ debugger.  You can do the same by only starting the other services and running the UI manually.

**Running the UI in dev mode inside Docker Compose**

Another possibility is to add a ***************local debugging*************** context to the Docker Compose file and start the UI service in \`dev\` mode together with attaching UI sources as a volume. That way because of dev mode Next.js will re-build when source files are changed and the behaviour of the service will be closer to production.
`

export const article9Metadata: ArticleIntro = {
  title: `Building a production ready Next.js+PostGraphile architecture`,
  postId: "nextjs-postgraphile",
  url: "https://emergence-engineering.com/blog/nextjs-postgraphile",
  imgSrc: "https://emergence-engineering.com/postgres-nextjs-architecture.svg",
  author: "Balázs",
  timestamp: 1675437276962,
  authorLink: "https://emergence-engineering.com/cv/balazs",
  introText: "A guide with code samples and a GitHub repository for building a production ready architecture with the following three services: Postgres, Postgraphile and Next.js",
}

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article9Metadata.url}
        title={article9Metadata.title}
        description={article9Metadata.introText}
        imgSrc={article9Metadata.imgSrc}
      />
      <Markdown source={MD0} />
      <SalesBox />
    </ArticleWrapper>
  );
}
