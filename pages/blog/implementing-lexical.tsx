import React, { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";
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
  const [isInsertingThingsOpen, setIsInsertingThingsOpen] = useState(false);

  return (
    <Toolbar>
      <DoOnToolbar />
      <NormalPOnToolbar />
      <ToolbarItem onClick={() => setIsStylingPOpen(!isStylingPOpen)}>
        Style P ⬇️
      </ToolbarItem>
      <Dropdown isOpen={isStylingPOpen} id={"s"}>
        <HeadingOnToolbar />
        <ListingOnToolbar />
        <BannerOnToolbar />
        <BlockquoteOnToolbar />
      </Dropdown>

      <ToolbarItem
        onClick={() => setIsFormattingTextOpen(!isFormattingTextOpen)}
      >
        Format text ⬇️
      </ToolbarItem>
      <Dropdown isOpen={isFormattingTextOpen} id={"f"}>
        <FormatThings />
        <MonocodeOnToolbar />
      </Dropdown>

      <ToolbarItem onClick={() => setIsColoringOpen(!isColoringOpen)}>
        Coloring ⬇️
      </ToolbarItem>
      <Dropdown isOpen={isColoringOpen} id={"c"}>
        <ColoringOnToolbar />
      </Dropdown>

      <ToolbarItem
        onClick={() => setIsInsertingThingsOpen(!isInsertingThingsOpen)}
      >
        Insert things ⬇️
      </ToolbarItem>
      <Dropdown isOpen={isInsertingThingsOpen} id={"i"}>
        <HROnToolbar />
      </Dropdown>

      <LinkOnToolbar />
    </Toolbar>
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

export default function Editor({}: Props): JSX.Element {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags url={""} title={""} description={""} imgSrc={""} />
      <ArticleHeader
        title={"Implementing Lexical"}
        author={"x"}
        timestamp={1}
      />
      <LexicalComposer initialConfig={initialConfig}>
        <div style={{ position: "relative" }}>
          <TabIndentationPlugin />
          <AutoFocusPlugin />
          <HashtagPlugin />
          <HistoryPlugin />

          <ToolbarPlugin />
          <BannerPlugin />
          <HorizontalRulePlugin />
          <LinkPlugin />
          <CodeHighlightPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

          <RichTextPlugin
            contentEditable={<StyledContentEditable />}
            placeholder={<Placeholder>Enter some text...</Placeholder>}
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
}
