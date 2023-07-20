// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import Markdown from "../../features/article/components/Markdown";
import ArticleHeader from "../../features/article/components/ArticleHeader";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-codemirror-block"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article6Metadata: ArticleIntro = {
  title:
    "prosemirror-codemirror-block: CodeMirror 6 code block for ProseMirror",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `Release [ProseMirror codeblock plugin](https://gitlab.com/emergence-engineering/prosemirror-codemirror-block)
  that uses the brand-new CodeMirror 6, a major improvement over CodeMirror 5.

  Sponsored by [Skiff](https://www.skiff.org/) - a private, end-to-end encrypted, and decentralized workspace.
  `,
  postId: "prosemirror-codemirror-block",
  timestamp: 1643829565161,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-codemirror-block",
};

const MD0 = /* language=md */ `
# What's this about?

Release [ProseMirror codeblock plugin](https://gitlab.com/emergence-engineering/prosemirror-codemirror-block)
that uses the brand-new CodeMirror 6, a major improvement over CodeMirror 5.

With:
- Customizable language selector
- lazy-loaded language support
- works with YJS history

[The code for this post is here](https://gitlab.com/emergence-engineering/blog/-/tree/master/articles/prosemirror-codemirror-block)
`;

const MD1 = /* language=md */ `
# How to use?

1. Install the plugin: **npm i -S prosemirror-codemirror-block**
3. Import **defaultSettings** from the plugin ( and modify it if you want )
4. Update the **code_block** node in the ProseMirror schema to have a **lang** attribute 
5. Initialize the editor with the plugin & insert **keymaps** for correct cursor handling around **code_block**

In codespeak:
\`\`\`typescript
import { schema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { exampleSetup } from "prosemirror-example-setup";
import {
    codeMirrorBlockPlugin,
    defaultSettings,
    languageLoaders,
    codeBlockArrowHandlers,
    legacyLanguageLoaders,
} from "prosemirror-codemirror-block";
import { undo, redo } from "prosemirror-history";


const codeBlockSpec = schema.spec.nodes.get("code_block");

export default new Schema({
    nodes: schema.spec.nodes.update("code_block", {
        ...(codeBlockSpec || {}),
        attrs: { ...codeBlockSpec?.attrs, lang: { default: null } },
    }),
    marks: schema.spec.marks,
});


const codeBlockDoc = {
    content: [
        {
            content: [
                {
                    text: "prosemirror-codemirror-block",
                    type: "text",
                },
            ],
            type: "paragraph",
        },
        {
            content: [
                {
                    text: "const jsFun = (arg) => {\\n  console.log(arg); \\n}",
                    type: "text",
                },
            ],
            attrs: {
                lang: "javascript",
            },
            type: "code_block",
        },
    ],
    type: "doc",
};


const state = EditorState.create<typeof schema>({
    doc: schema.nodeFromJSON(codeBlockDoc),
    plugins: [
        ...exampleSetup({
            schema,
        }),
        codeMirrorBlockPlugin({
            ...defaultSettings,
            languageLoaders: { ...languageLoaders, ...legacyLanguageLoaders },
            undo,
            redo,
        }),
        keymap(codeBlockArrowHandlers),
    ],
});

const view: EditorView = new EditorView(document.getElementById("editor"), {
  state,
});
\`\`\`

You might also want to add
\`\`\`css
.codeblock-select {
    position: absolute;
    right: 0;
    z-index: 100;
    opacity: 0;
    transition: all 0.3s ease;
    margin: 6px 14px;
}
.codeblock-root {
    position: relative;
}

.codeblock-root:hover .codeblock-select {
    opacity: 1;
}
\`\`\`
to the editor style in order to have a nicely positioned language selector.


Now....You have a better **code_block**, and the world just got a bit better.

You can check out the docs at <https://gitlab.com/emergence-engineering/prosemirror-codemirror-block>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article6Metadata.url}
      title={article6Metadata.title}
      description={article6Metadata.introText}
      imgSrc={article6Metadata.imgSrc}
    />
    <ArticleHeader
      title={article6Metadata.title}
      author={article6Metadata.author}
      timestamp={article6Metadata.timestamp}
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
