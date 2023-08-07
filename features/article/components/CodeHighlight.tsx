import React, { FunctionComponent, PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import styled from "styled-components";

const Code = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
`;

const CodeBlock: FunctionComponent<PropsWithChildren<CodeProps>> = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "");
  return (
    <>
      {!inline && match ? (
        <SyntaxHighlighter
          language={match[1]}
          // @ts-ignore
          style={gruvboxDark}
          showLineNumbers
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <Code>{children}</Code>
      )}
    </>
  );
};
export default CodeBlock;
