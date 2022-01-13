import React, { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { buildMenuItems, exampleSetup } from "prosemirror-example-setup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import applyDevTools from "prosemirror-dev-tools";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import styled from "styled-components";
import { redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";

import codeMirrorBlockPlugin, {
  defaultSettings,
  codeBlockArrowHandlers,
  languageLoaders,
} from "./plugin/index";
import schema from "./schema";
import { inlineImageDoc } from "./initialDocs";

const Root = styled.div`
  // PM Devtools hack
  .__prosemirror-dev-tools__ > div {
    position: static;
  }
  .codeblock-input {
    background-color: red;
    position: absolute;
    right: 0;
    z-index: 100;
    //opacity: 0;
    transition: all 0.3s ease;
    width: 8rem;
  }
  .codeblock-datalist {
    width: 8rem;
  }
  .CodeMirror:hover .codeblock-input {
    opacity: 1;
  }
`;

const DevtoolsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const DevtoolsRoot = styled.div`
  position: relative;
  padding-bottom: 2rem;
`;

const DevtoolsLink = styled.a`
  margin: 0 0.5rem;
`;

const ProseMirrorLatex = () => {
  const [pmState, setPmState] = useState<EditorState<Schema>>();
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    console.log({ defaultSettings });
    const state = EditorState.create<typeof schema>({
      doc: schema.nodeFromJSON(inlineImageDoc),
      plugins: [
        ...exampleSetup({
          schema,
        }),
        codeMirrorBlockPlugin({
          ...defaultSettings,
          languageWhitelist: ["css", "javascript"],
          undo,
          redo,
          languageLoaders,
        }),
        keymap(codeBlockArrowHandlers),
      ],
    });
    const view: EditorView<typeof schema> = new EditorView(editorNode, {
      state,
      dispatchTransaction: (tr) => {
        try {
          const newState = view.state.apply(tr);
          view.updateState(newState);
          setPmState(newState);
        } catch (e) {
          console.log(pmState);
          console.log(e);
        }
      },
    });
    const devtoolsRoot = document.getElementById("pmdevtools");
    if (devtoolsRoot) devtoolsRoot.innerHTML = "";
    applyDevTools(view);
    // Mount PMDevtools into a div instead of showing in the bottom right corner.
    const devtools = document.querySelector(".__prosemirror-dev-tools__");

    if (devtools instanceof HTMLElement && devtoolsRoot) {
      devtoolsRoot.appendChild(devtools);
      devtools.style.position = "absolute";
    }
    // eslint-disable-next-line consistent-return
    return () => {
      view && view.destroy();
    };
  }, []);

  return (
    <Root>
      <ProseMirrorDiv id="editor" />
      <DevtoolsWrapper>
        Check out the document structure with
        <DevtoolsLink href="https://github.com/d4rkr00t/prosemirror-dev-tools">
          prosemirror-dev-tools:
        </DevtoolsLink>
        <DevtoolsRoot id="pmdevtools" />
      </DevtoolsWrapper>
    </Root>
  );
};

export default ProseMirrorLatex;
