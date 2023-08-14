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
import OpenToolbarOnTheLeft from "../../features/article/components/lexicalComponents/ToolbarPluginOnTheLeft";
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
import DraggableBlockPlugin from "../../features/article/components/lexicalComponents/DraggableBlockPlugin";

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
  // previewBox: "previewBox",
  // previewImage: "previewImage",
  // previewDescription: "previewDescription",
  code: "codeBlock",
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

const Editor = ({}: Props): JSX.Element => {
  const [showBtnForLeftMenu, setShowBtnForLeftMenu] = useState(false);
  const editorStateRef = useRef<EditorState>();
  const [editorJson, setEditorJson] = useState("");
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

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
          {floatingAnchorElem && (
            <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
          )}
          <ToolbarPlugin />
          <OpenToolbarOnTheLeft showLeftMenu={showBtnForLeftMenu} />
          <AutoLinkPlugin matchers={MATCHERS} />
          <LinkPreviewPlugin
            showLink={false}
            fetchingFunction={thisFetchingFunction}
          />
          <HashtagPlugin />
          <MarkdownShortcutPlugin />
          <BannerPlugin />
          <HorizontalRulePlugin />
          <CheckListPlugin />
          <CodeHighlightPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <RichTextPlugin
            contentEditable={
              <div className="editor-scroller">
                <div ref={onRef} className={"editor"}>
                  <StyledContentEditable
                    onClick={() => setShowBtnForLeftMenu(!showBtnForLeftMenu)}
                  />
                </div>
              </div>
            }
            placeholder={<Placeholder> 🖇 Paste your link!</Placeholder>}
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
    </ArticleWrapper>
  );
};

export default Editor;
