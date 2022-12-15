import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

import CodeHighlight from "./CodeHighlight";

export type MarkdownText = string;

export interface MarkDownProps {
  source: string | MarkdownText;
}
const Markdown: FunctionComponent<MarkDownProps> = (props: MarkDownProps) => {
  const { source } = props;
  return (
    <ReactMarkdown components={{ code: CodeHighlight }}>
      {source}
    </ReactMarkdown>
  );
};

export default Markdown;
