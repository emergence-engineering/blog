import React, { FunctionComponent, PropsWithChildren } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CodeProps } from "react-markdown/lib/ast-to-react";

const CodeBlock: FunctionComponent<PropsWithChildren<CodeProps>> = ({
  className,
  children,
}) =>
  className ? (
    <SyntaxHighlighter
      language={className?.slice(9)}
      style={monokaiSublime}
      showLineNumbers
    >
      {/*@ts-ignore*/}
      {children}
    </SyntaxHighlighter>
  ) : (
    <span>{children}</span>
  );
export default CodeBlock;
