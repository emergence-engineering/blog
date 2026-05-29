import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      remarkPlugins={[remarkGfm]}
      components={{
        code: CodeHighlight,
        a: ({ node, ...props }) =>
          formatLinks ? (
            <a
              {...props}
              className="font-montserrat text-red-600 hover:underline"
              target="_blank"
            >
              {props.children}
            </a>
          ) : (
            <a
              {...props}
              className="font-montserrat text-red-600 hover:underline"
              target="_blank"
            >
              {props.children}
            </a>
          ),
        p: ({ ...props }) => (
          <p {...props} className="py-2 text-left font-montserrat">
            {props.children}
          </p>
        ),
        ul: ({ ...props }) => (
          <ul {...props} className="list-disc py-2 pl-6 font-montserrat">
            {props.children}
          </ul>
        ),
        ol: ({ ...props }) => (
          <ol {...props} className="list-decimal py-2 pl-6 font-montserrat">
            {props.children}
          </ol>
        ),
        li: ({ ...props }) => (
          <li {...props} className="py-1 font-montserrat">
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
          <em {...props} className="font-montserrat italic">
            {props.children}
          </em>
        ),
        hr: () => (
          <hr className="my-5 h-1 border-0 bg-gray-200 dark:bg-gray-200" />
        ),
        strong: ({ ...props }) => (
          <strong {...props} className="font-montserrat font-bold">
            {props.children}
          </strong>
        ),
        pre: ({ ...props }) => (
          <pre {...props} className="font-montserrat">
            {props.children}
          </pre>
        ),
        table: ({ ...props }) => (
          <table
            {...props}
            className="my-4 w-full border-collapse font-montserrat"
          >
            {props.children}
          </table>
        ),
        thead: ({ ...props }) => (
          <thead {...props} className="border-b border-gray-300">
            {props.children}
          </thead>
        ),
        th: ({ ...props }) => (
          <th {...props} className="px-3 py-2 text-left font-bold">
            {props.children}
          </th>
        ),
        td: ({ ...props }) => (
          <td {...props} className="border-t border-gray-200 px-3 py-2">
            {props.children}
          </td>
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

export default Markdown;

