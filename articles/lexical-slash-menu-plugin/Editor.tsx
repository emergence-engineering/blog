import React, { useRef, useState } from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import {
  AutoLinkPlugin,
  createLinkMatcherWithRegExp,
} from "@lexical/react/LexicalAutoLinkPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
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
import {
  $createTextNode,
  $getSelection,
  $isParagraphNode,
  EditorState,
  LexicalEditor,
  LineBreakNode,
  ParagraphNode,
} from "lexical";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { SlashMenuPlugin } from "@emergence-engineering/lexical-slash-menu-plugin";
import "@emergence-engineering/lexical-slash-menu-plugin/dist/styles/style.css";

import ToolbarPlugin from "../../features/article/components/lexicalComponents/ToolbarPlugin";
import TreeViewPlugin from "../../features/article/components/lexicalComponents/TreeViewPlugin";
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

const insertText = (text: string) => {
  const selection = $getSelection();
  const nodes = selection?.getNodes();
  const paragraphNode = $isParagraphNode(nodes?.[0])
    ? nodes?.[0]
    : nodes?.[0]?.getParent();
  const textNode = $createTextNode(text);
  if (paragraphNode) {
    paragraphNode.append(textNode);
  }
};

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
    LineBreakNode,
  ],
};

const URL_REGEX =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

const Editor = (): JSX.Element => {
  const editorStateRef = useRef<EditorState>();
  const [editorJson, setEditorJson] = useState("");

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
        <SlashMenuPlugin
          clickable
          menuElements={[
            {
              id: "1",
              label: "First",
              type: "command",
              command: (editor: LexicalEditor) => {
                editor.update(() => {
                  insertText("First");
                });
              },
            },
            {
              id: "2",
              label: "Second",
              type: "command",
              command: (editor: LexicalEditor) => {
                editor.update(() => {
                  insertText("Second");
                });
              },
            },
            {
              id: "3",
              label: "Submenu",
              type: "submenu",
              elements: [
                {
                  id: "4",
                  label: "Third",
                  type: "command",
                  command: (editor: LexicalEditor) => {
                    editor.update(() => {
                      insertText("Third");
                    });
                  },
                },
                {
                  id: "5",
                  label: "Fourth",
                  type: "command",
                  command: (editor: LexicalEditor) => {
                    editor.update(() => {
                      insertText("Fourth");
                    });
                  },
                },
              ],
            },
          ]}
        />
        <ToolbarPlugin />
        <AutoLinkPlugin matchers={MATCHERS} />
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
          placeholder={
            <div className={"placeholder"}> 🖇 Type "/" to open slash menu!</div>
          }
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
