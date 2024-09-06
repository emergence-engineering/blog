import React from "react";
import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import ArticleHeader from "../../features/article/components/ArticleHeader";

// # Step by step introduction, best practices and gotchas for building real time Postgraphile backend with custom subscriptions (WIP)

export const MD0 = /* language=md */ `


# WIP

*This is a work in progress article. Publishing before it's finished is an experiment for me. I'm happy to take feedback on Discord.*

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

# Why I don’t use live queries

- first of all live queries are not part of the official GraphQL protocol but subscriptions are
- using multiple live queries cause performance issues but depends it on implementation. In contrast, custom subscriptions have the benefit that we can fine tune how often they fire on a Postgres trigger level, additionally to that we can further add optimisations on the GraphQL resolver level
- the official Postgraphile docs says
    
    > official realtime provider plugin, \`@graphile/subscriptions-lds\`, monitors a “logical replication slot” from PostgreSQL”
    > 
    
    The issue with this is that the replication slot usually is not available for managed Postgres instances like [AWS Aurora Serverles Postgres](https://aws.amazon.com/rds/aurora/serverless/) so you can’t use \`@graphile/subscriptions-lds\` based live queries with managed databases
    

# Subscription flow in Postgraphile

1. A trigger puts a message on the Postgres message queue
2. Postgraphile listens for messages on the Postgres message queue and matches JavaScript (or TypeScript) functions to message topics. These functions are called resolvers
3. If a resolver is triggered it either executes an SQL query (if more data is needed, more on this later) or directly creates a GraphQL response based on the content of the message and pushes it to the front-end. 
4. Client in the browser gets notified on a web-socket managed by Apollo and the UI is updated

# What is the difference between simple and custom subscriptions?

With simple subscriptions there is no need for any manual labour, just enable them in the Postgraphile config and it’s done. Postgraphile will provide subscriptions to all tables. It’s good for prototyping but it can be inefficient.

# What is the benefit of using custom subscriptions

They are a bit more work but you get a few benefits:

- you can write your own triggers with custom business logic. Optimising on the trigger level might be useful if you want to subscribe on a frequently updated huge table.
- from a custom trigger you can send messages on custom topics and also you can add custom metadata to the message
- resolvers have access to the event, arguments, the context and a pgSql client. With these things a lot of things a possible such as conditionally running different SQL queries based on user identity, caching an many more

# Example: building a custom subscription in Postgraphile

Let’s build a simple chat app. We will have a messages table and attach a trigger that listens for UPSERTs. The trigger will put messages on the Postgres pubsub whenever the user sends a message or edits an old one.

## Trigger

First let’s create a migration for trigger. Let’s split the trigger into a function that prepares and sends the message to the Postgres pubsub queue. Use \`json_build_object\` if you want to send extra data to your resolvers in Postgraphile. Since the Postgraphile resolvers have access to a pgSql client sometimes the topic alone is enough of them and they can gather the data by executing SQL queries themselves.

\`\`\`sql
CREATE OR REPLACE FUNCTION notify_messages_upserted()
    RETURNS trigger AS $notify_messages_upserted$
BEGIN
    PERFORM pg_notify(
\t\t\t\t\t\t\t\t-- topic name
                'messages:upsert:' || NEW."object_id",
\t\t\t\t\t\t\t\t-- optional extra data
                json_build_object(
                        'event', 'upsert',
                        'objectId', NEW."object_id"
\t\t\t\t\t\t\t\t\t\t\t\t-- just an example optional JSON object data
                    )::text);
    RETURN NEW;
END;
$notify_messages_upserted$ LANGUAGE plpgsql;
\`\`\`

Secondly create the trigger and attach it on the \`messages\` table. It will run the function above on every UPSERT event.

\`\`\`sql
DROP TRIGGER IF EXISTS messages_upserted_trigger ON messages;
CREATE TRIGGER messages_upserted_trigger
    AFTER INSERT OR UPDATE ON messages 
    FOR EACH ROW
EXECUTE PROCEDURE notify_messages_upserted();
\`\`\`

There is no

## Postgraphile

## GraphQL client`;

export const article15Metadata: ArticleIntro = {
  title: `Introduction to realtime Postgraphile with custom subscriptions`,
  postId: "postgraphile-subscriptions",
  url: "https://emergence-engineering.com/blog/postgraphile-subscriptions",
  author: "",
  timestamp: 1689149207117,
  authorLink: "https://emergence-engineering.com/cv/torcsi",
  introText:
    "Step by step introduction, best practices and gotchas for building real time Postgraphile backend with custom subscriptions.",
  imgSrc: "",
  tags: ["Postgraphile", "Real-time Subscriptions", "Backend Development"],
};

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article15Metadata.url}
        title={article15Metadata.title}
        description={article15Metadata.introText}
        imgSrc={article15Metadata.imgSrc}
      />
      <ArticleHeader
        title={article15Metadata.title}
        author={article15Metadata.author}
        timestamp={article15Metadata.timestamp}
        tags={article15Metadata.tags}
      />
      <Markdown source={MD0} />
    </ArticleWrapper>
  );
}
