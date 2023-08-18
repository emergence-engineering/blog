import { EditorState, PluginKey, Plugin } from "prosemirror-state";
import { Decoration, DecorationSet, EditorView } from "prosemirror-view";
import { Schema, DOMParser, Node } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";
import { useCallback, useEffect, useState } from "react";
import { prosemirrorToYDoc, ySyncPlugin } from "y-prosemirror";
import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";
import styled from "styled-components";

const mySchema = new Schema({
  nodes: schema.spec.nodes,
  marks: schema.spec.marks,
});

const initialDoc = Node.fromJSON(mySchema, {
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
});

const characterCountPluginKey = new PluginKey("characterCountPlugin");
// @ts-ignore
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

const characterCountWithStatePluginKey = new PluginKey(
  "characterCountWithStatePlugin",
);
const characterCountWithStatePlugin = new Plugin({
  key: characterCountWithStatePluginKey,
  state: {
    init: (_, state) => {
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
  view: () => ({
    update: (view: EditorView, prevState) => {
      const pluginState = characterCountWithStatePlugin.getState(view.state);
      console.log({ pluginState });
    },
  }),
});

const characterCountDecoPluginKey = new PluginKey("characterCountDecoPlugin");
const characterCountDecoPlugin = new Plugin({
  key: characterCountDecoPluginKey,
  state: {
    init: () => {
      return {
        decos: DecorationSet.empty,
      };
    },
    apply: (tr, pluginState, _, newState) => {
      const characterCount = newState.doc.textContent.length;
      const newDecorationSet = DecorationSet.create(newState.doc, [
        Decoration.widget(0, () => {
          const span = document.createElement("span");
          span.style.background = "lightgrey";
          span.textContent = `Character count DECORATION: ${characterCount}`;
          return span;
        }),
      ]);
      return {
        decos: newDecorationSet,
      };
    },
  },
  props: {
    decorations: (state) => {
      const decos = characterCountDecoPluginKey.getState(state).decos;
      return decos;
    },
  },
});

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

// create a pm plugin which inserts an inline decoration where the cursor is
// it is get triggered by a meta
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
            span.textContent = `DECORATION`;
            return span;
          }),
        ]);
      }

      console.log({ decos });
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
      console.log({ pluginState });
      return pluginState.decos;
    },
  },
});

export default function Home() {
  const ydoc = prosemirrorToYDoc(initialDoc);
  const [view, setView] = useState<EditorView | null>(null);

  useEffect(() => {
    const yXmlFragment = ydoc.getXmlFragment("prosemirror");

    const v = new EditorView(document.querySelector("#editor") as HTMLElement, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(
          document.createElement("div"),
        ),
        plugins: [
          ...exampleSetup({ schema: mySchema }),
          ySyncPlugin(yXmlFragment),
          characterCountDecoPlugin,
          loadingPlugin,
          insertDecorationPlugin,
        ],
      }),
    });

    setView(v);

    return () => {
      v.destroy();
    };
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toggleLoading = useCallback(() => {
    if (!view) {
      return;
    }

    setIsLoading((isLoading) => {
      const tr = view.state.tr.setMeta(loadingPluginKey, !isLoading);
      view.dispatch(tr);
      return !isLoading;
    });
  }, [view, isLoading]);

  const insert = useCallback(() => {
    if (!view) {
      return;
    }

    const tr = view.state.tr.setMeta(insertDecorationPluginKey, {
      insert: true,
    });
    view.dispatch(tr);
  }, [view]);

  const [useMapping, setUseMapping] = useState<boolean>(false);
  const toggleMapping = useCallback(() => {
    if (!view) {
      return;
    }

    setUseMapping((useMapping) => {
      const tr = view.state.tr.setMeta(insertDecorationPluginKey, {
        mapping: !useMapping,
      });
      view.dispatch(tr);
      return !useMapping;
    });
  }, [view]);

  console.log({ useMapping });
  return (
    <Root>
      <div id="editor" />
      <button onClick={toggleLoading}>Toggle loading</button>
      <button onClick={insert}>Insert a decoration</button>
      <button onClick={toggleMapping}>
        Toggle mapping {!useMapping ? true : false}
      </button>
    </Root>
  );
}

const Root = styled(ProseMirrorDiv)`
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
`;
