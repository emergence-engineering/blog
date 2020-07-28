import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

import CodeHighlight from "./CodeHighlight";

interface MarkDownProps {
  source: string;
}
const Markdown: FunctionComponent<MarkDownProps> = (props: MarkDownProps) => {
  const { source } = props;
  return <ReactMarkdown source={source} renderers={{ code: CodeHighlight }} />;
};

export default Markdown;
