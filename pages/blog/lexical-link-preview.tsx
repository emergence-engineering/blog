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
  () => import("../../articles/lexical-link-preview"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article17Metadata: ArticleIntro = {
  title: "lexical-link-preview-react: Link preview for Lexical",
  author: "Kata",
  authorLink: null,
  introText: /* language=md */ `An open source link preview plugin for lexical made by Emergence-Engineering.`,
  postId: "lexical-link-preview",
  timestamp: 1691532000000,
  imgSrc: "https://lexical.dev/img/logo.svg",
  url: "https://emergence-engineering.com/blog/lexical-link-preview",
};

const MD0 = /* language=md */ `

# Introduction
This easy-to-use plugin for lexical editors enhances the user experience by allowing them to see the page behind the link. It applies the fetched metadata from the website to the preview box and shows you the name, the description and, if available, the image of the page.


# Features
- Listens to paste-event, therefore it automatically fetches the metadata from the page
- Uses your callback function to fetch
- Pastes inline URL and inline-block preview
- Can handle displaying both the link and preview, or just the preview 
- Uses modern 'bookmark' design
- Accepts custom styling with CSS classnames

## Go on and try it here:

`;

const MD1 = /* language=md */ `

# Caveat
Because of CORS, you can't get the link preview directly from the client. You need to have a custom backend that fetches the necessary metadata for the preview. You can either use the paid OpenGraph fetcher API or you can use the \`link-preview-js\` library on your backend. In this article, we will use \`link-preview-js\` with Next.js API to do this.

# How to use 

**1.** Install the plugin: \`npm i -S lexical-link-preview-react\` \n
**2.** Import the node and the plugin: \`import { LinkPreviewNode, LinkPreviewPlugin } from "lexical-link-preview-react"\` \n
**3.** Add the style to your **theme** in the editor-config: \`linkPreviewContainer: "linkPreviewContainer"\` \n
**4.** Add the node to your **node array** in the editor-config: \`node: [LinkPreviewNode,]\` \n
**5.** Add the plugin to your Editor and set its two properties: **showLink** and **fetchingFunction** \n

*This is what you will end up with:*

\`\`\`typescript
    import { LinkPreviewNode, LinkPreviewPlugin } from "lexical-link-preview-react"
    
    const initialconfig = {
        namespace: "yourEditor",
        theme: {linkPreviewContainer: "linkPreviewContainer"},
        onError,
        nodes: [LinkPreviewNode]
    }
    
    const Editor = (): JSX.Element => {
        return (
            <LexicalComposer initialConfig={initialconfig}>
                 
                <LinkPreviewPlugin
                    showLink={false}
                    fetchingFunction={fetchingFunction}
                />
                    
                <RichTextPlugin
                    contentEditable={<ContentEditable />}
                    placeholder={placeholder}
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </LexicalComposer>
        )
    }
\`\`\`

Here we are; now you can paste any valid link into your editor and capture the details of the page: \n
`;
const MD2 = /* language=md */ `
If the look doesn't work for you, you can easily customize the CSS of the box as it uses classnames. Toggle the 'showLink' property on and off to find the look that best suits your design.
And if you have any questions or want to leave feedback, please feel free to contact us!

You can find some more info and check out the docs at <https://github.com/emergence-engineering/>
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article17Metadata.url}
      title={article17Metadata.title}
      description={article17Metadata.introText}
      imgSrc={article17Metadata.imgSrc}
    />
    <ArticleHeader
      title={article17Metadata.title}
      author={article17Metadata.author}
      timestamp={article17Metadata.timestamp}
    />
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
    <div>
      <img src={"/lexical-link-preview.gif"} alt={""} />
    </div>
    <Markdown source={MD2} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
