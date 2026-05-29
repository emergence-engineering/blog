"use client";

/**
 * Bare-bone Tiptap 3 harness — perf-v5.
 *
 * `useEditor` with the absolute minimum extensions: Document + Paragraph +
 * Text + History. No collab, no decorations, no custom marks/nodes. Compares
 * Tiptap's overhead vs vanilla ProseMirror (v4) and vs react-prosemirror (v3)
 * at the same scale.
 */
import { Document } from "@tiptap/extension-document";
import { History } from "@tiptap/extension-history";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect, useState } from "react";

function readInitialN(): number {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get("n");
  if (!raw) return 0;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function PerfV5Page() {
  const [initialContent] = useState<string>(() => {
    const n = readInitialN();
    return n > 0 ? "<p></p>".repeat(n) : "";
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [Document, Paragraph, Text, History],
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
      <h1 style={{ marginBottom: "12px" }}>perf-v5 — bare-bone Tiptap 3</h1>
      <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
        Document + Paragraph + Text + History only · no collab, no decorations.
      </p>
      <EditorContent editor={editor} className="tiptap" />
    </main>
  );
}
