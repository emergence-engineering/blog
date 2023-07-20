import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import SalesBox from "../../features/article/components/SalesBox";
import ArticleHeader from "../../features/article/components/ArticleHeader";
import React from "react";

export const MD0 = /* language=md */ `
# TLDR
With about a hundred lines of code, you can build a collaborative editor backend with role based access control, using Hocuspocus and Supabase.

# Introduction 

The focus of our company is building collaborative rich text editors and collaborative user interfaces for web or mobile applications.
In this article we will focus on collaborative text editing, but the same principles apply to any collaborative UIs.

## Synchronisation is a hard problem.
When building collaborative stuff the common challenge is to synchronize the data between the clients.
When multiple users edit a single document a lot of things can go wrong.
User experience has to be seamless even for large documents, even when a lot of people edit large documents, even when groups of people edit large documents concurrently.
Not all users have all kind of access in a document. Maybe a user only has read and commenting access.
Anyway you get the idea... 
 

## Our history with collaborative UIs
We used ProseMirror for a long time. It has a good support for collaborative editing out of the box, but it is not complete.
[prosemirror-colab](https://prosemirror.net/docs/guide/#collab) will resolve conflicts for you, but you have to implement the backend yourself.
You can do everything with websockets manually, just tell a server when a user edits and synchronize the docs via websockets. 
That means a lot of code to write, to maintain and to avoid pitfalls. Who wants to do that?
Before Hocuspocus we relied on realtime solutions like Firebase live queries and GraphQL subscriptions so that we don't have to deal with websockets, but still it's a lot of work.
And this is where Hocuspocus comes in the picture, it's an out-of-the-box backend for real time collaboration.

## We tried it on real projects
Recently we started using Hocuspocus for a couple of new projects. (By the way you can use Hocuspocus with any database).

# Hocuspocus?

Hocuspocus abstracts away a great deal of the hassle of building collaborative stuff. As we will show you can bootstrap a collaborative editor relatively quickly.

## What is Hocuspocus exactly?
[Hocuspocus](https://tiptap.dev/hocuspocus/introduction) is a standalone server library for synchronizing [Ydocs from Y.js](https://github.com/yjs/yjs) across multiple clients. It was developed by the amazing engineers at TipTap.
If you want collaborative editing in your application, you will probably come across Yjs and [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)s. It is a great library, but it is not a complete solution, you will need something to synchronize the data.
The Hocuspocus Server is a WebSocket backend, which has everything to get started quickly, to integrate Y.js in your existing infrastructure and to scale to a million users.

# Supabase

The focus of this article is not Supabase, but we tend to use it more and more recently. Especially for MVPs and small projects.
[Supabase](https://supabase.io/) is an open source Firebase alternative. 
It is a hosted Postgres database with a realtime API and a dashboard. 
It has authentication and [RLS](https://supabase.com/docs/guides/auth/row-level-security) policies integrated to it. 
It is a great tool to get started quickly, and it is free for small projects, but the paid version has almost the same prices as AWS.

# Now the hands-on part

## Authentication and role handling

The interesting part starts when you want to integrate authentication and role handling from Supabase into Hocuspocus.
The other interesting part when some features are not properly documented, so you have to dig into the source code to find out how to use them.
For example from the server side client login with the Supabase JWT user tokens init looks like this:
\`\`\`typescript
const getSupabaseClient = async <DB>(refreshToken: string, accessToken: string): Promise<SupabaseClient<DB>> => {
  const supabase = createClient<DB>(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      auth: {
        autoRefreshToken: false, // All my Supabase access is from server, so no need to refresh the token
        detectSessionInUrl: false, // We are not using OAuth, so we don't need this. Also, we are manually "detecting" the session in the server-side code
        persistSession: false // All our access is from server, so no need to persist the session to browser's local storage
      }
    });
  const res = await supabase.auth.setSession({
    refresh_token: refreshToken,
    access_token: accessToken
  });
  if (res.error) {
    throw Error("Invalid token");
  }
  return supabase;
}
\`\`\`

The build in auth can add the validated tokens to the context.

\`\`\`typescript
const auth = async (data: onAuthenticatePayload) => {
  const { token } = data;

  try {
    const { refreshToken, accessToken } = JSON.parse(token);
    const supabase = await getSupabaseClient<SDB>(refreshToken, accessToken);

    const userResp = await supabase.auth.getUser();
    if(userResp.error) {
      throw Error("Invalid token");
    }
    const user = userResp.data.user

    // You can set contextual data to use it in other hooks
    return {
      user,
      refreshToken,
      accessToken
    };
  } catch (error) {
    throw Error("Invalid token");
  }
}
\`\`\` 

If we have the context set, you can use the [Hocuspocus Database extension](https://tiptap.dev/hocuspocus/api/extensions/database) for read, but if you want to force-write on some user actions, you can't really use the [onStoreDocument](https://tiptap.dev/hocuspocus/api/hooks/on-store-document).
If you are okay with a non-recent version in your database (most of the cases this should be ok), you can write the store hook to save too.

If you have a documents table in your database, and some "readonly" role in a roles table, you can use the following code which will cover the read-only, and preloading functionality.
\`\`\`typescript
const dbConfig: DatabaseConfiguration = {
  fetch: async (data: fetchPayload): Promise<Uint8Array | null> => {
    const supabase = await getSupabaseClient<SDB>(data.context.refreshToken, data.context.accessToken);

    const doc = await supabase
      .from("documents")
      .select()
      .eq("id", data.documentName)
      .single();
    if (doc.error) {
      console.log(data.documentName);
      console.log(doc.error);
      throw Error("Document not found");
    }
    const role = await supabase
      .from("roles")
      .select()
      .eq("org_id", doc.data.owner_id)
      .eq("user_id", data.context.user.id)
      .single();
    if (role.error) {
      throw Error("Role not found"); // this should never happen bcs of RLS
    }
    if (role.data.readonly) {
      data.connection.readOnly = true; // this sets the state to readonly
    }
    return new Uint8Array(Buffer.from(doc.data.data, "base64"));
  },
  store: (): void => {
    // we do nothing here, the user will store the data on click events
  }
};
\`\`\`

After these relatively straightforward steps, you can start the Hocuspocus server with Supabase as a backend.
\`\`\`typescript
const startServer = async () => {
  const PORT = process.env.PORT ?? "8080";
  // Configure hocuspocus
  const server = Server.configure({
    port: PORT,
    onAuthenticate: auth,
    extensions: [
      new Database(dbConfig)
    ]
  });

  const { app } = expressWebsockets(express());

  app.get("/", (request, response) => {
    response.send("Hello World!");
  });

  app.ws("/collaboration/:document", (websocket, request) => {
    server.handleConnection(websocket, request, request.params.document);
  });

  app.listen(PORT, () => {
    console.log(\`App is listening on \${PORT}\`);
  });

};

startServer();
\`\`\`

In your frontend code you can use the [Hocuspocus provider](https://tiptap.dev/hocuspocus/provider/introduction) library to connect to the server (with [@supabase/auth-helpers-react](https://github.com/supabase/auth-helpers)).
\`\`\`typescript
const supabaseSession = useSession(); // from supabase

const wsProvider = useMemo(() => {
    if (ydoc && supabaseSession && process.env.NEXT_PUBLIC_HOCUSPOCUS_SERVICE_URI) {
      const token = JSON.stringify({
            refreshToken: supabaseSession.refresh_token,
            accessToken: supabaseSession.access_token,
          })
      return new HocuspocusProvider({
        url: \`ws://${process.env.NEXT_PUBLIC_HOCUSPOCUS_SERVICE_URI}/collaboration\`,
        name: uid ?? "test",
        document: ydoc,
        token,
      });
    }
  }, [supabaseSession, uid, ydoc]);
\`\`\`

If you need a quick snippet about our RLS policies, here it is:
\`\`\`sql
create policy "Only do things based on owner_id"
on "public"."documents"
as permissive
for all
to authenticated
using ((EXISTS ( SELECT 1
   FROM "roles"
  WHERE ((documents.owner_id = "roles".org_id)))));
  
create policy "Only do things based on user_id"
on "public"."roles"
as permissive
for all
to authenticated
using ((user_id = auth.uid()));
\`\`\`
`;

export const article12Metadata: ArticleIntro = {
  title: `Hocuspocus with Supabase`,
  postId: "hocuspocus-with-supabase",
  url: "https://emergence-engineering.com/blog/hocuspocus-with-supabase",
  author: "Törcsi & Balazs",
  timestamp: 1686009600000,
  authorLink: "https://emergence-engineering.com/cv/torcsi",
  introText:
    "A quick tutorial on how to use Hocuspocus with Supabase to build a quick collaborative editor backend.",
};

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article12Metadata.url}
        title={article12Metadata.title}
        description={article12Metadata.introText}
        imgSrc={article12Metadata.imgSrc}
      />
      <ArticleHeader
        title={article12Metadata.title}
        author={article12Metadata.author}
        timestamp={article12Metadata.timestamp}
      />
      <Markdown source={MD0} />
      <SalesBox />
    </ArticleWrapper>
  );
}
