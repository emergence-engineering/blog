// eslint-disable-next-line no-use-before-define
import React from "react";
import Image from "next/image";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import ArticleHeader from "../../features/article/components/ArticleHeader";
import RichTextEditorImage from "../../public/rich-text-editor.webp";
import { Button } from "../../features/twLandingPage/twComponents/Button";
import { scrollToContact } from "../../features/twLandingPage/utils/scrollToContact";
import RightArrow from "../../public/right-arrow.svg";

export const articlePMMetadata: ArticleIntro = {
  title:
    "What is ProseMirror? And why is it the best framework for Rich Text editors?",
  author: "Viktor",
  authorLink: null,
  introText: /* language=md */ `When it comes to building rich text editors, ProseMirror stands out for its flexibility and control.`,
  postId: "prosemirror",
  timestamp: 1643829565161,
  url: "https://emergence-engineering.com/blog/prosemirror",
  tags: ["ProseMirror", "Rich Text Editor"],
};

const MD0 = /* language=md */ `
    
# Create amazing WYSIWYG, rich text editor experiences with ProseMirror

When it comes to building rich text editors, ProseMirror stands out for its flexibility and control. Its modular architecture and functional design make it possible to create custom, performance-optimized editors. In this post, we’ll dig into the core features that make ProseMirror a solid choice for implementing or extending rich text editors.

# What is a Rich Text Editor

Rich text editors are everywhere, in comment sections, text input fields, or any tool that needs more advanced text editing features. The easiest way to explain a Rich Text Editor is to compare it to a plain text editor. A plain text editor, like Notepad, only lets you write basic text. A Rich Text Editor, like Google Docs, allows you to format text, add images, links, tables, and much more. It's a toolbox for turning plain text into something way more engaging and professional!

A key feature of a Rich Text Editor is WYSIWYG (What You See Is What You Get), meaning you can see the final result as you’re editing, which helps you work more efficiently. You can also integrate collaboration tools and AI features, making these editors invaluable if you’re working on text-based AI products. Basically, it’s like using Microsoft Word or Google Docs, but right inside your browser.

So, whether you’re building a collaborative platform or enhancing an AI product, Rich Text Editors gives you the flexibility to create and format text the way you want!

`;

const MD1 = /* language=md */ `Frameworks streamline the development of rich text editors by offering reusable components, predefined features, and customization options, allowing developers to implement essential functionality like text formatting and media embedding efficiently, without reinventing the wheel.

There are many technologies and frameworks for building rich text editors. You can read about our top 8 pics for rich text editors. You should always pick the best technology based on the specifications of your product and customer needs. We found that for complex web app projects the best framework that allows for the most customization is ProseMirror.

# Why ProseMirror?

If you want to build a web based rich text editor ( think Microsoft Word, Google docs, Notion ) you either start from scratch and spend a few years laying down the foundation or you use a framework and get a head start. There are a lot of frameworks out there like Draft, Slate, Quill, CKEditor, TinyMCE etc. You should always pick the best technology based on the specifications of your product and customer needs.

[__Marijn Haverbeke__](https://marijnhaverbeke.nl/) the author of Eloquent JavaScript, created ProseMirror and CodeMirror to be the most flexible and powerful browser based text editors. ProseMirror has a steep learning curve but that comes with a lot of flexibility and power, lacking in other frameworks.

In our experience with other editors they are set in their ways, which can be good if you want to use them as is, but if you want to customize them you start to run into trouble. Usually you can do what you want but you have to fight the framework.

Not the case with ProseMirror. There is a way to handle every case and usually one correct way to do it.

It also has out of the box support for collaboration, and has very mature ecosystem. TipTaP is a framework build on the top of ProseMirror, with a lot of Plugins and extra functionality. It's a quick way to get started.

# Main benefits of ProseMirror

## Collaborative editing

When it comes to real-time collaboration, ProseMirror stands out. Unlike other frameworks that tack on collaboration as a secondary feature, ProseMirror was designed with this in mind from the beginning. It handles multiple users editing the same document seamlessly, avoiding the usual pitfalls of concurrency issues. If you're building something like Google Docs or any team-based platform, ProseMirror’s solid foundation for collaborative editing will save you a lot of headaches.

## Extensible Schemas

If customization is a must, ProseMirror's extensible schemas give you all the flexibility you need. You’re not locked into a rigid structure—this framework lets you define custom document structures and content models that fit your exact needs. Whether you’re building a markdown editor, a blog platform, or something that handles more complex structured content, ProseMirror lets you avoid reinventing the wheel while giving you full control over how the document is structured and behaves.

## Modular Architecture

One of the best things about ProseMirror is its well-thought-out modular architecture. The abstraction boundaries are perfect, so if you know the system, you know where to look to solve a problem. It exposes everything you need and hides everything you don’t. Other frameworks often hide important parts and make certain features really hard to implement, but ProseMirror doesn’t.

## Pluggable System

ProseMirror’s plugin system makes it easy to extend functionality without getting bogged down in modifying core components. Want custom commands, specific input behaviors, or third-party service integrations? No problem. The plugin architecture lets you package and reuse extensions across projects, making it a go-to for teams managing multiple environments. You can make your editor do whatever you need it to without hitting roadblocks.

## Functional Architecture

ProseMirror follows a functional, immutable architecture that aligns perfectly with modern JavaScript frameworks like React and Vue. This makes it much easier to reason about state changes and implement complex behaviors, particularly in applications with heavy interaction logic. Immutability means fewer surprises and cleaner debugging, making it a reliable choice for apps where state management is critical.

## Unopinionated Core

Most frameworks force you into their way of doing things. ProseMirror doesn’t. It’s unopinionated by design, giving you a minimal core to build on top of. That means you can shape your editor to fit your needs—whether it's a simple text input for forms or a full-fledged content creation platform. If you need flexibility and control, ProseMirror gives you that freedom without forcing you into predefined patterns. You’re in the driver’s seat.
`;

const MD2 = /* language=md */ `# How we build and contribute to the ecosystem

The ProseMirror ecosystem is very active and we're grateful for all of the work others have done. We have also contributed with Blog posts and open-source plugins, hopefully making someone else's life easier.

Our own AI ProseMirror plugin: [__SuggestCat__](https://www.suggestcat.com/).
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={articlePMMetadata.url}
      title={articlePMMetadata.title}
      description={articlePMMetadata.introText}
      imgSrc={articlePMMetadata.imgSrc}
    />
    <ArticleHeader
      title={articlePMMetadata.title}
      author={articlePMMetadata.author}
      timestamp={articlePMMetadata.timestamp}
      tags={articlePMMetadata.tags}
    />
    <Markdown source={MD0} />
    <div className="relative mt-4 flex aspect-[3342/1706] flex-col items-center">
      <Image
        src={RichTextEditorImage}
        alt="rich text editor"
        fill
        placeholder="blur"
        style={{ objectFit: "contain" }}
      />
    </div>
    <Markdown source={MD1} />
    <div className="flex w-full flex-col justify-between gap-4 py-8 lg:flex-row">
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold">Talk to an expert</div>
        <RightArrow />
      </div>
      <Button
        label="Contact us"
        theme="primary"
        handleClick={scrollToContact}
      />
    </div>
    <Markdown source={MD2} />
  </ArticleWrapper>
);
export default Article;
