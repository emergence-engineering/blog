import React, { FunctionComponent, useEffect, useRef } from "react";
import { basicSetup, EditorView } from "codemirror";
import { Compartment, EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

const languageConf = new Compartment();

const CodeMirror: FunctionComponent<{
  value: string;
  onChange?: (editor: any, data: any, text: string) => void;
}> = ({ value, onChange }) => {
  const rootDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!rootDiv?.current) return;
    const state = EditorState.create({
      doc: value,
      extensions: [basicSetup, languageConf.of(javascript())],
    });
    new EditorView({
      state,
      parent: rootDiv.current,
    });
  }, [rootDiv]);
  return (
    <div ref={rootDiv}></div> || 5
    // <Editor
    //   value={initialValue}
    //   options={{ theme: "material", mode: "javascript", lineNumbers: true }}
    //   onChange={onChange}
    // />
  );
};

export default CodeMirror;
