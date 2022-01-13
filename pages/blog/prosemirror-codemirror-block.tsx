// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import Disqus from "../../features/disqus/Disqus";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-codemirror-block-cm5"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article5Metadata: ArticleIntro = {
  title: "prosemirror-image-plugin v2: Resizable images!",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `A 2.0 update for [ProseMirror image plugin](https://gitlab.com/emergence-engineering/prosemirror-image-plugin) with resizable images!
  `,
  postId: "prosemirror-image-plugin-2",
  timestamp: 1630365909328,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-image-plugin-2",
};

const MD0 = /* language=md */ `
# What's this about?

A 2.0 update for [ProseMirror image plugin](https://gitlab.com/emergence-engineering/prosemirror-image-plugin)
with resizable images!

It already had a lot of features:
- Optional **image title**
- Customizable image **overlay**
- Image **alignment** ( center, full width, left and right are default )
- Easy **image uploading** trough a HTTP endpoint
- Optionally removing deleted images
- Image **drop** & data URL **paste** handling

And now resizable images are added with:
- switchable **scaling** ( resized images scale with editor width )
- an **updated overlay** if resize is enabled ( removed the \`fullWidth\` option )
- **css files** distributed with the module for different resize styles
- **body resize** listener so your images won't be to big even if the browser is resized
- settable max/min image size and image margins
- support for **inline image** nodes ( not compatible with titles! )

Check it out! You can try different styles with the selects below:

[The code for this post is here](https://gitlab.com/emergence-engineering/blog/-/tree/master/articles/prosemirror-image-plugin-2)
`;

const MD1 = /* language=md */ `
# How to use?

1. Install the plugin: **npm i -S prosemirror-image-plugin**
2. Import the CSS files for your setup
3. Import **defaultSettings** from the plugin ( and modify it if you want )
4. Update the image node in the ProseMirror schema to have all the necessary properties  with \`updateImageNode\`
5. Initialize the editor with the plugin

In codespeak:
\`\`\`typescript
import { schema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { defaultSettings } from "prosemirror-image-plugin";

import "prosemirror-image-plugin/dist/styles/common.css";
import "prosemirror-image-plugin/dist/styles/withResize.css";
import "prosemirror-image-plugin/dist/styles/sideResize.css";

// Update your settings here!
const imageSettings = {...defaultSettings};

const imageSchema = new Schema({
  nodes: updateImageNode(schema.spec.nodes, {
    ...imageSettings,
  }),
  marks: schema.spec.marks,
});

const initialDoc = {
  content: [
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
};

const state = EditorState.create({
  doc: imageSchema.nodeFromJSON(initialDoc),
  plugins: [
    ...exampleSetup({
      schema: imageSchema,
      menuContent: menu,
    }),
    imagePlugin(imageSchema, { ...imageSettings }),
  ],
});

const view: EditorView = new EditorView(document.getElementById("editor"), {
  state,
});
\`\`\`

You might also want to add
\`\`\`css
display: flow-root;
\`\`\`
to the editor style in order to have correct floating images.


Now....You have better images, and the world just got a bit better.

You can check out the docs at <https://gitlab.com/emergence-engineering/prosemirror-image-plugin>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article5Metadata.url}
      title={article5Metadata.title}
      description={article5Metadata.introText}
      imgSrc={article5Metadata.imgSrc}
    />
    {/* <Markdown source={MD0} /> */}
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    {/* <Markdown source={MD1} /> */}
    <SalesBox />
    <Disqus pageUrl={article5Metadata.url} pageId={article5Metadata.postId} />
  </ArticleWrapper>
);
export default Article;
