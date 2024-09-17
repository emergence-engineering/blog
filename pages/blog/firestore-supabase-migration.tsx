import React from "react";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";

export const firestoreToSupabaseMigrationMetadata: ArticleIntro = {
  title: "Guide for migrating firestore db to supabase",
  author: "Viktor and matejcsok",
  authorLink: null,
  introText: /* language=md */ `Give up simplicity for nice query capabilities`,
  postId: "firestore-suapabase-migration",
  timestamp: 1726239715027,
  imgSrc: "http://localhost:3000/lp/migration.webp",
  url: "https://emergence-engineering.com/blog/firestore-supabase-migration",
  tags: ["Supabase", "Firestore", "Migration", "Database"],
};

const MD0 = /* language=md */ `
![alt text](http://localhost:3000/lp/migration.webp)
## Introduction
Firestore is a great NO-SQL database, and it offers a lot of easy to use features. We have some own projects like [PlaceOfCards](https://placeofcards.com), or [SzamlaBridge](https://szamlabridge.com) which we started using Firestore as our database/backend/email server, but as these projects got bigger we faced some difficulities, like the ability to easily query through our database for some reports, or managing migrations, which are also possible in Firestore but quite cumbersome compared to Supabase. Supabase is a great alternative to Firestore, it offers a lot of advanced features like Postgres query capabilities, RLS policies, and more. In this article, we will guide you through the migration process from Firestore to Supabase as we did it.

## The Plan
Our workflow consists of 3 steps:
### Create a schema(store collections as they are with nested objects), and write Supabase db writes.  
At this stage we write into both databases, by this time we did not have RLS policies, and we moved all the db writes from the frontend if we had any, to our \`Next.js\` backend (which is authenticated by firestore's auth token) and used the Supabase \`service_role_key\`. Frontend authentication was still done by Firestore.
### Create the data migration scripts with some testing acpabilities  
Meaning we can run the scripts multiple times through out the migration process, and it will also check if any data missing from Supabase - at this stage we are writing into both databases, and also ran the migration script, and we ran it a few times to make sure that we have all the data in Supabase until we are done with step 3.
### Add RLS policies, and change the auth to Supabase, and remove Firestore at all, and write the Supabase reads  
At this point we have no Firestore reads/writes, we migrated our data to Supabase, and we read/write data from/to Supabase.

## Database schema
The first important question is: Do we have nested objects in our Firestore documents? If yes, then we need to think about it for a second, we can go 2 ways here:
- Flatten the objects and store them in separate tables - this could be quite time consuming, but could help a lot later, like generated types by Supabase CLI, and managing \`datetime\`
- Migrate collections as they are to Supabase tables (Supabase lets you to store data in \`JSONB\` objects) - makes migration much easier and way faster, and in the long run we can write migrations later to flatten our tables

## RLS policies

## Auth migration
For auth migration we used the official [Migrate from Firebase Auth to Supabase](https://supabase.com/docs/guides/resources/migrating-to-supabase/firebase-auth) docs. It is quite straightforward, just takes some time to gather all the information from Firestore and Supabase.

### Auth vs \`userProfile\`
Here we usually have a \`userProfile\` collection in Firestore, and if we reference \`uid\` in other collections, then we need to make sure that we do not lost those ids, as in \`auth.users\` we can not keep those ids. But we can easily connect  our new \`userProfile\` table with the \`auth.users\` table, which is also important for the RLSP policies later.

\`\`\`sql
-- update userProfile.id with auth.users.id
WITH auth_data AS (
  SELECT
      raw_user_meta_data->'fbuser'->>'uid' AS uid,
      id AS auth_id
  FROM 
      auth.users
)
UPDATE public.userProfile
SET id = auth_data.auth_id
FROM auth_data
WHERE public.userProfile.uid = auth_data.uid;
\`\`\`

## Database migration
This is the hard part, you need to write a lot of scripts, it depends on how many collections, nested objects you have, and if you flattened the schema or choose to migrate collections as they are.

## Transacrion
In case you have transactions which are supported in Firestore, in Supabase transactions are not supported, but no worries, you can use [Kysely](https://kysely.dev)

## Supabase realtime

## Storage
`;

const MD1 = `
`;

const MD2 = `
`;

const MD3 = `
`;

const MD4 = `
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={firestoreToSupabaseMigrationMetadata.url}
      title={firestoreToSupabaseMigrationMetadata.title}
      description={firestoreToSupabaseMigrationMetadata.introText}
      imgSrc={firestoreToSupabaseMigrationMetadata.imgSrc}
    />
    <ArticleHeader
      title={firestoreToSupabaseMigrationMetadata.title}
      author={firestoreToSupabaseMigrationMetadata.author}
      timestamp={firestoreToSupabaseMigrationMetadata.timestamp}
      tags={firestoreToSupabaseMigrationMetadata.tags}
    />
    <Markdown source={MD0} />
    <Markdown source={MD1} />
    <Markdown source={MD2} />
    <Markdown source={MD3} />
    <Markdown source={MD4} />
    {/* loading indicator */}
  </ArticleWrapper>
);

export default Article;
