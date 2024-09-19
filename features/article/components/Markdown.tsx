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
            <a {...props} className="font-semibold underline">
              {props.children}
            </a>
          ),
        p: ({ ...props }) => (
          <p {...props} className={`${montserrat.className} py-2 text-left`}>
            {props.children}
          </p>
        ),
        ul: ({ ...props }) => (
          <ul
            {...props}
            className={`${montserrat.className} list-disc py-2 pl-6`}
          >
            {props.children}
          </ul>
        ),
        li: ({ ...props }) => (
          <li {...props} className={`${montserrat.className}`}>
            {props.children}
          </li>
        ),
        h1: ({ ...props }) => (
          <h1 {...props} className={`py-2 text-3xl font-bold`}>
            {props.children}
          </h1>
        ),
        h2: ({ ...props }) => (
          <h2 {...props} className={`py-2 text-2xl font-bold`}>
            {props.children}
          </h2>
        ),
        h3: ({ ...props }) => (
          <h3 {...props} className={`py-2 text-xl font-bold`}>
            {props.children}
          </h3>
        ),
        em: ({ ...props }) => (
          <em {...props} className={`${montserrat.className} italic`}>
            {props.children}
          </em>
        ),
        strong: ({ ...props }) => (
          <strong {...props} className={`${montserrat.className} font-bold`}>
            {props.children}
          </strong>
        ),
        pre: ({ ...props }) => (
          <pre {...props} className={`${montserrat.className}`}>
            {props.children}
          </pre>
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

export default Markdown;
