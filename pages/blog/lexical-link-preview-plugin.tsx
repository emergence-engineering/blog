import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";

const DynamicEditor = dynamic(
  () => import("../../articles/lexical-link-preview"),
  { ssr: false },
);

const EditorStyling = styled.div`
  flex: 1;
`;

export const article17Metadata: ArticleIntro = {
  title: "lexical-link-preview-plugin: Link preview for Lexical",
  author: "Kata",
  authorLink: null,
  introText: /* language=md */ `An open source link preview plugin for lexical made by Emergence-Engineering.`,
  postId: "lexical-link-preview-plugin",
  timestamp: 1691532000000,
  imgSrc: "https://lexical.dev/img/logo.svg",
  url: "https://emergence-engineering.com/blog/lexical-link-preview-plugin",
  tags: ["Lexical", "Link Preview", "Open Source", "Plugin Development"],
};

const MD0 = /* language=md */ `

# Introduction
We created a developer friendly plugin for Meta's Lexical editor. The plugin adds a link preview box well known from social media. By default, it displays page's name, description, and image if available.

## Features
- Listens to paste-event, therefore it automatically fetches the metadata from the page
- Uses your callback function to fetch
- Pastes inline URL and inline-block preview
- Can handle displaying both the link and preview, or just the preview
- Design similar to social media link previews 
- Accepts custom styling with CSS classnames

# Story-time: why DecoratorNode?
As you already know, the lexical editor uses one node, \`LexicalNode\`, which is internally extended to create five basic nodes: \`RootNode\`, \`LineBreakNode\`, \`ElementNode\`, \`TextNode\`, and \`DecoratorNode\` - the last three can be further extended.
\`ElementNode\` would be perfect for our purpose: the \`createDOM\` method allows us to create the preview box as it runs when we initialize a new object. ElementNode only accepts JavaScript elements, that's fine if you want to develop framework-agnostic UI stuff.
 In order to use React components we need a \`DecoratorNode\`, that has a similar method, \`decorate\`, which we could use conveniently.

# Let's create the plugin first
The plugin listens for a paste event, and we found the relevant command among the predefined ones, so we just had to use it. Wrapped in a useEffect, the \`editor.registerCommand\` lets us attach an event handler to deal with the "paste command" which is Lexical-speak for the content editable paste event. If the inserted string passes the URL regexp, the result of the custom fetcher function is pushed into an array with the necessary metadata from the web page. This triggers the \`editor.update\` function to create a new \`LinkPreviewNode\` instance and insert it into the editor.
However, there was a problem: the fetch should run asynchronously, but the \`registerCommand\` could not handle it. The solution: after checking if the inserted element is a valid URL, an async function waits for the metadata from the page and wraps the whole \`editor.update\`.

# $createLinkPreviewNode
This is what creates a new \`LinkPreviewNode\` object, it's a peculiarity of Lexical. Still, first we needed to create the \`LinkPreviewNode\` class, so we could bind this command to it.
As I wrote above, the \`LinkPreviewNode\` extends the \`DecoratorNode\`, specifically the \`DecoratorBlockNode\`, because the former creates an inline node, the latter, as you can guess, a block. The node gets a URL and the metadata from the page, and the decorate method passes it - and some other props - to our React component. Here, we can link the classname from the theme to the component and set an onClose functionality, since the decorate method also gets the editor state. All we had to do was pass a function that updates the editor to remove the node itself.


# The preview box
The preview box component returns a \`BlockWithAlignableContents\` component that wraps the \`<a/>\` tag and the preview itself. It handles the classname binding, the nodeKey, and the removal of the node with the backspace or delete key.


# …and the product that you can try below:
The plugin requires 3 parameters: 
- \`showLink <boolean>\`: when the user pastes the URL, showLink decides if only the preview should be pasted into the editor or also the link. When the plugin checks if the pasted item is a valid URL, it returns true or false depending on the value of showLink.
- \`fetchDataForPreview: (link: string) => Promise<{url: string, title: string, description: string, images: string[]}>\`: this function fetches the metadata from the linked page.
- \`showClosePreview <boolean>\`: if true, the preview displays a close button
`;

const MD1 = /* language=md */ `

# Caveat
Because of CORS, you can't get the link preview directly from the client. You need to have a custom backend that fetches the necessary metadata for the preview. You can either use the paid OpenGraph fetcher API or you can use the \`link-preview-js\` library on your backend. In this article, we will use \`link-preview-js\` with Next.js API to do this.

# That's it! 
If you have any questions or want to leave feedback, please feel free to contact us!

You can check out the code and find some more info about the usability at <https://github.com/emergence-engineering/lexical-link-preview-plugin>

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
      tags={article17Metadata.tags}
    />
    <div>
      <img src={"/lexical-link-preview.gif"} alt={""} />
    </div>
    <Markdown source={MD0} />
    <EditorStyling>
      <DynamicEditor />
    </EditorStyling>
    <Markdown source={MD1} />
  </ArticleWrapper>
);
export default Article;
