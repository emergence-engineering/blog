import React, { FunctionComponent } from "react";

import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import {
  IntroductionH1,
  IntroductionSection,
  IntroductionSectionWrapper,
} from "../features/landingPage/components/Introduction";
import theme from "../utils/theme";
import { Separator } from "../features/common/components/Separator";
import {
  Paragraph,
  Root,
  RootWrapper,
  SectionTitle,
  SubTitle,
} from "../features/landingPage/components/Section1";
import { projectDetails } from "../utils/openSrcPrData";
import OpenSrcPrCard from "../features/landingPage/components/OpenSrcPrCard";
import { CardWrapper } from "../features/landingPage/components/OpenSrcPr";

import Lex from "../public/lp/Lex.png";
import Skiff from "../public/lp/skiff.svg";
import AXDRAFT from "../public/lp/axdraft.svg";
import Chapterly from "../public/lp/chapterly.svg";

import SuggestCatScrenshot from "../public/lp/suggestcat-screenshot.png";
import {
  BlogPostsContentWrapper,
  BlogPostsRoot,
} from "../features/blog/components";

import { TwLayout } from "../features/twLandingPage/twComponents/TwLayout";
import { TwContact } from "../features/twLandingPage/twComponents/TwContact";
import PostCard from "../features/twBlog/PostCard";
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

const ReferenceRoot = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ReferenceItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

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
      <IntroductionSectionWrapper>
        <IntroductionSection>
          <IntroductionH1>
            The team for your{" "}
            <span style={{ color: theme.color.tertiary, fontWeight: "bold" }}>
              Rich Text Editor
            </span>{" "}
            needs
            <br />
            <span style={{ fontSize: "1.5rem" }}>
              Create amazing experiences with ProseMirror
            </span>
          </IntroductionH1>
        </IntroductionSection>
      </IntroductionSectionWrapper>
      <Separator
        height={0.2}
        color={theme.color.tertiary}
        backGroundColor={theme.color.gray11}
      />

      <RootWrapper>
        <Root>
          <SectionTitle>What is a Rich Text Editor</SectionTitle>
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
          <SectionTitle>Why ProseMirror</SectionTitle>
          <Paragraph>
            If you want to build a web based rich text editor ( think Microsoft
            Word, Google docs, Notion ) you either start from scratch and spend
            a few years laying down the foundation or you use a framework and
            get a head start. There are a lot of frameworks out there like
            Draft, Slate, Quill, CKEditor, TinyMCE etc. <br /> <br />
            <a href="https://marijnhaverbeke.nl/">Marijn Haverbeke</a> the
            author of Eloquent JavaScript, created ProseMirror and CodeMirror to
            be the most flexible and powerful browser based text editors.
            ProseMirror has a steep learning curve but that comes with a lot of
            flexibility and power, lacking in other frameworks.
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
            mature ecosystem.
            <a href="https://tiptap.dev/">TipTap</a> is a framework build on the
            top of ProseMirror, with a lot of Plugins and extra functionality.
            It&apos;s a quick way to get started.
            <br />
          </Paragraph>
          <SectionTitle>Our own product: SuggestCat</SectionTitle>
          <Image
            src={SuggestCatScrenshot}
            alt="screenshot of SuggestCat"
            width={400}
          />
          <Paragraph>
            <a href="https://www.suggestcat.com/">SuggestCat</a> is a plugin for
            ProseMirror that uses AI to suggest improvements and provides a
            Notion-like slash menu experience with AI based writing tools.
            It&apos;s a great way to improve your writing and get suggestions on
            the fly.
          </Paragraph>
          <SectionTitle>We worked on</SectionTitle>
          <ReferenceRoot>
            <ReferenceItem>
              <Image
                src={Lex}
                alt="Lex logo"
                // fill={true}
                style={{ objectFit: "contain", width: "5rem", height: "auto" }}
              />
            </ReferenceItem>
            <ReferenceItem>
              <Image
                src={Skiff}
                alt="Skiff logo"
                style={{ objectFit: "contain", width: "10rem", height: "auto" }}
              />
            </ReferenceItem>
            <ReferenceItem>
              <Image
                src={AXDRAFT}
                alt="AXDRAFT logo"
                style={{ objectFit: "contain", width: "10rem", height: "auto" }}
              />
            </ReferenceItem>
            <ReferenceItem>
              <Image
                src={Chapterly}
                alt="Chapterly logo"
                style={{ objectFit: "contain", width: "12rem", height: "auto" }}
              />
            </ReferenceItem>
          </ReferenceRoot>
          <SectionTitle>Giving back</SectionTitle>
          <Paragraph>
            The ProseMirror ecosystem is very active and we&apos;re grateful for
            all of the work others have done. We have also contributed with Blog
            posts and open source plugins, hopefully making someone else&apos;s
            life easier.
          </Paragraph>
          <SubTitle>Blog posts</SubTitle>
          <BlogPostsRoot>
            <BlogPostsContentWrapper>
              <PostCard {...articlePluginSystemMetadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article13Metadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article11Metadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article6Metadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article5Metadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article4Metadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article3Metadata} />
            </BlogPostsContentWrapper>
            <BlogPostsContentWrapper>
              <PostCard {...article2Metadata} />
            </BlogPostsContentWrapper>
          </BlogPostsRoot>
          <SubTitle>Open source</SubTitle>
          <CardWrapper>
            {projectDetails.map((project, i) => (
              <OpenSrcPrCard
                key={i}
                title={project.title}
                article={project.article}
                icon={project.icon}
                gitLink={project.gitLink}
                description={project.description}
                command={project.command}
                tags={project.tags}
              />
            ))}
          </CardWrapper>
        </Root>
      </RootWrapper>
      <Separator
        height={0.2}
        color={theme.color.tertiary}
        backGroundColor={theme.color.background2}
      />
      <TwContact />
    </TwLayout>
  );
};

export default Index;
