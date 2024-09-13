import React, { FunctionComponent } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { projectDetails } from "../utils/openSrcPrData";

import Lex from "../public/lp/lex.svg";
import Skiff from "../public/lp/skiff.svg";
import AXDRAFT from "../public/lp/axdraft.svg";
import Chapterly from "../public/lp/chapterly.svg";

import SuggestCatScrenshot from "../public/lp/suggestcat-screenshot.png";

import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { TwContact } from "../features/twLandingPage/twComponents/TwContact";
import PostCard from "../features/twBlog/PostCard";
import { montserrat } from "../utils/fonts";
import ProjectCard from "../features/twBlog/ProjectCard";
import { articlePluginSystemMetadata } from "./blog/prosemirror-plugin-system";
import { article13Metadata } from "./blog/prosemirror-slash-menu";
import { article11Metadata } from "./blog/prosemirror-link-preview";
import { article6Metadata } from "./blog/prosemirror-codemirror-block";
import { article5Metadata } from "./blog/prosemirror-image-plugin-2";
import { article4Metadata } from "./blog/prosemirror-link-plugin";
import { article3Metadata } from "./blog/prosemirror-image-plugin";
import { article2Metadata } from "./blog/prosemirror-sync-1";

const title = "Emergence Engineering";
const description =
  "Emergence Engineering is a full-stack software development company from the EU. We build ProseMirror based editors, AI and LLM based applications, mobile applications and websites.";

const Index: FunctionComponent = () => {
  return (
    <TwLayout>
      <Head>
        <title>{title}</title>
        <meta
          key="og:url"
          name="og:url"
          property="og:url"
          content="https://emergence-engineering.com/prosemirror"
        />
        <meta
          key="og:type"
          name="og:type"
          property="og:type"
          content="website"
        />
        <meta
          key="og:title"
          name="og:title"
          property="og:title"
          content="Emergence Engineering - ProseMirror"
        />
        <meta
          key="og:description"
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:image"
          name="og:image"
          property="og:image"
          content="https://emergence-engineering.com/ee-icon-192192.png"
        />
      </Head>
      <div className="flex w-full flex-col items-center gap-4 bg-white pb-8 md:pb-16">
        <h1 className="my-3 flex w-full items-center justify-center text-5xl font-bold text-black md:my-6 md:text-7.5xl">
          PROSEMIRROR
        </h1>
        <div className="flex w-full items-center justify-center text-xl font-bold text-black md:text-2xl">
          The team for your&nbsp;
          <span className="text-red-600">Rich Text Editor </span>&nbsp;needs
        </div>
        <div className="flex w-full items-center justify-center text-xl font-bold text-black md:text-2xl">
          Create amazing experiences with ProseMirror
        </div>
        <div className="flex w-full max-w-3xl flex-col items-start gap-3">
          <h2 className="text-2xl">What is a Rich Text Editor</h2>
          <p className={`${montserrat.className}`}>
            The easiest way to explain what a Rich Text Editor is, is to compare
            it to a plain text editor. A plain text editor is like Notepad, it
            only allows you to write text. A Rich Text Editor is like Microsoft
            Word, it allows you to format the text, add images, links, tables,
            etc. <br />
            Not only you can add these different elements, you also edit the
            document in a What You See Is What You Get (WYSIWYG) way. This means
            that you can see the final result while you are editing it. Word and
            Google docs are also this way.
            <br />
          </p>
          <h2 className="text-2xl">Why ProseMirror</h2>
          <p className={`${montserrat.className}`}>
            If you want to build a web based rich text editor ( think Microsoft
            Word, Google docs, Notion ) you either start from scratch and spend
            a few years laying down the foundation or you use a framework and
            get a head start. There are a lot of frameworks out there like
            Draft, Slate, Quill, CKEditor, TinyMCE etc. <br /> <br />
            <Link
              //className={`${montserrat.className} font-bold`}
              href="https://marijnhaverbeke.nl/"
            >
              Marijn Haverbeke
            </Link>
            &nbsp;the author of Eloquent JavaScript, created ProseMirror and
            CodeMirror to be the most flexible and powerful browser based text
            editors. ProseMirror has a steep learning curve but that comes with
            a lot of flexibility and power, lacking in other frameworks.
            <br />
            In our experience with other editors they are set in their ways,
            which can be good if you want to use them as is, but if you want to
            customize them you start to run into trouble. Usually you can do
            what you want but you have to fight the framework.
            <br />
            <br />
            Not the case with ProseMirror. There is a way to handle every case
            and usually one correct way to do it.
            <br />
            It also has out of the box support for collaboration, and has very
            mature ecosystem.&nbsp;
            <Link
              //className={`${montserrat.className} font-bold`}
              href="https://tiptap.dev/"
            >
              TipTap
            </Link>
            &nbsp; is a framework build on the top of ProseMirror, with a lot of
            Plugins and extra functionality. It&apos;s a quick way to get
            started.
            <br />
          </p>
          <h2 className="text-2xl">Our own product: SuggestCat</h2>
          <Image
            src={SuggestCatScrenshot}
            alt="screenshot of SuggestCat"
            width={400}
          />
          <p className={`${montserrat.className}`}>
            <Link
              // className={`${montserrat.className} font-bold`}
              href="https://www.suggestcat.com/"
            >
              SuggestCat
            </Link>
            &nbsp;is a plugin for ProseMirror that uses AI to suggest
            improvements and provides a Notion-like slash menu experience with
            AI based writing tools. It&apos;s a great way to improve your
            writing and get suggestions on the fly.
          </p>
          <h2 className="text-2xl">We worked on</h2>
          <div className="flex w-full items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <Link href="#" target="_blank">
                <Lex />
              </Link>
              <Skiff />
              <AXDRAFT />
              <Chapterly />
            </div>
          </div>
          <h2 className="text-2xl">Giving back</h2>
          <p className={`${montserrat.className}`}>
            The ProseMirror ecosystem is very active and we&apos;re grateful for
            all of the work others have done. We have also contributed with Blog
            posts and open source plugins, hopefully making someone else&apos;s
            life easier.
          </p>

          <div className="my-3 flex w-full items-center justify-center text-5xl font-bold text-black md:my-6 md:text-7.5xl">
            BLOG
          </div>
          <div className="flex flex-col gap-6">
            <PostCard {...articlePluginSystemMetadata} />
            <PostCard {...article13Metadata} />
            <PostCard {...article11Metadata} />
            <PostCard {...article6Metadata} />
            <PostCard {...article5Metadata} />
            <PostCard {...article4Metadata} />
            <PostCard {...article3Metadata} />
            <PostCard {...article2Metadata} />
          </div>
          <div className="my-3 flex h-24 w-full items-center justify-center text-4xl font-bold text-black md:mx-10 md:my-6 md:text-7.5xl">
            <span className="text-red-600">OPEN</span>&nbsp;<span>SOURCE</span>
          </div>
          <div className="flex flex-col gap-6">
            {projectDetails.map((i, idx) => {
              return (
                <ProjectCard
                  title={i.title}
                  article={i.article}
                  icon={i.icon}
                  gitLink={i.gitLink}
                  description={i.description}
                  command={i.command}
                  tags={i.tags}
                  key={`${i}_${idx}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <TwContact />
    </TwLayout>
  );
};

export default Index;
