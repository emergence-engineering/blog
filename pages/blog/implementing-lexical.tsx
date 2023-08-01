import React, { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { HashtagNode } from "@lexical/hashtag";
import {
  AutoLinkPlugin,
  createLinkMatcherWithRegExp,
} from "@lexical/react/LexicalAutoLinkPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import CodeHighlightPlugin from "../../features/article/components/PluginPlayground";
import {
  BannerNode,
  BannerPlugin,
} from "../../features/article/components/Banner";
// import {LinkPreviewNode} from "../../features/article/components/LinkPreview"
import { Placeholder, StyledContentEditable } from "../../utils/lexical";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ParagraphNode } from "lexical";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import ToolbarPlugin from "../../features/article/components/ToolbarPlugin";
import ToolbarPluginOnTheLeft from "../../features/article/components/ToolbarPluginOnTheLeft";
import { LinkPreviewNode } from "../../features/article/components/LinkPreview";

function onError(error: Error): void {
  console.error(error);
}

const myTheme = {
  text: {
    bold: "textBold",
    code: "textCode",
    italic: "textItalic",
    strikethrough: "textStrikethrough",
    subscript: "textSubscript",
    superscript: "textSuperscript",
    underline: "textUnderline",
    underlineStrikethrough: "textUnderlineStrikethrough",
  },
  list: {
    listitem: "listItem",
    listitemChecked: "listItemChecked",
    listitemUnchecked: "listItemUnchecked",
  },
  quote: "quote",
  // link: "linkkkk",
  hashtag: "hashtag",
  linkPreviewContainer: "linkPreviewContainer",
  previewBox: "previewBox",
  previewImage: "previewImage",
  previewDescription: "previewDescription",
};

interface Props {}

const initialConfig = {
  namespace: "MyEditor",
  theme: myTheme,
  onError,
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    BannerNode,
    HorizontalRuleNode,
    CodeNode,
    LinkNode,
    // AutoLinkNode,
    QuoteNode,
    HashtagNode,
    CodeHighlightNode,
    ParagraphNode,
    LinkPreviewNode,
    {
      replace: AutoLinkNode,
      with: (node: AutoLinkNode) => {
        return new LinkPreviewNode("");
      },
    },
  ],
};

const Editor = ({}: Props): JSX.Element => {
  const [show, setShow] = useState(false);

  const URL_REGEX =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  const MATCHERS = [
    createLinkMatcherWithRegExp(URL_REGEX, (text) => {
      return text.startsWith("http") ? text : `https://${text}`;
    }),
  ];

  return (
    <ArticleWrapper>
      <LexicalComposer initialConfig={initialConfig}>
        <div style={{ position: "relative" }}>
          <TabIndentationPlugin />
          <AutoFocusPlugin />
          <HashtagPlugin />
          <HistoryPlugin />
          <AutoLinkPlugin matchers={MATCHERS} />
          {/*<LinkPreviewPlugin matchers={MATCHERS} onChange={() => {}} />*/}

          <ToolbarPlugin />
          <ToolbarPluginOnTheLeft show={show} />
          <MarkdownShortcutPlugin />
          <BannerPlugin />
          <HorizontalRulePlugin />
          <CheckListPlugin />

          <CodeHighlightPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

          <RichTextPlugin
            contentEditable={
              <StyledContentEditable onClick={() => setShow(!show)} />
            }
            placeholder={<Placeholder>Let's start with a title...</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
      </LexicalComposer>
    </ArticleWrapper>
  );
};

export default Editor;
