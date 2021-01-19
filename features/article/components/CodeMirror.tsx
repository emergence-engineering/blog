import { UnControlled as Editor } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { FunctionComponent, useState } from "react";

const CodeMirror: FunctionComponent<{
  value: string;
  onChange?: (editor: any, data: any, text: string) => void;
}> = ({ value, onChange }) => {
  const [initialValue] = useState(value);
  return (
    <Editor
      value={initialValue}
      options={{ theme: "material", mode: "javascript", lineNumbers: true }}
      onChange={onChange}
    />
  );
};

export default CodeMirror;
