import React, { FunctionComponent, useState } from "react";
import { article1Metadata } from "../../pages/blog/everyday-javascript-1-spread-operator";
import { article2Metadata } from "../../pages/blog/prosemirror-sync-1";
import { article3Metadata } from "../../pages/blog/prosemirror-image-plugin";
import { article4Metadata } from "../../pages/blog/prosemirror-link-plugin";
import { article5Metadata } from "../../pages/blog/prosemirror-image-plugin-2";
import { article6Metadata } from "../../pages/blog/prosemirror-codemirror-block";
import { article7Metadata } from "../../pages/blog/discord-gitbot";
import { article8Metadata } from "../../pages/blog/hasura-vs-postgraphile";
import { article9Metadata } from "../../pages/blog/nextjs-postgraphile";
import { article10Metadata } from "../../pages/blog/json-schema-from-mustache";
import { article11Metadata } from "../../pages/blog/prosemirror-link-preview";
import { article12Metadata } from "../../pages/blog/hocuspocus-with-supabase";
import { article13Metadata } from "../../pages/blog/prosemirror-slash-menu";
import { article17Metadata } from "../../pages/blog/lexical-link-preview-plugin";
import { articlePluginSystemMetadata } from "../../pages/blog/prosemirror-plugin-system";
import { articlePNPMMetadata } from "../../pages/blog/monorepo-workspace-with-pnpm-and-git-submodules";
import { articleLexicalSlashMenuMetadata } from "../../pages/blog/lexical-slash-menu-plugin";
import { articleProgrammerArchetypes } from "../../pages/blog/programmer-archetypes";
import PostCard from "./PostCard";
import TabComponent from "./TabComponent";

const TwBlog: FunctionComponent = () => {
  const [tab, setTab] = useState<"article" | "tech">("tech");

  return (
    <div className="flex w-full flex-col items-center bg-white py-12 text-black sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:py-16 xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <div className="mb-3 flex w-full items-center justify-center text-4.5xl font-bold text-black md:mb-6 md:text-7.5xl">
        BLOG
      </div>
      <TabComponent tab={tab} setTab={setTab} />
      <div className="mb-3 text-center text-xl font-bold md:mb-6">
        {tab === "article"
          ? "Explore our curated collection of insightful articles about our" +
            " experiences."
          : "Our solutions to tech challenges we faced"}
      </div>
      <div className="flex flex-col gap-6 px-3 pb-20 md:pb-36">
        {tab === "article" && <PostCard {...articleProgrammerArchetypes} />}
        {tab === "tech" && (
          <>
            <PostCard {...articlePNPMMetadata} />
            <PostCard {...article13Metadata} />
            <PostCard {...article12Metadata} />
            <PostCard {...article11Metadata} />
            <PostCard {...article10Metadata} />
            <PostCard {...article9Metadata} />
            <PostCard {...article8Metadata} />
            <PostCard {...article7Metadata} />
            <PostCard {...article6Metadata} />
            <PostCard {...article5Metadata} />
            <PostCard {...article4Metadata} />
            <PostCard {...article3Metadata} />
            <PostCard {...article2Metadata} />
            <PostCard {...article1Metadata} />
            <PostCard {...article17Metadata} />
            <PostCard {...articlePluginSystemMetadata} />
            <PostCard {...articleLexicalSlashMenuMetadata} />
          </>
        )}
      </div>
    </div>
  );
};

export default TwBlog;
