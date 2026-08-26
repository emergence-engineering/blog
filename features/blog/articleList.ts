import { ArticleIntro } from "../article/types";

import { article7Metadata } from "../../pages/blog/discord-gitbot";
import { article1Metadata } from "../../pages/blog/everyday-javascript-1-spread-operator";
import { firestoreToSupabaseMigrationMetadata } from "../../pages/blog/firestore-supabase-migration";
import { article8Metadata } from "../../pages/blog/hasura-vs-postgraphile";
import { article12Metadata } from "../../pages/blog/hocuspocus-with-supabase";
import { article10Metadata } from "../../pages/blog/json-schema-from-mustache";
import { article17Metadata } from "../../pages/blog/lexical-link-preview-plugin";
import { article19Metadata } from "../../pages/blog/lexical-prosemirror-comparison";
import { articleLexicalSlashMenuMetadata } from "../../pages/blog/lexical-slash-menu-plugin";
import { articlePNPMMetadata } from "../../pages/blog/monorepo-workspace-with-pnpm-and-git-submodules";
import { article9Metadata } from "../../pages/blog/nextjs-postgraphile";
import { article15Metadata } from "../../pages/blog/postgraphile-subscriptions";
import { articleProgrammerArchetypes } from "../../pages/blog/programmer-archetypes";
import { articlePMMetadata } from "../../pages/blog/prosemirror";
import { article6Metadata } from "../../pages/blog/prosemirror-codemirror-block";
import { article3Metadata } from "../../pages/blog/prosemirror-image-plugin";
import { article5Metadata } from "../../pages/blog/prosemirror-image-plugin-2";
import { article4Metadata } from "../../pages/blog/prosemirror-link-plugin";
import { article11Metadata } from "../../pages/blog/prosemirror-link-preview";
import { articlePluginSystemMetadata } from "../../pages/blog/prosemirror-plugin-system";
import { article13Metadata } from "../../pages/blog/prosemirror-slash-menu";
import { article2Metadata } from "../../pages/blog/prosemirror-sync-1";

/**
 * Every published blog post's metadata in one place. Each entry carries the
 * post's absolute `url` and publish `timestamp`, which is what the sitemap
 * uses for <loc> and <lastmod>. Add new posts here when adding the page.
 *
 * (TwBlog.tsx still imports these individually because its two tabs are
 * hand-ordered — consolidating that is a separate cleanup.)
 */
export const ARTICLES: ArticleIntro[] = [
  article7Metadata,
  article1Metadata,
  firestoreToSupabaseMigrationMetadata,
  article8Metadata,
  article12Metadata,
  article10Metadata,
  article17Metadata,
  article19Metadata,
  articleLexicalSlashMenuMetadata,
  articlePNPMMetadata,
  article9Metadata,
  article15Metadata,
  articleProgrammerArchetypes,
  articlePMMetadata,
  article6Metadata,
  article3Metadata,
  article5Metadata,
  article4Metadata,
  article11Metadata,
  articlePluginSystemMetadata,
  article13Metadata,
  article2Metadata,
];
