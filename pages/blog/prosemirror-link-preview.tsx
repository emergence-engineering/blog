import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-link-preview/editor"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article11Metadata: ArticleIntro = {
  title: "prosemirror-link-preview: Link preview for prosemirror!",
  author: "Viktor and matejcsok",
  authorLink: null,
  introText: /* language=md */ `An open source link preview plugin for prosemirror made by Emergence-Engineering.`,
  postId: "prosemirror-link-preview",
  timestamp: 1684339200011,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-link-preview",
};

const MD0 = /* language=md */ `
# Introducing ProseMirror-Link-Preview Plugin: Enhancing Your Editing Experience

## Introduction
The **proseMirror-link-preview** plugin adds Discord and Slack like link previews to your Prosemirror editor. The plugin catches pasted links and renders a preview automatically. Follow along to learn more about the plugin and how to use it in your project.

## Features

1. **Dynamic Link Previews**: Whenever a valid URL is pasted into a ProseMirror document, the plugin automatically calls **your callback** function that fetches the necessary metadata, and the plugin renders a preview, providing a quick glimpse into the content behind the link.

2. **Rich Preview Styles**: By default the plugin creates a preview that resembles the style of most social media platforms link sharing cards. It makes it easier to differentiate between regular text and linked content. The preview includes information such as the title, description, and an image associated with the link, where available based on Open Graph metadata.

3. **Configurable Behavior**: The plugin provides configuration options, allowing users to customize the behavior and appearance of link previews according to their specific needs. From adjusting the preview size to defining custom CSS styles, the plugin offers flexibility to match the desired editing environment.

`;

const MD1 = /* language=md */ `

# Caveat
Because of CORS you can't fetch the link preview from the client directly. You need to have a custom backend that will fetch the link preview for you. You either use payed OpenGraph fetcher API or use \`link-preview-js\` library on your backend to do this. In this article we will use \`link-preview-js\` with Next.js API to do this. Since the Next.js API is very similar to Express.js, you can just copy and paste the code to Express.js servers as well.

# How to use it


1. **Installation**: Install the plugin from your preferred JavaScript package manager. For example, using npm, run the following command:
\`npm i -S prosemirror-link-preview\`
2. **Import**: Import the plugin into your project. You also need to import some utility functions from the plugin to help with the configuration process.
\`\`\`typescript
import { 
  previewPlugin,
  addPreviewNode,
  apply, // for plain prosemirror
  createDecorations, // for plain prosemirror
  findPlaceholder, // for plain prosemirror
  applyYjs, // for yjs users
  createDecorationsYjs, // for yjs users
  findPlaceholderYjs, // for yjs users
 } from "prosemirror-link-preview";
\`\`\`
3. Import the CSS file for your setup. You can use your custom css to style the preview, here is an example(which is the actual css used by default)
\`\`\`typescript
import "prosemirror-link-preview/dist/styles/styles.css";
\`\`\`

- basic card structure

\`\`\`html
<div className="preview-root">
  <div className="preview-image" />
  <div className="preview-title" />
  <div className="preview-description" />
</div>
\`\`\`

4. Update the image node in the ProseMirror schema to have all the necessary properties  with \`addPreviewNode\`
\`\`\`typescript

const mySchema = new Schema({
  nodes: addPreviewNode(schema.spec.nodes),
  marks: schema.spec.marks,
});
\`\`\`

5. Initialize the editor with the plugin
\`\`\`typescript
    const v = new EditorView(document.querySelector("#editor") as HTMLElement, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(
          document.createElement("div")
        ),
        plugins: [
          ...exampleSetup({ schema: mySchema }),
          ySyncPlugin(yXmlFragment),
          yUndoPlugin(),
          previewPlugin(
            mySchema,
            async (link: string) => {
              const data = await fetch("/api/link-preview", {
                method: "POST",
                body: JSON.stringify({
                  link,
                }),
              });
              const {
                data: { url, title, description, images },
              } = await data.json();
              return { url, title, description, images };
            },
            applyYjs,
            createDecorationsYjs,
            findPlaceholderYjs
          ),
        ],
      }),
    });
\`\`\`

6. \`previewPlugin\` requires 5 parameters:
- \`schema\`: the ProseMirror schema updated with \`addPreviewNode\`
- \`fetchLinkPreview\`: a function that takes a link and returns a \`Promise\` that resolves to the link preview data, you can easily do this using next.js API routes
or just using \`link-preview-js\` library on your custom backend
\`\`\`typescript
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { getLinkPreview } from "link-preview-js";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const { link } = JSON.parse(req.body);
  console.log({ link });

  const data = await getLinkPreview(link);

  // Rest of the API logic
  res.json({ data });
}
\`\`\`
- \`apply\`: import from \`prosemirror-link-preview\`
- \`createDecorations\`: import from \`prosemirror-link-preview\`
- \`findPlaceholder\`: import from \`prosemirror-link-preview\`
- \`defaultOptions\`:

\`\`\`typescript
export interface IDefaultOptions {
  openLinkOnClick: boolean; // if true, onClick opens the original link in a new browser tab
}
\`\`\`

You can check out the docs at <https://github.com/emergence-engineering/prosemirror-link-preview/tree/main>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article11Metadata.url}
      title={article11Metadata.title}
      description={article11Metadata.introText}
      imgSrc={article11Metadata.imgSrc}
    />
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
