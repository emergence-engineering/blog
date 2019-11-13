import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

interface MarkDownProps {
  source: string;
}
const Markdown: FunctionComponent<MarkDownProps> = (
  props: MarkDownProps,
) => {
  const { source } = props;
  return <ReactMarkdown source={source} />;
};

export default Markdown;
