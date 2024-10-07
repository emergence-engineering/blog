import React from "react";
import YouTube from "react-youtube";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";
import RightArrow from "../../public/right-arrow.svg";
import { Button } from "../../features/twLandingPage/twComponents/Button";
import { scrollToContact } from "../../features/twLandingPage/utils/scrollToContact";

export const firestoreToSupabaseMigrationMetadata: ArticleIntro = {
  title: "How to migrate from Firebase to Supabase?",
  author: "Viktor and matejcsok",
  authorLink: null,
  introText: /* language=md */ `Step-by-step guide for migrating a Firebase project to Supabase`,
  postId: "firestore-suapabase-migration",
  timestamp: 1726239715027,
  imgSrc: "http://localhost:3000/lp/migration.webp",
  url: "https://emergence-engineering.com/blog/firestore-supabase-migration",
  tags: ["Supabase", "Firestore", "Migration", "Database"],
};

const MD0 = /* language=md */ `
![Supabase vs Firebase](https://blog-git-blog-supabase-migration-emergence-engineering.vercel.app/lp/migration.webp)

## TL;DR

If you're having performance issues with Firebase, switching to Supabase might be an option. However, you might already have some users therefore you don't want to shut down while you are migrating. We experienced the same with some of our products using Firebase so we decided to switch and write about the process. In this article, we provide a step-by-step guide to migrating your web app from Firebase to Supabase while keeping it live. 

If you don't want to do this yourself, leave us a message. 

## Introduction

[SzamlaBridge](https://www.szamlabridge.com) - fixes legal issues with Stripe in Hungary - and [PlaceOfCards](https://www.placeofcards.com) - place cards for weddings and other events - both used Firebase, but we faced common problems: hard and tedious schema migrations and query issues. Therefore, we decided to move to Supabase since we knew that it would solve these problems. Migrating projects is tedious, but we succeeded and learned a lot.

# When to go NoSQL

There are common misconceptions about NoSQL databases like Firebase or DynamoDB:

- It’s essentially an object storage, which means that you can be very flexible with your data
- Because of that flexibility it’s easy to add new / unplanned features to your app

In reality the opposite is true: NoSQL databases can be great if you

- Know your access patterns really well before building your application
- You never want to migrate your data

For small teams or startups seeking product-market fit, this is not a good deal: your data will change a lot, new business requirements will emerge, and “sorry, we can’t query that” is not acceptable! The right way to do “joins” in NoSQL databases is to store the data in multiple collections, if that data can change (for example a dog has an owner but the \`ownerId\` can change), then you’ll have to set up triggers that keep all those \`id\`s in sync. That’s a lot of work, and it’s easy to mess up. You need a different mindset for NoSQL DBs, but most engineering teams lack the necessary discipline and knowledge for that to work.

Relational vs NoSQL is similar to typed vs untyped like TypeScript vs JavaScript:

- In a relational DB you know what the contents are (generally, let’s not count JSONB columns), like you know what’s the shape of an object in TS. You don’t have that hard guarantee with NoSQL / JS.
- JS can work very well if every member of your team knows the code from the inside out and is disciplined. With TS you don’t need that much discipline since the type checker prevents obvious errors, like reading something from an object / database which doesn’t exist.

I’ve learned a lot from [this video](https://www.youtube.com/watch?v=HaEPXoXVf2k), it’s about DynamoDB but the essence applies to Firestore too:
`;

const MD1 = /* language=md */ `
In short: Choose NoSQL only if you really know what you’re doing.

# Why we switched

Firestore is the Firebase DB with unique features that were impressive back then:

- set up Firestore rules and write your database directly from the frontend, saving a lot of development time
- subscribe to database changes and have them live update on your frontend with minimal effort
- scale from 0 to “infinity” with usage-based pricing

These things were game changers: if you knew that what Firebase offers is enough for you then you could quickly make a working app. But weaknesses and strengths go hand in hand:

- Firestore doesn’t have a schema, so migrations are very very hard
- Queries can be tough: you can’t join Firestore collections, some queries are impossible to do efficiently without duplicating data.

PlaceOfCards needed a lot of migrations, SzamlaBridge needed queries for reporting. Supabase is based on PostgreSQL but supports both subscriptions and writing directly from the frontend using Row-level security (RLS) policies. We made the decision: let’s start with PlaceOfCards, a low-risk project where we can allow downtime then let’s do SzamlaBridge where we must avoid any downtime.

# Migration Principles

### Be as quick as possible

If some work can wait, let’s postpone it, even if it means more work down the line. The reason behind this is that a migration blocks everyone on the project. A migration can take _long;_ don’t make it longer than absolutely necessary. Any database schema code improvements should come after the migration is done and the production and staging environments both use the new db. The point of the migration is not to make the database structure better, or make any part of the code better, but to switch databases for future improvements.

### Separate work into distinct steps

Migrating a database involves multiple steps: setting up writes, migrating data, setting up reads, and removing the old database for example. It’s tempting to merge some of these steps and do them in one since “we’re already touching the frontend, why not add this X step too?”. It’s never that easy, and it always looks easy first. Just don’t, unless you enjoy getting entangled into problems.

### No gaps between steps

Ensure the service is 100% online during the migration, if not, minimize the stoppage.

# Our migration workflow

In short:

1. Auth migration
2. Schema & RLS
3. Migration script
4. DB Write migration
Intermission: First deployment
5. DB Read migration
6. Remove Firestore usage
7. Swap Auth to Supabase

Let’s get to it!

### Step 1: Auth migration

The first step of the migration is migrating auth from Firebase to Supabase. There’s a problem: Supabase Auth’s \`auth.users\` stores userIds as \`uuid\` while Firebase stores them as strings and all collections referencing users use that string. We need to connect Supabase ids to Firebase ids. Our solution was that when we migrate the \`userProfile\` Firebase table we add an extra field to the corresponding \`userProfile\` Supabase table that stores the user’s \`uuid\` .

With that in mind, the next steps are:

1. Create a new Firebase function that is triggered on user creation  
This function will write new users into Supabase whenever there is a new one in Firebase  
2. Migrate Firestore auth data and the custom \`userProfile\` collection - using custom migration script for userProfile and [https://supabase.com/docs/guides/resources/migrating-to-supabase/firebase-auth](https://supabase.com/docs/guides/resources/migrating-to-supabase/firebase-auth) to migrate Firestore Auth

At this point both Supabase and Firebase have the same users and are synced up. Supabase and Firebase store \`userId\`s differently, make sure to save the Firebase userId in the Supabase db too! It will be needed for the next step which will address the login problem:  

3. Create a new authenticated backend endpoint which creates a Supabase JWT token, based on the Firestore uid for authenticating Supabase on the frontend using Firebase auth.  

   We have Firebase Auth on the frontend already and we don’t want our users to log into both services; this step allows us to keep Firebase Auth in place. Don’t worry, the switch to Supabase Auth will happen when the Supabase parts are all done.  

   We can authenticate our \`supabase.js\` \`createClient\` with a JWT created from the supabase’s \`auth.users.uid\`  

\`\`\`ts
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and Key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true, // Automatically refreshes the token
    persistSession: true,   // Persists the session in storage
    detectSessionInUrl: true, // Detects session in the URL for OAuth
    storageKey: 'your_custom_storage_key', // Optional custom storage key
    // Other auth options can be added here based on your needs
  },
  global: {
    headers: {
      Authorization: \`Bearer YOUR_JWT_TOKEN\`, // set the JWT token here if managing manually
    },
  },
});

export default supabase;

\`\`\`

After these steps we can start the actual database migration, since we have everything in place to authenticate Supabase and use Postgres RLS policies.

### Step 2: DB schema and RLS policies

To get through the migration faster and minimize blocking other features, our DB schema has the same structure as we had in Firestore. Nested objects are not “nice” in a relational database, but supported by JSONB - we’ll normalize the database progressively by adding migrations that parse these JSONB columns. We could do the same work here, but it breaks our principles: it could take a long time and with Firebase you can never be sure about the contents: you can deal with your inconsistent data later, step by step.

- Putting the Supabase DB writes and RLS policies in place are needed before the first deploy.
- RLS policies are SQL-based compared to Firestore rules, which is Firestore’s own syntax, and also more capable to write more robust and complex policies

### Step 3: Data migration script

We need something to move our data from Firestore to Supabase’s Postgres: a script. We’ll also need something to check if the two DBs contain the same data. We decided to have a single script that covers both:

- \`—-force\` mode that overwrites the Supabase table row if it’s not equal to the Firestore document
- \`--quiet\` mode that shows which documents differ in the two DBs, without writing anything
- By default, it will copy over documents that are missing from Postgres

With these features we can cover all of our use cases:

- Copy all the data initially with the default mode
- Check if our work is correct during the migration process with \`--quiet\`
- If we encounter an issue, we can try again with \`--force\`

At this point nothing depends on the Supabase DB, if you make an error there will be no consequences. This will change after the next step!

### Step 4: Supabase DB writes

On the backend you probably used \`firebase-admin\`, Supabase \`service-role-key\` will do the same. If the endpoints are authenticated with the Firebase auth token, then now the backend authentication will also have to check for Supabase access token, meaning that it can accept either of those. This way the switch can be gradual.

On the frontend, every time you are writing to Firestore, you will need to write to Supabase too: we separated the DB writing parts of the code to make that easier. No need to sweat it, the migration script’s \`--quiet\` mode will catch errors! Here’s the part where we use the endpoint created in step 3 of the Auth migration to initialize Supabase. After this is deployed the Supabase DB is essentially a replica of Firestore, make sure that errors in it don’t break the application, they will show up when running the migration script. We also made sure to test our RLS policies as well since in the next step the Supabase DB will be public.

### Intermission: First deployment

We run our database migration script, then deploy the current state with the Supabase writes in place. There’s a little bit of time gap between the two, let’s run the migration script once again with \`--force\`. After that the two DBs are in sync, we check that with \`--quiet\` every few days.

Why was it important to deploy our app here, why not do it at the end when everything is done?

- to avoid one big step
- to have a working app that writes into both databases, and you can test if everything works fine or not

Now we need to read the values stored in Supabase.

### Step 5: Firebase → Supabase DB reads

The two databases are in sync, we can authenticate both, that means it doesn’t matter which one we read from! This is the first step which can break the application, go slowly, deploy often if a part is ready.

The backend part: our authenticated backend still depends on Firebase Auth, but we can read all the information from Supabase.

The frontend part: thanks to our Supabase JWT token generation from Firebase Auth we can change the reads one by one. This can be a bit time-consuming because Firebase subscriptions are a bit easier, but it’s not rocket science, just a bit of work.

At this point we have an app that works with Supabase!

### Step 6: Remove Firestore reads/writes

The final step is to remove Firestore usage. Be sure that your app works correctly by running the migration script with \`--quiet\`, if you see no issues then you can go ahead and remove Firestore from your app.

### Step 7: Swap Firebase authentication with Supabase authentication

Or keep the Firebase Auth and consider it done

The authenticated endpoints can be moved to Supabase:

1. Change the frontend fetch calls to use Supabase auth instead of Firebase and deploy
2. Remove the Firebase auth checks from your endpoints

After this step, you no longer need to authenticate with the JWT endpoint, so you can remove the unnecessary code and stop that endpoint.

Aaaand that’s it!

`;

const MD2 = /* language=md */ `

## What we learned

### Transactions

Firestore supports transactions, but Supabase doesn’t. You can use [Kysely](https://kysely.dev/) to achieve the same.

Here’s help for running both existing Firestore and the new Kysely transactions simultaneously:

\`\`\`ts
// Transaction wrapper
import { Transaction } from "kysely"
import * as admin from "firebase-admin"

export const runTransaction = async (
  callback: (trMerged: { firebaseTr: admin.firestore.Transaction; supabaseTr: Transaction<Database> }) => Promise<any>,
) => {
  return await db.transaction().execute(async (tr2) => {
    return await adminDb.runTransaction(async (tr) => {
      const trMerged = { firebaseTr: tr, supabaseTr: tr2 };
      return await callback(trMerged);
    });
  });
};
\`\`\`

## Supabase vs Firebase

### realtime vs subscriptions

For simple queries Firestore utility is much easier to use and quicker to develop with; on the other hand Supabase realtime is not that hard and way more flexible as it is SQL-based.

It’s important to note that Firestore is more scalable, while Supabase solution is based on Postgres replication and it’s a lot of heavy lifting on their end. So their pricing is very steep, in the Pro tier 500 concurrent connections is included, after that they charge $10 per 1000 connections. If a page has 10 objects that need realtime updates you can easily hit the ceiling by having 50 users viewing it at the same time. You don’t need to pay anything extra for the same thing in Firestore.

\`\`\`ts
// Firestore
import { getFirestore, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';

  const [value, loading, error] = useDocument(
    doc(getFirestore(firebaseApp), 'hooks', 'nBShXiRGFAhuiPfBaGpt'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // Supabase
import { PostgrestError, RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "./databases/supabase";

import { Collections, IntentItem, PublicConnection, PublicIntentItem, PublicUser } from "./db";

  const [data, setData] = useState<PublicUser[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase
      .from(Collections.users)
      .select()
      .ilike("email", \`%\${term}%\`)
      .then(({ data, error }) => {
        if (error) {
          setError(error);
          setIsLoading(false);
          return;
        }
        setData(data);
        setIsLoading(false);
      });
  }, [term]);

  useEffect(() => {
    const ch = supabase
      .channel(channel)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: Collections.users },
        (payload: RealtimePostgresChangesPayload<PublicUser>) => {
          setData((data) =>
            data.map((item) => (item.uid === (payload.old as PublicUser).uid ? (payload.new as PublicUser) : item)),
          );
          setIsLoading(false);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(ch);
    };
  }, [channel]);

\`\`\`

Supabase also allows listening on \`INSERT, UPDATE,\` \`DELETE\` events separately or all at once; on the other hand Firestore just listens on everything.

### Pagination

We needed a paginated table displaying real-time information from a single collection. Doing this with Firebase is _really_ hard because they only support cursor pagination, we started working on it but ran into various corner cases and decided to abandon it if we migrate anyway. It took 10 mins when we switched to Supabase Postgres.

### Dates

Firestore uses its own \`Timestamp\` format, and Supabase uses \`ISOString\`

- When writing your migration scripts - convert \`Timestamp\` to \`ISOString\`
- Have nested objects that become \`JSONB\`s?

  - Here you will keep \`Timestamp\` but not the Firestore one, but a plain

\`\`\`ts
{
_nanoseconds: number,
_seconds: number
}

\`\`\`

That means the data from Supabase won’t be the same as in Firebase if the nested object contains a \`Timestamp\`, so the frontend code would have to change. There’s a workaround for that:

Write a \`convertToTimestamp\` recursive function that checks objects and looks for the object above and converts those to Firestore \`Timestamp\` and also converts \`ISOString\` to \`Timestamp\`. If every Supabase read is wrapped with that function then the frontend receives the same data, and the migration will be quicker. Later those calls to \`convertToTimestamp\` can be removed by rewriting the frontend parts to use what’s stored in Supabase.

## The end

If you are seeking for more information, or looking for a team to help you with your migration, feel free to reach out to us on the form below, or schedule a call.
`;

const Article = () => {
  return (
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
      <YouTube videoId="HaEPXoXVf2k" />
      <Markdown source={MD1} />
      <div className="mb-4 flex w-full flex-col justify-between gap-4 self-center rounded-lg border p-8 lg:flex-row lg:gap-0">
        <div className="text-center font-sans text-3xl font-bold">
          Need help migrating to Supabase?
        </div>
        <div className="hidden lg:flex lg:flex-col lg:justify-center">
          <RightArrow />
        </div>
        <Button
          label="Contact us"
          theme="primary"
          handleClick={scrollToContact}
          className="self-center"
        />
      </div>
      <Markdown source={MD2} />
    </ArticleWrapper>
  );
};

export default Article;
