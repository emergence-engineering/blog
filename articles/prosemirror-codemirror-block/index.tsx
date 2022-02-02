import React, { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { buildMenuItems, exampleSetup } from "prosemirror-example-setup";
import { applyDevTools } from "prosemirror-dev-toolkit";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import styled from "styled-components";
import { keymap } from "prosemirror-keymap";
import {
  codeMirrorBlockPlugin,
  defaultSettings,
  languageLoaders,
  codeBlockArrowHandlers,
  legacyLanguageLoaders,
} from "prosemirror-codemirror-block";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";
import { DevToolkit } from "../../features/common/components/PMUtils";

import schema from "./schema";
import { codeBlockDoc } from "./initialDocs";

const Root = styled.div`
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
`;

const DevtoolsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const DevtoolsLink = styled.a`
  margin: 0 0.5rem;
`;

const ProseMirrorLatex = () => {
  const [pmState, setPmState] = useState<EditorState<Schema>>();
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const state = EditorState.create<typeof schema>({
      doc: schema.nodeFromJSON(codeBlockDoc),
      plugins: [
        ...exampleSetup({
          schema,
        }),
        codeMirrorBlockPlugin({
          ...defaultSettings,
          languageLoaders: { ...languageLoaders, ...legacyLanguageLoaders },
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
    applyDevTools(view);
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
        <DevtoolsLink href="https://github.com/TeemuKoivisto/prosemirror-dev-toolkit">
          prosemirror-dev-toolkit:
        </DevtoolsLink>
        <DevToolkit />
      </DevtoolsWrapper>
    </Root>
  );
};

export default ProseMirrorLatex;
