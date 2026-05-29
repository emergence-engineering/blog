"use client";

/**
 * perf-v5-snv — Tiptap 3 with a STATIC React nodeview (via ReactNodeViewRenderer).
 *
 * Sibling of perf-v5-nv (which subscribes to PerfContext via useContext).
 * The nodeview here has no context, no state — just a memoized component
 * that renders a fixed inline <img> + content area.
 *
 * Goal: measure realistic ReactNodeViewRenderer cost without context-flip
 * pathology.
 */
import { Document } from "@tiptap/extension-document";
import { History } from "@tiptap/extension-history";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";
import {
  EditorContent,
  NodeViewContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react";
import { memo, useEffect, useState } from "react";
import {
  avatarStyle,
  contentColStyle,
  gutterStyle,
  paragraphRowStyle,
  STATIC_AVATAR_BG,
  staticDotStyle,
  staticPillStyle,
} from "@/lib/perf-gutter-style";

const StaticParagraphView = memo(function StaticParagraphView() {
  return (
    <NodeViewWrapper as="div" data-static="1" style={paragraphRowStyle}>
      <span contentEditable={false} data-perf-decorations="" style={gutterStyle}>
        <span style={avatarStyle(STATIC_AVATAR_BG)}>P</span>
        <span style={staticPillStyle}>static</span>
        <span style={staticDotStyle} />
      </span>
      <NodeViewContent style={contentColStyle} />
    </NodeViewWrapper>
  );
});

const StaticParagraph = Paragraph.extend({
  addNodeView() {
    return ReactNodeViewRenderer(StaticParagraphView);
  },
});

function readNumberParam(name: string): number {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get(name);
  if (!raw) return 0;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function PerfV5SnvPage() {
  const [initialContent] = useState<string>(() => {
    const n = readNumberParam("n");
    return n > 0 ? "<p></p>".repeat(n) : "";
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [Document, StaticParagraph, Text, History],
    content: initialContent,
  });

  useEffect(() => {
    if (!editor) return;
    (window as unknown as { __perfNodes?: number }).__perfNodes = editor.state.doc.childCount;

    (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow = (k: number) => {
      editor.chain().focus("end").insertContent("<p></p>".repeat(k)).run();
      (window as unknown as { __perfNodes?: number }).__perfNodes = editor.state.doc.childCount;
    };
    return () => {
      (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow = undefined;
    };
  }, [editor]);

  return (
    <main style={{ background: "white", padding: "24px", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "12px" }}>perf-v5-snv — Tiptap 3 + static React nodeview</h1>
      <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
        Memoized React nodeview via `ReactNodeViewRenderer`, no context, no state.
      </p>
      <EditorContent editor={editor} className="tiptap" />
    </main>
  );
}
