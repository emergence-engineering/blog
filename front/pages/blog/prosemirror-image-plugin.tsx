// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import Disqus from "../../features/disqus/Disqus";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-image-plugin/"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article3Metadata: ArticleIntro = {
  title:
    "Image plugin for ProseMirror with drop & paste handling, easy uploading, alignment selector and title",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `
Most production editors need functionality to drop or paste images, have editable titles, and these images have to be uploaded & stored on a server. 
Managing this from the ground up takes a lot of time, so I wrote a plugin for ProseMirror which makes this very easy, and is flexible
enough to handle a lot of use cases.
 
  `,
  postId: "prosemirror-image-plugin",
  timestamp: 1610366577452,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-image-plugin",
};

const MD0 = /* language=md */ `
# What's this about?

A [ProseMirror image plugin](https://gitlab.com/emergence-engineering/prosemirror-image-plugin) with a lot of features:
- Optional **image title**
- Customizable image **overlay**
- Image **alignment** ( center, full width, left and right are default )
- Easy **image uploading** trough a HTTP endpoint
- Optionally removing deleted images
- Image **drop** & data URL **paste** handling

Check it out! The editor below does not upload the images anywhere, just inserts the dataURI into the ProseMirror document, which can freeze the browser up, it
works fine if you host the images.

Try out with
[this image](https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjww8mck57uAhWJ4YUKHbAIAb0Q_AUoAXoECBMQAw&biw=1745&bih=881#imgrc=-VCM1w56w6u5VM),
drag it in or save it and pick it with the file selector.

[The code for this post is here](https://gitlab.com/emergence-engineering/blog/-/tree/master/articles/prosemirror-image-plugin)
`;

const MD1 = /* language=md */ `
# How to use?

1. Install the plugin: **npm i -S prosemirror-image-plugin**
2. Import **defaultSettings** from the plugin ( and modify it if you want )
3. Update the image node in the ProseMirror schema to have all the necessary properties 
4. Initialize the editor with the plugin

In codespeak:
\`\`\`typescript
import { schema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { defaultSettings } from "prosemirror-image-plugin";

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

After that you need to [add some CSS from here](https://gitlab.com/emergence-engineering/prosemirror-image-plugin#example-css)
and voila! You have better images now, and the world just got a bit better.

You can check out the docs at <https://gitlab.com/emergence-engineering/prosemirror-image-plugin>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article3Metadata.url}
      title={article3Metadata.title}
      description={article3Metadata.introText}
      imgSrc={article3Metadata.imgSrc}
    />
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <SalesBox />
    <Disqus pageUrl={article3Metadata.url} pageId={article3Metadata.postId} />
  </ArticleWrapper>
);
export default Article;
