import React, { FunctionComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock: FunctionComponent<{ className: string; value: string }> = ({
  className,
  children,
}) =>
  className ? (
    <SyntaxHighlighter
      language={className?.slice(9)}
      style={monokaiSublime}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <span>{children}</span>
  );
export default CodeBlock;
