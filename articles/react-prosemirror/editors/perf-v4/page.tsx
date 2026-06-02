"use client";

/**
 * Vanilla ProseMirror harness — perf-v4.
 *
 * Mounts a bare `EditorView` directly on a DOM ref. No React reconciliation
 * of editor nodes: PM manages the DOM imperatively, React only mounts/unmounts
 * the host div. This is the absolute floor for "react-prosemirror layer cost"
 * since there is no react-prosemirror layer at all.
 *
 * Plugins: history + baseKeymap. Schema: `prosemirror-schema-basic`.
 */
import { useEffect, useRef } from "react";

import { baseKeymap } from "prosemirror-commands";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

function readInitialN(): number {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get("n");
  if (!raw) return 0;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function PerfV4Page() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const n = readInitialN();
    const paragraphs = Array.from({ length: n }, () => basicSchema.nodes.paragraph.create());
    const doc = n > 0 ? basicSchema.nodes.doc.create(null, paragraphs) : undefined;

    const state = EditorState.create({
      doc,
      schema: basicSchema,
      plugins: [
        history(),
        keymap({
          "Mod-z": undo,
          "Mod-y": redo,
          "Mod-Shift-z": redo,
          ...baseKeymap,
        }),
      ],
    });

    const view = new EditorView(host, { state });

    (window as unknown as { __perfNodes?: number }).__perfNodes = view.state.doc.childCount;
    (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow = (k: number) => {
      const paragraphs = Array.from({ length: k }, () => basicSchema.nodes.paragraph.create());
      view.dispatch(view.state.tr.insert(view.state.doc.content.size, paragraphs));
      (window as unknown as { __perfNodes?: number }).__perfNodes = view.state.doc.childCount;
    };

    return () => {
      (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow = undefined;
      view.destroy();
    };
  }, []);

  return (
    <main style={{ background: "white", padding: "24px", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "12px" }}>perf-v4 — vanilla ProseMirror</h1>
      <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
        No React reconciliation · plain EditorView mounted on a div ref ·
        `prosemirror-schema-basic` + `history` + `baseKeymap`.
      </p>
      <div ref={hostRef} className="tiptap" />
    </main>
  );
}
