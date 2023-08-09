import React, { useRef, useState } from "react";
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
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import {
  BannerNode,
  BannerPlugin,
} from "../../features/article/components/lexicalComponents/Banner";
import {
  JsonButtonContainer,
  Placeholder,
  StyledContentEditable,
} from "../../utils/lexical";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { EditorState, LineBreakNode, ParagraphNode } from "lexical";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import ToolbarPlugin from "../../features/article/components/lexicalComponents/ToolbarPlugin";
import ToolbarPluginOnTheLeft from "../../features/article/components/lexicalComponents/ToolbarPluginOnTheLeft";
import {
  LinkPreviewNode,
  LinkPreviewPlugin,
} from "../../features/article/components/lexicalComponents/LinkPreview";
import TreeViewPlugin from "../../features/article/components/lexicalComponents/TreeViewPlugin";
import {
  AutoLinkPlugin,
  createLinkMatcherWithRegExp,
} from "@lexical/react/LexicalAutoLinkPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import {
  LoadFromJsonOnToolbar,
  SaveToJsonOnToolbar,
  CodeHighlightPlugin,
} from "../../features/article/components/lexicalComponents/OwnLexicalToolbar";

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
  link: "mylink",
  hashtag: "hashtag",
  linkPreviewContainer: "linkPreviewContainer",
  previewBox: "previewBox",
  previewImage: "previewImage",
  previewDescription: "previewDescription",
};

interface Props {}

const thissInitialConfig = {
  namespace: "MyEditor",
  theme: myTheme,
  onError,
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    LinkNode,
    BannerNode,
    HorizontalRuleNode,
    CodeNode,
    QuoteNode,
    HashtagNode,
    CodeHighlightNode,
    ParagraphNode,
    AutoLinkNode,
    LinkPreviewNode,
    LineBreakNode,
  ],
};

const Editor = ({}: Props): JSX.Element => {
  const [showLeftToolbar, setShowLeftToolbar] = useState(false);
  const stateRef = useRef<EditorState>();
  const [editorJson, setEditorJson] = useState("");

  const URL_REGEX =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

  const MATCHERS = [
    createLinkMatcherWithRegExp(URL_REGEX, (text) => {
      return text.startsWith("http") ? text : `https://${text}`;
    }),
  ];

  return (
    <ArticleWrapper>
      <LexicalComposer initialConfig={thissInitialConfig}>
        <div style={{ position: "relative" }}>
          <TabIndentationPlugin />
          <AutoFocusPlugin />
          <HistoryPlugin />

          <AutoLinkPlugin matchers={MATCHERS} />
          <LinkPreviewPlugin showLink={true} />
          <ToolbarPlugin />
          <ToolbarPluginOnTheLeft show={showLeftToolbar} />
          <HashtagPlugin />
          <MarkdownShortcutPlugin />
          <BannerPlugin />
          <HorizontalRulePlugin />
          <CheckListPlugin />
          <CodeHighlightPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

          <RichTextPlugin
            contentEditable={
              <StyledContentEditable
                onClick={() => setShowLeftToolbar(!showLeftToolbar)}
              />
            }
            placeholder={<Placeholder>Let's start with a title...</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />

          <OnChangePlugin
            onChange={(editorState) => {
              if (stateRef) stateRef.current = editorState;
            }}
          />
          <JsonButtonContainer>
            <SaveToJsonOnToolbar
              onClick={() => {
                if (stateRef.current)
                  setEditorJson(JSON.stringify(stateRef.current));
              }}
            />
            <LoadFromJsonOnToolbar data={editorJson} />
          </JsonButtonContainer>

          <TreeViewPlugin />
        </div>
      </LexicalComposer>
    </ArticleWrapper>
  );
};

export default Editor;
