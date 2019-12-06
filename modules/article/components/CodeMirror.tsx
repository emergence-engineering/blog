import { UnControlled as Editor } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import React, { FunctionComponent } from "react";

const CodeMirror: FunctionComponent<{
  value: string;
  onChange?: (editor: any, data: any, text: string) => void;
}> = ({ value, onChange }) => (
  <Editor
    value={value}
    options={{ theme: "material", mode: "javascript", lineNumbers: true }}
    onChange={onChange}
  />
);

export default CodeMirror;
