"use client";

/**
 * Minimal react-prosemirror harness — perf-v3.
 *
 * No custom nodeviews. react-prosemirror renders paragraphs via its internal
 * default — the true "out-of-the-box" baseline for the library.
 *
 * Plugins: ONLY `reactKeys()` (required by the library) + `history` +
 * `baseKeymap`. Schema: vanilla `prosemirror-schema-basic`. No collab, no
 * decorations, no extensions.
 *
 * Query params:
 *   ?n=<N>  — seed N empty paragraphs into the initial doc.
 */
import { ProseMirror, ProseMirrorDoc, reactKeys } from "@handlewithcare/react-prosemirror";
import { baseKeymap } from "prosemirror-commands";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { EditorState, type Transaction } from "prosemirror-state";
import { useEffect, useState } from "react";

function readInitialN(): number {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get("n");
  if (!raw) return 0;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function PerfV3Page() {
  const [state, setState] = useState(() => {
    const n = readInitialN();
    const paragraphs = Array.from({ length: n }, () => basicSchema.nodes.paragraph.create());
    const doc = n > 0 ? basicSchema.nodes.doc.create(null, paragraphs) : undefined;
    return EditorState.create({
      doc,
      schema: basicSchema,
      plugins: [
        reactKeys(),
        history(),
        keymap({
          "Mod-z": undo,
          "Mod-y": redo,
          "Mod-Shift-z": redo,
          ...baseKeymap,
        }),
      ],
    });
  });

  useEffect(() => {
    (window as unknown as { __perfNodes?: number }).__perfNodes = state.doc.childCount;
  }, [state.doc.childCount]);

  useEffect(() => {
    (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow = (k: number) => {
      setState((s: EditorState) => {
        const paragraphs = Array.from({ length: k }, () => basicSchema.nodes.paragraph.create());
        const tr = s.tr.insert(s.doc.content.size, paragraphs);
        return s.apply(tr);
      });
    };
    return () => {
      (window as unknown as { __perfGrow?: (k: number) => void }).__perfGrow = undefined;
    };
  }, []);

  return (
    <main style={{ background: "white", padding: "24px", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "12px" }}>perf-v3 — barebone react-prosemirror</h1>
      <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
        No Yjs · No Hocuspocus · No extensions · no custom nodeviews · plain
        `prosemirror-schema-basic` + `history` + `baseKeymap`.
      </p>
      <ProseMirror
        state={state}
        dispatchTransaction={(tr: Transaction) => setState((s: EditorState) => s.apply(tr))}
      >
        <ProseMirrorDoc className="tiptap" />
      </ProseMirror>
    </main>
  );
}
