import React, { useRef, useState } from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

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
import { JsonButtonContainer } from "../../utils/lexical";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { EditorState, LineBreakNode, ParagraphNode } from "lexical";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import ToolbarPlugin from "../../features/article/components/lexicalComponents/ToolbarPlugin";
import {
  LinkPreviewNode,
  ResOfWebsite,
} from "../../features/article/components/lexicalComponents/LinkPreviewNode";
import { LinkPreviewPlugin } from "../../features/article/components/lexicalComponents/LinkPreviewPlugin";
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
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";

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
};

const initialConfig = {
  namespace: "MyEditor",
  theme: myTheme,
  onError,
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    LinkNode,
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

async function thisFetchingFunction(link: string): Promise<ResOfWebsite> {
  const data = await fetch("/api/link-preview", {
    method: "POST",
    body: JSON.stringify({
      link,
    }),
  });
  const {
    data: { url, title, description, images },
  } = await data.json();
  return { url, title, description, images };
}

const Editor = (): JSX.Element => {
  const editorStateRef = useRef<EditorState>();
  const [editorJson, setEditorJson] = useState("");

  const URL_REGEX =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

  const MATCHERS = [
    createLinkMatcherWithRegExp(URL_REGEX, (text) => {
      return text.startsWith("http") ? text : `https://${text}`;
    }),
  ];
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div style={{ position: "relative" }}>
        <TabIndentationPlugin />
        <AutoFocusPlugin />
        <HistoryPlugin />

        <ToolbarPlugin />
        <AutoLinkPlugin matchers={MATCHERS} />
        <LinkPreviewPlugin
          showLink={true}
          fetchingFunction={thisFetchingFunction}
          showClosePreview={true}
        />
        <HashtagPlugin />
        <MarkdownShortcutPlugin />
        <HorizontalRulePlugin />
        <CheckListPlugin />
        <CodeHighlightPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className={"editor"}>
                <ContentEditable className={"ContentEditableRoot"} />
              </div>
            </div>
          }
          placeholder={<div className={"placeholder"}> 🖇 Paste your link!</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <OnChangePlugin
          onChange={(editorState) => {
            if (editorStateRef) editorStateRef.current = editorState;
          }}
        />
        <JsonButtonContainer>
          <SaveToJsonOnToolbar
            onClick={() => {
              if (editorStateRef.current)
                setEditorJson(JSON.stringify(editorStateRef.current));
            }}
          />
          <LoadFromJsonOnToolbar data={editorJson} />
        </JsonButtonContainer>

        <TreeViewPlugin />
      </div>
    </LexicalComposer>
  );
};

export default Editor;
