"use client";

/**
 * perf-v4-snv — vanilla ProseMirror with a STATIC pure-DOM nodeview.
 *
 * Sibling of perf-v4-nv (which writes window.__PERF_CTX into dataset.ctx on
 * every transaction). The nodeview here mounts once and never updates — no
 * context dependency, no update() handler reacting to outside state.
 *
 * Goal: floor comparison for "static custom node" — the absolute cheapest
 * possible custom NodeView implementation.
 */
import { baseKeymap } from "prosemirror-commands";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView, type NodeView } from "prosemirror-view";
import { useEffect, useRef } from "react";
import { STATIC_AVATAR_BG } from "@/lib/perf-gutter-style";

function readNumberParam(name: string): number {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get(name);
  if (!raw) return 0;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

class StaticParagraphView implements NodeView {
  dom: HTMLParagraphElement;
  contentDOM: HTMLElement;
  constructor() {
    const p = document.createElement("p");
    p.dataset.static = "1";
    p.style.cssText = "display:flex;align-items:baseline;gap:10px;margin:6px 0;";

    const gutter = document.createElement("span");
    gutter.setAttribute("contenteditable", "false");
    gutter.dataset.perfDecorations = "";
    gutter.style.cssText =
      "display:inline-flex;align-items:center;gap:6px;flex-shrink:0;user-select:none;";

    const avatar = document.createElement("span");
    avatar.textContent = "P";
    avatar.style.cssText =
      "display:inline-flex;align-items:center;justify-content:center;" +
      "width:22px;height:22px;border-radius:50%;color:white;font-weight:600;" +
      "font-size:12px;font-family:system-ui,-apple-system,sans-serif;line-height:1;" +
      `background:${STATIC_AVATAR_BG};`;
    gutter.appendChild(avatar);

    const pill = document.createElement("span");
    pill.textContent = "static";
    pill.style.cssText =
      "display:inline-block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;" +
      "font-size:11px;padding:2px 6px;border-radius:4px;background:#f1f5f9;" +
      "color:#475569;border:1px solid #cbd5e1;line-height:1.2;";
    gutter.appendChild(pill);

    const dot = document.createElement("span");
    dot.style.cssText = `display:inline-block;width:8px;height:8px;border-radius:50%;background:${STATIC_AVATAR_BG};`;
    gutter.appendChild(dot);

    p.appendChild(gutter);

    const content = document.createElement("span");
    content.style.cssText = "flex:1;min-width:0;";
    p.appendChild(content);

    this.dom = p;
    this.contentDOM = content;
  }
  // No update() handler — node is static.
}

export default function PerfV4SnvPage() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const n = readNumberParam("n");
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

    const view = new EditorView(host, {
      state,
      nodeViews: { paragraph: () => new StaticParagraphView() },
    });

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
      <h1 style={{ marginBottom: "12px" }}>perf-v4-snv — vanilla PM + static DOM nodeview</h1>
      <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
        Pure-DOM NodeView with no update() handler. Renders a static {"<img>"} + content area.
      </p>
      <div ref={hostRef} className="tiptap" />
    </main>
  );
}
