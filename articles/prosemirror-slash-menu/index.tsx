import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import { exampleSetup } from "prosemirror-example-setup";
// import { applyDevTools } from "prosemirror-dev-toolkit";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import styled from "styled-components";
import { keymap } from "prosemirror-keymap";
import { codeBlockArrowHandlers } from "prosemirror-codemirror-block";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";
import schema from "./schema";
import { codeBlockDoc } from "./initialDoc";
import { SlashMenuPlugin } from "prosemirror-slash-menu";
import { defaultElements, SlashMenuReact } from "prosemirror-slash-menu-react";
import "prosemirror-slash-menu-react/dist/styles/menu-style.css";

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
  .cm-editor.cm-focused {
    outline: none;
  },
`;

// const DevtoolsWrapper = styled.div`
//   display: flex;
//   align-items: baseline;
//   flex-wrap: wrap;
// `;

// const DevtoolsLink = styled.a`
//   margin: 0 0.5rem;
// `;

const ProseMirrorCodeMirrorBlock = () => {
  const [pmState, setPmState] = useState<EditorState>();
  const [editorView, setEditorView] = useState<EditorView>();

  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!editorRef.current) return;
    const state = EditorState.create({
      doc: schema.nodeFromJSON(codeBlockDoc),
      plugins: [
        SlashMenuPlugin(defaultElements),
        ...exampleSetup({
          schema,
        }),

        keymap(codeBlockArrowHandlers),
      ],
    });
    const view: EditorView = new EditorView(editorRef.current, {
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
    setEditorView(view);
    import("prosemirror-dev-toolkit").then(({ applyDevTools }) =>
      applyDevTools(view),
    );
    // applyDevTools(view);
    // eslint-disable-next-line consistent-return
    return () => {
      view && view.destroy();
    };
  }, [editorRef]);
  return (
    <Root>
      <ProseMirrorDiv ref={editorRef} id="editor" />
      {/*<DevtoolsWrapper>*/}
      {/*  Check out the document structure with*/}
      {/*  /!*<DevtoolsLink href="https://github.com/TeemuKoivisto/prosemirror-dev-toolkit">*!/*/}
      {/*  /!*  prosemirror-dev-toolkit:*!/*/}
      {/*  /!*</DevtoolsLink>*!/*/}
      {/*  <DevToolkit />*/}
      {/*</DevtoolsWrapper>*/}
      {pmState && editorView && (
        <SlashMenuReact
          // icons={{
          //   [Icons.Level1]: H1Icon,
          //   [Icons.Level2]: H2Icon,
          //   [Icons.Level3]: H3Icon,
          //   [Icons.Bold]: BoldIcon,
          //   [Icons.Italic]: ItalicIcon,
          //   [Icons.Code]: CodeIcon,
          // }}
          editorState={pmState}
          editorView={editorView}
          config={{
            minHeight: 100,
            height: 160,
            overflowPadding: 16,
          }}
        />
      )}
    </Root>
  );
};

export default ProseMirrorCodeMirrorBlock;
