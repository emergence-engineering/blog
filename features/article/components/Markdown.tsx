import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

import { montserrat } from "../../../utils/fonts";
import CodeHighlight from "./CodeHighlight";

export type MarkdownText = string;

export interface MarkDownProps {
  source: string | MarkdownText;
  formatLinks?: boolean;
}

const Markdown: FunctionComponent<MarkDownProps> = (props: MarkDownProps) => {
  const { source, formatLinks } = props;

  return (
    <ReactMarkdown
      components={{
        code: CodeHighlight,
        a: ({ node, ...props }) =>
          formatLinks ? (
            <a
              {...props}
              className={`${montserrat.className} font-semibold underline`}
            >
              {props.children}
            </a>
          ) : (
            <a {...props} className={`${montserrat.className} `}>
              {props.children}
            </a>
          ),
        p: ({ ...props }) => (
          <p {...props} className={`${montserrat.className}`}>
            {props.children}
          </p>
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

export default Markdown;
