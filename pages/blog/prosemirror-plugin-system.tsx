import React from "react";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";

export const articlePluginSystemMetadata: ArticleIntro = {
  title: "Guide for writing ProseMirror plugins",
  author: "Viktor and matejcsok",
  authorLink: null,
  introText: /* language=md */ `A gentle introduction to the ProseMirror plugin system with examples, tricks & tips.`,
  postId: "prosemirror-plugin-system",
  timestamp: 1692268564224,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-plugin-system",
  tags: ["ProseMirror", "Plugin Development", "Tutorial", "Tips and Tricks"],
};

const MD0 = /* language=md */ `
# ProseMirror Plugin System

## Introduction
As a novice with ProseMirror, I struggled to grasp its usage just by reading the library guide and reference manual. Now few years later I realized that the docs are awesome, but the problem is that it is not written for beginners. So I decided to write a beginner-friendly guide to ProseMirror plugin system.
I cannot provide insights beyond what's already covered in the documentation. However, I can offer a range of examples, progressing from simple to more intricate, along with valuable tips and tricks. In these examples we will use React to add custom components, but ProseMirror is framework-agnostic, so you can use Angular, SolidJS etc...
## The Plugin system
\`Plugins are used to extend the behavior of the editor and editor state in various ways.\` - [ProseMirror docs](https://prosemirror.net/docs/guide/#intro.plugins)

- First create a \`PluginKey\`, this is a unique identifier for the plugin. Think of it as a key in an object. Use it to get the \`pluginState\` from the editor state, and also to dispatch metas to communicate with the plugin.

- \`PluginState\` is where the plugin's state lives. It's also accessible from outside using the \`pluginKey\`.
  - \`init\` is the initial state of the plugin.
  - \`apply\` can handle each transaction here, and return a new state for the plugin, also useful for receiving metas. If you are familiar with Redux think of \`init\` as createReducer, \`dispatch\` as \`dispatch\` the combination of \`meta\`+\`PluginKey\` as actions, \`apply\` as the reducer,
- \`props\` can handle editor events, or add decorations, nodeViews, etc.
  - \`handleKeyDown\` handle keydown events here.
  - \`decorations\` add decorations to the editor here.
    - Decorations are used to modify the appearance of existing content without changing its underlying structure
    - add some styling to nodes with \`inline\` decorations
    - or add a \`widget\` decoration, like the \`loading-indicator\` below
  - \`nodeViews\` add nodeViews to the editor here.
    - Extend a particular node type with a \`nodeView\`
    - custom rendering: to render differently than the default behavior provided by ProseMirror
    - interactive nodes: add event listeners
    - for a full and complex example check [prosemirror-image-plugin](https://gitlab.com/emergence-engineering/prosemirror-image-plugin/-/blob/master/src/plugin/imageNodeView.ts?ref_type=heads#L47)
- \`view\` this is useful for interacting with the editor view, like dispatching transactions.
  - \`update\` handle each update of the editor view here.
    - can handle asynchronous actions
  - \`destroy\` do some cleanup here.

## Character count Plugin
- start with a simple plugin, which counts the characters in the editor.
- \`update\` gets called on each update of the editor view, so use it to count the characters

\`\`\`ts
const characterCountPluginKey = new PluginKey("characterCountPlugin");
const characterCountPlugin = new Plugin({
  key: characterCountPluginKey,
  view: () => ({
    update: (view: EditorView) => {
      // get the document's content and count the characters
      const characterCount = view.state.doc.textContent.length;
      console.log("characterCount", characterCount);
    },
  }),
});
\`\`\`
`;

const MD1 = `
- make it a \`pluginState\`, which can be accessed from outside
- \`apply\` gets called on each transaction, move counter logic here

\`\`\`ts
const characterCountWithStatePluginKey = new PluginKey(
  "characterCountWithStatePlugin",
);
const characterCountWithStatePlugin = new Plugin({
  key: characterCountWithStatePluginKey,
  state: {
    init: () => {
      return {
        characterCount: 0,
      };
    },
    apply: (tr, pluginState, _, newState) => {
      const characterCount = newState.doc.textContent.length;
      return {
        characterCount,
      };
    },
  },
});

// access the \`pluginState\` from outside

// initialize the editor view
const editorView = new EditorView(editorRef.current, {
  state: EditorState.create({
    doc: DOMParser.fromSchema(schema).parse(contentRef.current),
    plugins: [
      characterCountWithStatePlugin,
    ],
  }),
});

// get the \`pluginState\`
const characterCountPluginState = characterCountWithStatePluginKey.getState(
  editorView.state,
);
\`\`\`
`;

const MD2 = `
## A more complex plugin with meta communication
- it is most likely that in a complex plugin a React component wants to communicate with the plugin
- create a loading plugin using \`decoration\`
- store \`isLoading\` in the \`pluginState\`, and use it to add a \`decoration\` to the editor when it is true

\`\`\`ts
const loadingPluginKey = new PluginKey("loadingPlugin");
const loadingPlugin = new Plugin({
  key: loadingPluginKey,
  state: {
    init: () => {
      return {
        isLoading: false,
      };
    },
    apply: (tr, pluginState, _, newState) => {
      const isLoading = tr.getMeta(loadingPluginKey);
      return {
        isLoading: isLoading ?? pluginState.isLoading,
      };
    },
  },
  props: {
    decorations: (state) => {
      const isLoading = loadingPluginKey.getState(state).isLoading;
      if (isLoading) {
        return DecorationSet.create(state.doc, [
          Decoration.widget(0, () => {
            const loader = document.createElement("div");
            loader.className = "loader";
            return loader;
          }),
        ]);
      }
      return null;
    },
  },
});

// dispatch metas to the plugin from outside
  let isLoading = false
  const tr = view.state.tr.setMeta(loadingPluginKey, !isLoading);
  view.dispatch(tr);
\`\`\`

- add some css, to make it spin
\`\`\`css
  .loader {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid #3498db;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
\`\`\`

- as a conclusion, communication between a ProseMirror plugin and a React component is necessary to achieve the desired behavior in certain cases
  - \`dispatch\` meta from a React component and the plugin gets notified
\`\`\`ts
    // from a react component
    // use the \`pluginKey\` to send a meta to the plugin
    const tr = view.state.tr.setMeta(loadingPluginKey, !isLoading);
    view.dispatch(tr);
\`\`\`
  - update \`pluginState\` in the plugin, which is accessible outside, so a component can listen on changes
  \`\`\`ts
    // from a react component
    // use the \`pluginKey\` to get the plugin's state
    const characterCountPluginState = characterCountWithStatePluginKey.getState(view.state);
  \`\`\`
  - this also works in other SPAs, or in vanilla JavaScript
`;

const MD3 = `
## Working with decorations

- create a character count plugin that uses ProseMirror \`decoration\`
- we can omit the \`apply\` method this time, just get the \`doc\` from the \`state\` and get the \`length\` of the \`textContent\`
- and use the \`decorations\` prop to display the \`decoration\` in the document

\`\`\`ts
const characterCountDecoPluginKey = new PluginKey('characterCountDecoPlugin');
const characterCountDecoPlugin = new Plugin({
  key: characterCountDecoPluginKey,
  props: {
    decorations: (state) => {
      return DecorationSet.create(state.doc, [
        Decoration.widget(0, () => {
          const span = document.createElement('span');
          span.style.background = 'lightgrey';
          span.textContent = \`Character count DECORATION: \${state.doc.textContent.length}\`;
          return span;
        }),
      ]);
    },
  },
});
\`\`\`
`;

const MD4 = `
- there is one thing to know about decorations, if decorations are stored in the plugin's state, and you write something before the \`decoration\` the position of the \`decoration\` won't be updated, so you will see text going through the \`decoration\` (place the cursor at the end of the document, and click \`Insert deco\`, and type some spacebars a few words before the decoration)
- to fix this, need to update the \`decoration\`'s position on each transaction, and do that in the \`apply\` method of the plugin's state using \`decos.map(tr.mapping, tr.doc)\`
\`

\`\`\`ts
const insertDecorationPluginKey = new PluginKey("insertDecorationPlugin");
const insertDecorationPlugin = new Plugin({
  key: insertDecorationPluginKey,
  state: {
    init: () => {
      return {
        decos: DecorationSet.empty,
        useMapping: false,
      };
    },
    apply: (tr, pluginState, _, newState) => {
      const meta = tr.getMeta(insertDecorationPluginKey);
      let decos = pluginState.decos;
      if (meta?.insert) {
        decos = DecorationSet.create(tr.doc, [
          Decoration.widget(tr.selection.from, () => {
            const span = document.createElement("span");
            span.style.background = "red";
            span.textContent = 'DECORATION';
            return span;
          }),
        ]);
      }

      return {
        useMapping: meta?.mapping ?? pluginState.useMapping,
        decos:
          meta?.mapping || pluginState.useMapping
            ? decos.map(tr.mapping, tr.doc)
            : decos,
      };
    },
  },
  props: {
    decorations: (state: EditorState) => {
      const pluginState = insertDecorationPluginKey.getState(state);
      return pluginState.decos;
    },
  },
});
\`\`\`
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={articlePluginSystemMetadata.url}
      title={articlePluginSystemMetadata.title}
      description={articlePluginSystemMetadata.introText}
      imgSrc={articlePluginSystemMetadata.imgSrc}
    />

    <Markdown source={MD0} />
    {/* character count with view */}
    <iframe
      height="500px"
      src="https://stackblitz.com/edit/stackblitz-starters-7jptzx?embed=1&file=src%2FApp.tsx"
    ></iframe>

    <Markdown source={MD1} />
    {/* character count with pluginState */}
    <iframe
      height="500px"
      src="https://stackblitz.com/edit/stackblitz-starters-lwcych?file=src%2FApp.tsx"
    ></iframe>

    <Markdown source={MD2} />
    {/* loading indicator */}
    <iframe
      height="500px"
      src="https://stackblitz.com/edit/stackblitz-starters-jcdstx?file=src%2FApp.tsx"
    ></iframe>
    <Markdown source={MD3} />

    {/* character count with deco */}
    <iframe
      height="500px"
      src="https://stackblitz.com/edit/stackblitz-starters-ijpm3e?embed=1&file=src%2FApp.tsx"
    ></iframe>

    <Markdown source={MD4} />
    {/* loading indicator */}
    <iframe
      height="500px"
      src="https://stackblitz.com/edit/stackblitz-starters-dnz5xa?file=src%2FApp.tsx"
    ></iframe>
  </ArticleWrapper>
);

export default Article;
