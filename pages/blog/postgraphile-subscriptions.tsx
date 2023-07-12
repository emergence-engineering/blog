import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import SalesBox from "../../features/article/components/SalesBox";
import React from "react";

export const MD0 = /* language=md */ `
  # WIP

This is a work in progress article. Publishing before it's finished is an experiment for me. I'm happy to take feedback on Discord.

# TLDR

- my opinion is that custom subscriptions are the best choice for production Postgraphile environments
- Postgraphile also provides simple subscriptions I used them for prototyping in the development phase
- we use Postgraphile with an AWS serverless postgres instance that doesn’t support live queries so building subscription is the best option

# How the realtime flow works in Postgraphile

## Types

There are three methods available with Postgraphile for pushing data from the server to the client:

- Live Queries
- Simple Suscriptions
- Custom subscriptions

Of course the GraphQL protocol and frameworks like Apollo supports polling queries from the client side.

# Why not live queries

- first of all live queries are not part of the official GraphQL protocol but subscriptions are
- using multiple live queries cause performance issues but depends it on implementation. In contrast, custom subscriptions have the benefit that we can fine tune how often they fire on a Postgres trigger level, additionally to that we can further add optimisations on the GraphQL resolver level
- the official Postgraphile docs says
    
    > official realtime provider plugin, \`@graphile/subscriptions-lds\`, monitors a “logical replication slot” from PostgreSQL”
    > 
    
    The issue with this is that the replication slot usually is not available for managed Postgres instances like [AWS Aurora Serverles Postgres](https://aws.amazon.com/rds/aurora/serverless/) so you can’t use \`@graphile/subscriptions-lds\` based live queries with managed databases
    

# Subscription flow

Trigger → Postgres pubsub → Postgraphile → GraphQL

# Steps

// TODO describe why I split it into these points, add a flowchart maybe

1. write a trigger
    - freedom to when to “trigger” it (upsert, etc…)
    - give an example trigger
2. write a GraphQL resolver in JS or TS
    - give an example resolver
3. How to enable subscriptions in Express
    - enable subscriptions
`

export const article15Metadata: ArticleIntro = {
  title: `Introduction to realtime Postgraphile with custom subscriptions`,
  postId: "postgraphile-subscriptions",
  url: "https://emergence-engineering.com/blog/postgraphile-subscriptions",
  author: "Balázs",
  timestamp: 1689149207117,
  authorLink: "https://emergence-engineering.com/cv/torcsi",
  introText: "Step by step introduction, best practices and gotchas for building real time Postgraphile backend with custom subscriptions.",
  imgSrc: ""
}

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article15Metadata.url}
        title={article15Metadata.title}
        description={article15Metadata.introText}
        imgSrc={article15Metadata.imgSrc}
      />
      <Markdown source={MD0} />
      <SalesBox />
    </ArticleWrapper>
  );
}
