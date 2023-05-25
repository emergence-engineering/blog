// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-link-plugin"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article4Metadata: ArticleIntro = {
  title: "prosemirror-link-plugin: Create automatic links in ProseMirror",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `
If you want to have a decorations around different strings in your ProseMirror document then this is your plugin! You can make the found words to behave as links ( for example ), and add new items to your string list on the fly
  `,
  postId: "prosemirror-link-plugin",
  timestamp: 1622413459000,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-link-plugin",
};

const MD0 = /* language=md */ `
# What's this about?

A [ProseMirror link plugin](https://gitlab.com/emergence-engineering/prosemirror-link-plugin) which finds occurrences of strings in your document, and does it by only looking at the changed sections, thus saving a lot of time
by not re-processing the whole document all the time.
`;

const MD1 = /* language=md */ `
# How to use?

1. Install the plugin: **npm i -S prosemirror-link-plugin**
2. Add the plugin to the editor

In codespeak:
\`\`\`typescript
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";
import { Decoration } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import {
    autoLinkingPlugin,
    LinksKeyState,
} from "prosemirror-link-plugin";

export interface LinkSpec {
    id: number;
    alias: string;
}

export const aliasDecoration = (
    start: number,
    end: number,
    alias: string,
    matchPos: number,
    pluginState: LinksKeyState<LinkSpec>,
) => {
    const spec = pluginState.aliasToSpec[alias];
    return Decoration.inline(
        start,
        end,

        {
            class: "autoLink",
            onclick: \`alert('You clicked on "\${alias}"')\`,
        },
        { id: spec?.id, alias },
    );
};

let aliases = { alias: "typing", id: 1 };

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

const state = EditorState.create<typeof schema>({
    doc: schema.nodeFromJSON(initialDoc),
    plugins: [
        ...exampleSetup({
            schema,
        }),
        autoLinkingPlugin(
            aliases,
            aliasDecoration,
        ),
    ],
});

const view: EditorView = new EditorView(document.getElementById("editor"), {
    state,
});
\`\`\`

Add some CSS around your decoration, you can do it by targeting its class ( \`autoLink\` in the example above ).

You can check out the docs at <https://gitlab.com/emergence-engineering/prosemirror-link-plugin>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article4Metadata.url}
      title={article4Metadata.title}
      description={article4Metadata.introText}
      imgSrc={article4Metadata.imgSrc}
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
