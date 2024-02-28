import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import ArticleHeader from "../../features/article/components/ArticleHeader";

const DynamicEditor = dynamic(
  () => import("../../articles/lexical-slash-menu-plugin/Editor"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const articleLexicalSlashMenuMetadata: ArticleIntro = {
  title: "lexical-slash-menu-plugin: Slash menu for lexical",
  author: "matejcsok",
  authorLink: null,
  introText: /* language=md */ `An open source slash menu plugin for lexical made by Emergence-Engineering.`,
  postId: "lexical-slash-menu-plugin",
  timestamp: 1693470105618,
  imgSrc: "https://lexical.dev/img/logo.svg",
  url: "https://emergence-engineering.com/blog/lexical-slash-menu-plugin",
};

const MD0 = /* language=md */ `

# Introduction
Over the past few years, we've been heavily focused on ProseMirror, releasing a 
variety of [ open-source plugins ](https://emergence-engineering.com/open-source-projects). With the rising popularity of Meta's Lexical, 
we've received a wave of interest for Lexical-based projects. To test the waters, 
we ported our popular [slash-menu-plugin](https://emergence-engineering.com/blog/prosemirror-slash-menu) from ProseMirror to Lexical. 
We picked this plugin because it's already production tested with three clients and 
closely resembles Notion's slash menu. We're still loyal to ProseMirror but are 
excited about the potential of expanding into more Lexical projects.

The plugin is a port of following two ProseMirror plugins:
- [prosemirror-slash-menu](https://www.npmjs.com/package/prosemirror-slash-menu)
- [prosemirror-slash-menu-react](https://www.npmjs.com/package/prosemirror-slash-menu-react)

## Features
- Notion like slash menu
- Custom options and commands
- Submenus
- Custom rules for opening the slash menu
- Control the slash menu with keyboard or mouse
- Extendable styling and placement options using [floating-ui](https://floating-ui.com/)
- Icons
- Options filtering

# How it works

## Installation
\`npm i @emergence-engineering/lexical-slash-menu-plugin\`

## Usage
Use the \`SlashMenuPlugin\` component as any other lexical plugins.

\`\`\`tsx
  import { SlashMenuPlugin } from "@emergence-engineering/lexical-slash-menu-plugin";
  import "@emergence-engineering/lexical-slash-menu-plugin/dist/styles/style.css";

  export const Editor = () => {
    return (
      <LexicalComposer initialConfig={initialConfig}>
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
      </LexicalComposer>
    )
}
\`\`\`

More detailed documentation can be found on the [GitHub page](https://github.com/emergence-engineering/lexical-slash-menu-plugin)



# …and the product which you can try below:
The plugin requires only one parameter
- \`menuElements\` - an array of \`MenuElement\`s - which describes the menu's structure and commands.
`;

const MD1 = /* language=md */ `
# How to customize the look and feel
You can target any specific element inside Take a look at our default the slash manu CSS classes. Take a look at our [ default CSS file ](https://github.com/emergence-engineering/lexical-slash-menu-plugin/blob/main/src/styles/style.css), feel free to copy it or override any classes.

# That's it! 
If you have any questions or want to leave feedback, please feel free to contact us!

You can check out the code and find some more info about the usability at <https://github.com/emergence-engineering/lexical-slash-menu-plugin>

`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={articleLexicalSlashMenuMetadata.url}
      title={articleLexicalSlashMenuMetadata.title}
      description={articleLexicalSlashMenuMetadata.introText}
      imgSrc={articleLexicalSlashMenuMetadata.imgSrc}
    />
    <ArticleHeader
      title={articleLexicalSlashMenuMetadata.title}
      author={articleLexicalSlashMenuMetadata.author}
      timestamp={articleLexicalSlashMenuMetadata.timestamp}
    />
    <div>
      <img src={"/illustrations/slash-menu.gif"} alt={""} />
    </div>
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
