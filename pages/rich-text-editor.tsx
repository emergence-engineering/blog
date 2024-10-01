import React, { FunctionComponent } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { projectDetails } from "../utils/openSrcPrData";

import Lex from "../public/lp/lex.svg";
import Skiff from "../public/lp/skiff.svg";
import AXDRAFT from "../public/lp/axdraft.svg";
import Chapterly from "../public/lp/chapterly.svg";

import SuggestCatScrenshot from "../public/lp/suggestcat-screenshot.png";
import RichText from "../public/rich-text.webp";

import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { TwContact } from "../features/twLandingPage/twComponents/TwContact";
import PostCard from "../features/twBlog/PostCard";
import ProjectCard from "../features/twBlog/ProjectCard";
import { articlePluginSystemMetadata } from "./blog/prosemirror-plugin-system";
import { article13Metadata } from "./blog/prosemirror-slash-menu";
import { article11Metadata } from "./blog/prosemirror-link-preview";
import { article6Metadata } from "./blog/prosemirror-codemirror-block";
import { article5Metadata } from "./blog/prosemirror-image-plugin-2";
import { article4Metadata } from "./blog/prosemirror-link-plugin";
import { article3Metadata } from "./blog/prosemirror-image-plugin";
import { article2Metadata } from "./blog/prosemirror-sync-1";
import { Button } from "../features/twLandingPage/twComponents/Button";
import { scrollToContact } from "../features/twLandingPage/utils/scrollToContact";
import RightArrow from "../public/right-arrow.svg";

const title = "Emergence Engineering";
const description =
  "Emergence Engineering is a full-stack software development company from the EU. We build ProseMirror based editors, AI and LLM based applications, mobile applications and websites.";

const Index: FunctionComponent = () => {
  const router = useRouter();

  return (
    <TwLayout>
      <Head>
        <title>{title}</title>
        <meta
          key="og:url"
          name="og:url"
          property="og:url"
          content="https://emergence-engineering.com/rich-text-editor"
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
          content="Emergence Engineering - Rich Text Editor"
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
      <div className="flex w-full flex-col items-center gap-4 bg-white">
        <div className="grid w-full grid-cols-2">
          <div className="flex flex-col justify-around bg-black pr-4 text-white">
            <Button
              theme="secondary"
              label="BACK"
              handleClick={() => router.push("/")}
            />
            <h1 className="text-5xl font-bold">
              The team to develop your custom Rich Text editors
            </h1>
            <div className="font-montserrat">
              Building powerful WYSIWYG text editors with ProseMirror, adding
              collaboration with YJS, or integrating AI features
            </div>
            <Button
              theme="secondary"
              label="TALK TO AN EXPERT"
              handleClick={scrollToContact}
            />
          </div>
          <div className="relative aspect-[729/486] w-full">
            <Image
              src={RichText}
              alt="Rich text editor"
              style={{ objectFit: "contain" }}
              fill
              priority
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex w-full max-w-3xl flex-col items-start gap-3 self-center bg-white">
          <h2 className="text-4xl font-bold">Rich Text editor development</h2>
          <p className="font-montserrat">
            Our rich text editor and ProseMirror development service is for
            companies looking to expand their teams with experienced engineers
            who can build new features and significantly accelerate the
            development process. We also provide consulting services, offering
            the expertise and guidance of senior developers who perform code
            reviews, assist with scaling, debugging, and implement rich text
            editor and WYSIWYG best practices. <br />
            We offer a complete solution for companies looking to develop and
            maintain web applications. We assist with everything from planning
            and design to development and deployment of your product. We assign
            full-time engineers to collaborate with your developers over an
            extended period and provide maintenance and support services to keep
            your application running smoothly. Our go-to framework for rich text
            editors is ProseMirror. Read more about why.
            <br />
          </p>
          <h2 className="text-4xl font-bold">What is a Rich Text Editor?</h2>
          <p className="font-montserrat">
            The easiest way to explain what a Rich Text Editor is, is to compare
            it to a plain text editor. A plain text editor, like Notepad, only
            allows you to write and edit text without any formatting. On the
            other hand, a Rich Text Editor, like Google Docs, lets you format
            text, add images, links, tables, and other elements. Not only can
            you add these various elements, but you can edit the document in a
            WYSIWYG (What You See Is What You Get) way. This means you can
            instantly see the final result while making edits, without needing
            to preview it separately. <br />
            Rich text editors can serve as input fields for chat platforms or
            any interface where users need to enter and format text in real
            time. They allow users to add features like bold, italics, links, or
            images directly into the chat. These editors enhance the user
            experience by providing dynamic and flexible communication, allowing
            text formatting as it&apos;s typed without needing additional steps.
            <br />
            Rich Text Editors can accommodate not only pictures, links, and
            other media, but they can be collaborative or accommodate AI
            features. This means you and your team can work on and edit the same
            document simultaneously in real time.
            <br />
          </p>
          <h2 className="text-4xl font-bold">Why are we the experts to ask:</h2>
          <p className="font-montserrat">
            It’s hard to find rich text editor experts, but we are one of them.{" "}
            <br />
            There aren’t many experts in this technology, but we’ve built a
            solid reputation as a leading team in the field. Emergence
            Engineering’s portfolio includes work on rich text editors for
            startups and large companies. Our team has delivered reliable,
            high-quality results across multiple industries, from lightweight
            MVP editors for small teams to custom solutions for enterprises.
            <br />
          </p>
          <h2 className="text-4xl font-bold">
            Some of the projects we worked on
          </h2>
          <div className="flex w-full items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
              <Lex />
              <Skiff />
              <AXDRAFT />
              <Chapterly />
            </div>
          </div>

          <h2 className="text-4xl font-bold">
            SuggestCat: Our Custom ProseMirror AI plugin
          </h2>
          <p className="font-montserrat">
            We initially built this project to onboard new recruits. Later, it
            evolved into a fully developed solution that still needs refinements
            on the UI side but showcases some of the features possible with
            ProseMirror and AI.
            <Link href="https://www.suggestcat.com/">SuggestCat</Link>&nbsp; is
            a ProseMirror plugin that uses AI to suggest improvements and
            provides a Notion-like slash menu experience with AI-based writing
            tools. It&apos;s a great way to improve your writing and get
            suggestions on the fly. get suggestions on the fly.
          </p>
          <Image
            src={SuggestCatScrenshot}
            alt="screenshot of SuggestCat"
            width={400}
            className="mb-4 self-center"
          />

          <div className="flex w-full flex-col justify-between gap-4 py-8 lg:flex-row">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">Talk to an expert</div>
              <RightArrow />
            </div>
            <Button
              label="Contact us"
              theme="primary"
              handleClick={scrollToContact}
            />
          </div>

          <div className="my-3 flex w-full items-center justify-center text-5xl font-bold text-black md:my-6 lg:text-7.5xl">
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
          <div className="my-3 flex h-24 w-full items-center justify-center text-4xl font-bold text-black md:mx-10 md:my-6 lg:text-7.5xl">
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
