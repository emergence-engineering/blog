// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import Markdown from "../../features/article/components/Markdown";
import ArticleHeader from "../../features/article/components/ArticleHeader";

const DynamicEditor = dynamic(
  () => import("../../articles/prosemirror-slash-menu"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article13Metadata: ArticleIntro = {
  title: "prosemirror-slash-menu: Slash menu for ProseMirror",
  author: "Áron",
  authorLink: null,
  introText: /* language=md */ `Implement a slash menu for ProseMirror in your app in 5 minutes.`,
  postId: "prosemirror-slash-menu",
  timestamp: 1687439213532,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/prosemirror-slash-menu",
};

const MD0 = /* language=md */ `
# What's this about?

Release of [ProseMirror slash menu plugin](https://github.com/emergence-engineering/prosemirror-slash-menu) 
and the companion [ProseMirror slash menu UI in react](https://github.com/emergence-engineering/prosemirror-slash-menu-react).

We are all familiar with the concept of a slash menu from Slack, Discord, Notion, etc. and it seems it would be a perfect fit for ProseMirror as well. 
With these two simple packages you can quickly add a slash menu to your editor and execute ProseMirror commands, or any other commands within your app for that matter.

# How does it work?

The idea is for you to simply provide an array of MenuElements to the plugin, and it will take care of closing and opening, executing commands, navigation within menus and sub menus with the keyboard and 
filtering the items as the user is typing. 

By using [prosemirror-slash-menu-react](https://gitlab.com/emergence-engineering/prosemirror-slash-menu-react) you can also get a UI for the menu which can be styled to your liking just by overriding some CSS classes.

# Why two packages? 

So you can use it with any UI framework you want. Our thought process was: Let the plugin handle all the logic and the UI will be just a dumb display. 
Not to mention, we really don't want to bundle React into the package for those of you who will not use it.

[The code for this post is here](https://gitlab.com/emergence-engineering/blog/-/tree/master/articles/prosemirror-slash-menu)
`;

const MD1 = /* language=md */ `
# How to use?

1. Install the plugins: **npm i -S prosemirror-slash-menu prosemirror-slash-menu-react**
3. Import **SlashMenuReact**, **SlashMenuPlugin** and **defaultElements** from *prosemirror-slash-menu-react* 
4. Add the plugin to your editor **SlashMenuPlugin(defaultElements)** 
5. Add the UI to your editor **SlashMenuReact**

In codespeak:
\`\`\`typescript
import React, { useEffect, useRef, useState } from "react";
import { exampleSetup } from "prosemirror-example-setup";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import schema from "./schema";
import { SlashMenuPlugin } from "prosemirror-slash-menu";
import {
  defaultElements,
  defaultIcons,
  Icons,
  SlashMenuReact,
} from "prosemirror-slash-menu-react";

const ProseMirrorSlashMenu = () => {
  const [pmState, setPmState] = useState<EditorState>();
  const [editorView, setEditorView] = useState<EditorView>();
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!editorRef.current) return;
    const state = EditorState.create({
      doc: schema.nodeFromJSON({
        content: [
          {
            content: [
              {
                text: "Type '/' after a space to open the menu. ",
                type: "text",
              },
            ],
            type: "paragraph",
          },
        ],
        type: "doc",
      }),
      plugins: [
        SlashMenuPlugin(defaultElements),
        ...exampleSetup({
          schema,
        }),
      ],
    });
    const view: EditorView = new EditorView(editorRef.current, {
      state,
      dispatchTransaction: (tr) => {
        try {
          const newState = view.state.apply(tr);
          view.updateState(newState);
          setPmState(newState);
        } catch (e) {}
      },
    });
    setEditorView(view);
    return () => {
      view && view.destroy();
    };
  }, [editorRef]);
  return (
    <>
      <div ref={editorRef} id="editor" />
      {pmState && editorView && (
        <SlashMenuReact
          icons={{
            [Icons.HeaderMenu]: defaultIcons.H1Icon,
            [Icons.Level1]: defaultIcons.H1Icon,
            [Icons.Level2]: defaultIcons.H2Icon,
            [Icons.Level3]: defaultIcons.H3Icon,
            [Icons.Bold]: defaultIcons.BoldIcon,
            [Icons.Italic]: defaultIcons.ItalicIcon,
            [Icons.Code]: defaultIcons.CodeIcon,
            [Icons.Link]: defaultIcons.LinkIcon,
          }}
          editorState={pmState}
          editorView={editorView}
        />
      )}
    </>
  );
};
\`\`\`

That's it, now you can override SlashMenuReacts CSS classes to your liking, pass in your own commands and have a slash menu in your editor. 
With this first version we aim to cover the most basic use cases, but we already have some customization options in mind.
We are not mind readers yet though, only you know what you really need so feel free to contact us with your suggestions for improvement.

You can check out the docs below:

<https://github.com/emergence-engineering/prosemirror-slash-menu> 

<https://github.com/emergence-engineering/prosemirror-slash-menu-react>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article13Metadata.url}
      title={article13Metadata.title}
      description={article13Metadata.introText}
      imgSrc={article13Metadata.imgSrc}
    />
    <ArticleHeader
      title={article13Metadata.title}
      author={article13Metadata.author}
      timestamp={article13Metadata.timestamp}
    />
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
