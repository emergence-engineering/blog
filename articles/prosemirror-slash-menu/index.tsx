import React, { useEffect, useRef, useState } from "react";
import { exampleSetup } from "prosemirror-example-setup";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";
import schema from "./schema";
import { SlashMenuPlugin } from "prosemirror-slash-menu";
import {
  defaultElements,
  defaultIcons,
  Icons,
  SlashMenuReact,
} from "prosemirror-slash-menu-react";
import { slashMenuDoc } from "./initialDoc";

const ProseMirrorSlashMenu = () => {
  const [pmState, setPmState] = useState<EditorState>();
  const [editorView, setEditorView] = useState<EditorView>();
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!editorRef.current) return;
    const state = EditorState.create({
      doc: schema.nodeFromJSON(slashMenuDoc),
      plugins: [
        SlashMenuPlugin(defaultElements),
        ...exampleSetup({
          schema,
        }),
      ],
    });
    const view: EditorView = new EditorView(editorRef.current, {
      state,
      dispatchTransaction: (tr) => {
        try {
          const newState = view.state.apply(tr);
          view.updateState(newState);
          setPmState(newState);
        } catch (e) {}
      },
    });
    setEditorView(view);
    return () => {
      view && view.destroy();
    };
  }, [editorRef]);
  return (
    <>
      <ProseMirrorDiv ref={editorRef} id="editor" />
      {pmState && editorView && (
        <SlashMenuReact
          icons={{
            [Icons.HeaderMenu]: defaultIcons.H1Icon,
            [Icons.Level1]: defaultIcons.H1Icon,
            [Icons.Level2]: defaultIcons.H2Icon,
            [Icons.Level3]: defaultIcons.H3Icon,
            [Icons.Bold]: defaultIcons.BoldIcon,
            [Icons.Italic]: defaultIcons.ItalicIcon,
            [Icons.Code]: defaultIcons.CodeIcon,
            [Icons.Link]: defaultIcons.LinkIcon,
          }}
          editorState={pmState}
          editorView={editorView}
        />
      )}
    </>
  );
};

export default ProseMirrorSlashMenu;
