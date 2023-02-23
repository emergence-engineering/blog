import React, { FunctionComponent, PropsWithChildren } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import styled from "styled-components";

const Code = styled.code`
    padding: .2em .4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: rgba(175,184,193,0.2);
    border-radius: 6px;
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
`

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
    <Code>{children}</Code>
  );
export default CodeBlock;
