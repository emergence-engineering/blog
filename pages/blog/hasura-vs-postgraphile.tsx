import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import SalesBox from "../../features/article/components/SalesBox";
import React from "react";
import ArticleHeader from "../../features/article/components/ArticleHeader";

//# A year after we chose to go with PostGraphile over Hasura in production
export const MD0 = `

# TLDR

- Hasura had Apple silicone compatibility issues for local development
- executable npm package vs complex dockerized black box
- Express.js middleware or plugin approach vs. Webhook approach
- management UI

# Background

We needed a GraphQL API in front of our Postgres database with a few criteria:

- Quick and easy to setup and manage. Just give us CRUD ability for the required tables based on the schema of the database without any hassle
- Granular control over authentication ie.: certain group of users are restricted only to a subset of the data inside the database
- Subscriptions so users can see live data inside the UI

# First steps

Usually with requirements like the ones mentioned above our go to database would be Firestore but this time we had to use Postgres for other reasons. (I didn’t really mind this because Postgres is my favourite database.) We created a POC for both PostGraphile and Hasura and made a decision based on our experiences. Now after more than a year we still think that going with Posgraphile was a good choice. Don’t get me wrong Hasura is a great tool and might be a good fit four your project. 

# Hasura

### Pros

- Management UI is *really* nice. It out of the box gives a DB management tool similar to pgAdmin. It is a well designed web UI with a lot of features, I’d say almost all features that a developer might need for managing a DB and a GraphQL server. It’s easy to manage subscriptions, row level security, GraphQL query resolvers etc. from Hasura’s UI. I’m not advocating it, but even non-developers can also use it.
- Logs and errors inside the management UI
- Good documentation
- Large community

### Cons

- When we tested it there was no support for M1 Macs. The official Hasura docker image wasn’t working on M1 Macs. So we had a couple of options to mitigate it and non of the felt very good. Use a non-official docker image for half of our time and risk that some difference will only show up in our dev environment. Don’t use a local environment for development. Compile the Hasura ourselfs for M1.
- Under the hood Hasura is very complex. Hasura is shipped as a payed service or a docker image for self hosting. In theory you can fork Hasura and edit it’s sources, but the codebase consists of TypeScript, Haskell and Go built with a Makefile system. Their design philosophy is the follwing. They support most of the industry standards like Postgres row-level security out of the box. But if you want custom logic inside Hasura let’s say for some special protocol to handle an edge case with user authorisation then you can attach a webhook inside the UI and Hasura will comply to whatever your service answers.

# PostGraphile

### Pros

- Lightweight. It’s available as a standalone executable \`npm\` package, Express.js middleware and as a Docker image as well
- It’s made only for Postgres and it knows Postgres well
- Easy to customize with self-authored plugins or Express.js middlewares all in JavaScript/TypeScript
- Easier integration with application monitoring services like New Relic or Sentry.

### Cons

- Worse documentation than Hasura
- Code only, there is no UI. So if you want some web based DB management tool you have to set-up something like pgAdmin
- Smaller community

# Discussion

So we wighted what’s important to us and as the title suggests we went with PostGraphile. I’m sure some of you reading this article would choose Hasura based on the same pros and cons. For us the Hasura UI was really tempting but the simplicity of PostGraphile won at the end of the day.
`;

export const article8Metadata: ArticleIntro = {
  title: `A year after we chose to go with PostGraphile over Hasura in production`,
  postId: "hasura-vs-postgraphile",
  url: "https://emergence-engineering.com/blog/hasura-vs-postgraphile",
  imgSrc:
    "https://hasura.io/static/hasura-collaborate-thumb-1c8f381ee6fd40dfff2eadfbfe27da40.png",
  author: "",
  timestamp: 1672999080350,
  authorLink: null,
  introText:
    "Summarising our experiences of using PostGraphile in production for more than a year in light of the recent investigation on whether we want to switch to Hasura",
};

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article8Metadata.url}
        title={article8Metadata.title}
        description={article8Metadata.introText}
        imgSrc={article8Metadata.imgSrc}
      />
      <ArticleHeader
        title={article8Metadata.title}
        author={article8Metadata.author}
        timestamp={article8Metadata.timestamp}
      />
      <Markdown source={MD0} />
      <SalesBox />
    </ArticleWrapper>
  );
}
