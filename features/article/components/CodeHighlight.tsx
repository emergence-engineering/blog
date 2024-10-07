import React, { FunctionComponent, PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "styled-components";

const Code = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 95%;
  font-style: italic;
  white-space: break-spaces;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 6px;
  font-family: monospace !important;

  span {
    font-family: monospace !important;
  }
`;

const CodeBlock: FunctionComponent<PropsWithChildren<any>> = ({
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
        <Code className="font-jetbrainsMono">{children}</Code>
      )}
    </>
  );
};
export default CodeBlock;
