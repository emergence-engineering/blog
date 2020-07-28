import React, { FunctionComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock: FunctionComponent<{ language: string; value: string }> = ({
  language,
  value,
}) => (
  <SyntaxHighlighter language={language} style={docco}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
