import React, { useEffect, useRef, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { HashtagNode } from "@lexical/hashtag";

// import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import {
  BannerOnToolbar,
  BlockquoteOnToolbar,
  ColoringOnToolbar,
  DoOnToolbar,
  FormatThings,
  HeadingOnToolbar,
  HROnToolbar,
  LinkOnToolbar,
  ListingOnToolbar,
  MonocodeOnToolbar,
  NormalPOnToolbar,
} from "../../features/article/components/OwnLexicalToolbar";
import CodeHighlightPlugin, {
  BannerNode,
  BannerPlugin,
} from "../../features/article/components/OwnLexicalPlugins";
import {
  Dropdown,
  LeftToolbar,
  Placeholder,
  StyledContentEditable,
  Toolbar,
  ToolbarItem,
} from "../../utils/lexical";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ParagraphNode } from "lexical";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";

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
  link: "linkkkk",
  hashtag: "hashtag",
};

interface Props {}

// TODO: doesnt close when a tag is clicked on
const ToolbarPlugin = (): JSX.Element => {
  const [isStylingPOpen, setIsStylingPOpen] = useState(false);
  const [isFormattingTextOpen, setIsFormattingTextOpen] = useState(false);
  const [isColoringOpen, setIsColoringOpen] = useState(false);

  const styleRef = useRef<HTMLDivElement>(null);
  const formatRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;

      if (
        isStylingPOpen &&
        styleRef.current &&
        !styleRef.current.contains(target as HTMLDivElement)
      ) {
        setIsStylingPOpen(false);
      } else if (
        isFormattingTextOpen &&
        formatRef.current &&
        !formatRef.current.contains(target as HTMLDivElement)
      ) {
        setIsFormattingTextOpen(false);
      } else if (
        isColoringOpen &&
        colorRef.current &&
        !colorRef.current.contains(target as HTMLDivElement)
      ) {
        setIsColoringOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isStylingPOpen, isColoringOpen, isFormattingTextOpen]);

  return (
    <Toolbar>
      <NormalPOnToolbar />

      <div ref={styleRef} onClick={() => setIsStylingPOpen(!isStylingPOpen)}>
        <ToolbarItem>Style P ⬇️</ToolbarItem>
        <Dropdown isOpen={isStylingPOpen} id={"s"}>
          <HeadingOnToolbar />
          <ListingOnToolbar />
          <BannerOnToolbar />
          <BlockquoteOnToolbar />
        </Dropdown>
      </div>

      <div
        ref={formatRef}
        onClick={() => setIsFormattingTextOpen(!isFormattingTextOpen)}
      >
        <ToolbarItem>Format text ⬇️</ToolbarItem>
        <Dropdown isOpen={isFormattingTextOpen} id={"f"}>
          <FormatThings />
          <MonocodeOnToolbar />
        </Dropdown>
      </div>

      <div ref={colorRef} onClick={() => setIsColoringOpen(!isColoringOpen)}>
        <ToolbarItem>Coloring ⬇️</ToolbarItem>
        <Dropdown isOpen={isColoringOpen} id={"c"}>
          <ColoringOnToolbar />
        </Dropdown>
      </div>

      <LinkOnToolbar />
    </Toolbar>
  );
};

const ToolbarPluginOnTheLeft = ({ show }: { show: boolean }): JSX.Element => {
  const [isInsertingThingsOpen, setIsInsertingThingsOpen] = useState(false);
  const insertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;
      if (
        isInsertingThingsOpen &&
        insertRef.current &&
        !insertRef.current.contains(target as HTMLDivElement)
      ) {
        setIsInsertingThingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isInsertingThingsOpen]);

  return (
    <LeftToolbar show={show}>
      <DoOnToolbar />

      <div
        ref={insertRef}
        onClick={() => setIsInsertingThingsOpen(!isInsertingThingsOpen)}
      >
        <ToolbarItem>Insert things ⬇️</ToolbarItem>
        <Dropdown isOpen={isInsertingThingsOpen} id={"i"}>
          <HROnToolbar />
        </Dropdown>
      </div>
    </LeftToolbar>
  );
};

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
    QuoteNode,
    HashtagNode,
    CodeHighlightNode,
    ParagraphNode,
  ],
};

const Editor = ({}: Props): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <ArticleWrapper>
      <LexicalComposer initialConfig={initialConfig}>
        <div style={{ position: "relative" }}>
          <TabIndentationPlugin />
          <AutoFocusPlugin />
          <HashtagPlugin />
          <HistoryPlugin />

          <ToolbarPlugin />
          <ToolbarPluginOnTheLeft show={show} />
          <MarkdownShortcutPlugin />
          <BannerPlugin />
          <HorizontalRulePlugin />
          <LinkPlugin />
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
        {/*<MyOnChangePlugin*/}
        {/*  onChange={(editorState) => {*/}
        {/*    console.log(editorState);*/}
        {/*  }}*/}
        {/*/>*/}
      </LexicalComposer>
    </ArticleWrapper>
  );
};

export default Editor;
