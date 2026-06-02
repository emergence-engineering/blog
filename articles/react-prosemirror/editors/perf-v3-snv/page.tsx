"use client";

/**
 * perf-v3-snv — react-prosemirror with a STATIC React nodeview.
 *
 * Sibling of perf-v3-nv (which subscribes to PerfContext via useContext).
 * The nodeview here:
 *   - has no context subscription
 *   - has no state, no effects
 *   - renders a fixed inline <img> decoration + content area
 *   - is memoized: prev.nodeProps.node === next.nodeProps.node && prev.children === next.children
 *
 * Goal: measure the "realistic custom nodeview" cost — what you'd pay for
 * something like an image-with-caption block — without the pathological
 * context-flip rerender behavior of perf-v3-nv.
 */
import {
  type NodeViewComponentProps,
  ProseMirror,
  ProseMirrorDoc,
  reactKeys,
} from "@handlewithcare/react-prosemirror";
import { baseKeymap } from "prosemirror-commands";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { EditorState, type Transaction } from "prosemirror-state";
import { type CSSProperties, memo, useEffect, useState } from "react";
import {
  avatarStyle,
  contentColStyle,
  gutterStyle,
  paragraphRowStyle,
  STATIC_AVATAR_BG,
  staticDotStyle,
  staticPillStyle,
} from "@/lib/perf-gutter-style";

const StaticParagraphView = memo(
  function StaticParagraphView(props: NodeViewComponentProps) {
    const { ref, children, nodeProps, ...domAttrs } = props;
    const rowStyle: CSSProperties = { ...paragraphRowStyle, ...(domAttrs.style ?? {}) };
    return (
      <p {...domAttrs} ref={ref} data-static="1" style={rowStyle}>
        <span contentEditable={false} data-perf-decorations="" style={gutterStyle}>
          <span style={avatarStyle(STATIC_AVATAR_BG)}>P</span>
          <span style={staticPillStyle}>static</span>
          <span style={staticDotStyle} />
        </span>
        <span ref={nodeProps.contentDOMRef} style={contentColStyle}>
          {children}
        </span>
      </p>
    );
  },
  (prev, next) => prev.nodeProps.node === next.nodeProps.node && prev.children === next.children,
);

function readNumberParam(name: string): number {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get(name);
  if (!raw) return 0;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function readContentParam(): "plain" | "tech" {
  if (typeof window === "undefined") return "plain";
  const raw = new URLSearchParams(window.location.search).get("content");
  return raw === "tech" ? "tech" : "plain";
}

// Inline diagram (SVG, two boxes + edge — stands in for an architecture diagram).
const DIAGRAM_SVG =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20240%20120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%23f6f6f6%22%20stroke%3D%22%23ccc%22/%3E%3Crect%20x%3D%2220%22%20y%3D%2230%22%20width%3D%2260%22%20height%3D%2240%22%20fill%3D%22%23dbe9ff%22%20stroke%3D%22%234a90e2%22/%3E%3Crect%20x%3D%22160%22%20y%3D%2230%22%20width%3D%2260%22%20height%3D%2240%22%20fill%3D%22%23ffe1d6%22%20stroke%3D%22%23e2734a%22/%3E%3Cline%20x1%3D%2280%22%20y1%3D%2250%22%20x2%3D%22160%22%20y2%3D%2250%22%20stroke%3D%22%23555%22%20stroke-width%3D%222%22/%3E%3Ctext%20x%3D%2250%22%20y%3D%2255%22%20text-anchor%3D%22middle%22%20font-family%3D%22monospace%22%20font-size%3D%2210%22%3EReact%3C/text%3E%3Ctext%20x%3D%22190%22%20y%3D%2255%22%20text-anchor%3D%22middle%22%20font-family%3D%22monospace%22%20font-size%3D%2210%22%3EPM%3C/text%3E%3C/svg%3E";

const TOPICS = [
  "Schema design",
  "Transaction pipeline",
  "Selection mapping",
  "Plugin composition",
  "View synchronization",
  "Decoration strategy",
  "NodeView lifecycle",
  "Cursor anchoring",
  "Mark application",
  "Step inversion",
  "History coalescing",
  "Input rules",
];

const INTROS = [
  "The ${t} subsystem coordinates every state transition that touches the document.",
  "Understanding ${t} requires walking through how transactions flow from input handlers to the view.",
  "${t} is one of the trickier parts of ProseMirror to get right, because the contract crosses several layers.",
  "Most performance regressions in ProseMirror-based editors trace back to ${t} being invoked too eagerly.",
];

const BODIES = [
  "Each transaction produces a derived state by applying steps to the previous document. The view then reconciles its DOM against the new state, reusing nodes wherever the descriptor hierarchy matches. When custom NodeViews are involved, the diff has to consult each NodeView's update() callback to decide whether to replace the DOM or keep it.",
  "Position arithmetic in ProseMirror is byte-offset based: a paragraph of N characters occupies positions 0..N+1 (the +1 for the closing token). Mapping a position across a transaction means walking the ReplaceStep map, which is generally O(log n) but degenerates to O(n) when the transaction touches many siblings.",
  "Collaboration plugins layer on top of the transaction pipeline by tagging every step with a client ID. When remote steps arrive, they are rebased against any local steps that have been applied since the last sync point. This is where prosemirror-collab does most of its work, and where memory pressure tends to manifest in long-lived editing sessions.",
  "Decorations are a side-channel that the view honors but the state never sees. Inline decorations are cheap; widget decorations that render arbitrary DOM get expensive fast when the document is large, because the view has to render them on every redraw of the affected range.",
];

const CODES = [
  "const tr = state.tr;\ntr.replaceWith(from, to, schema.nodes.paragraph.create());\ndispatch(tr);",
  "view.someProp('handleKeyDown', (view, event) => {\n  if (event.key !== 'Enter') return false;\n  return splitListItem(schema.nodes.list_item)(view.state, view.dispatch);\n});",
  "const plugin = new Plugin({\n  state: {\n    init: () => DecorationSet.empty,\n    apply: (tr, set) => set.map(tr.mapping, tr.doc),\n  },\n});",
  "addNodeView() {\n  return ReactNodeViewRenderer(CalloutView, {\n    contentDOMElementTag: 'div',\n  });\n}",
];

const EXPLAINS = [
  "Note that the dispatch above runs synchronously inside the current event tick — any React state updates triggered by it will batch with the rest of the keystroke handler.",
  "If you skip the explicit mapping step, your decoration positions will drift the first time a remote collaborator inserts content above the anchor.",
  "The plugin state is a DecorationSet, which is structurally shared across transactions; only the changed range allocates new objects.",
  "Returning false from stopEvent lets ProseMirror handle the event through its normal keymap path, which is usually what you want unless the NodeView genuinely consumes the input itself.",
];

const QUOTES = [
  "Don't reach into view.dom directly during a transaction — the view's reconciliation hasn't run yet, so the DOM you'd be querying is stale.",
  "Treat every NodeView's update() as a hot path: if it doesn't bail out cheaply on equal-content cases, large documents will pay for it on every keystroke.",
  "Marks are not paragraphs; their position mapping rules differ in subtle ways, especially around the start/end of inline content.",
  "A plugin that subscribes to every transaction without filtering is the single most common cause of cubic-time slowdowns at high node counts.",
];

const CLOSINGS = [
  "We will revisit this pattern in the next section when we discuss undo coalescing.",
  "These constraints are easier to internalize once you've seen them violated in a production codebase.",
  "The takeaway: pay the cost at construction time, never on every keystroke.",
  "If your editor needs to scale past ~2 000 nodes with React NodeViews, this is the layer to instrument first.",
];

function buildTechNodes(n: number) {
  const ns = basicSchema.nodes;
  const out: ReturnType<typeof ns.paragraph.create>[] = [];
  let section = 0;
  const pick = <T,>(arr: readonly T[]): T => arr[section % arr.length];
  const fill = (tpl: string, t: string) => tpl.replace(/\$\{t\}/g, t);
  while (out.length + 9 <= n) {
    const topic = pick(TOPICS);
    out.push(
      ns.heading.create({ level: 2 }, basicSchema.text(`${section + 1}. ${topic}`)),
      ns.paragraph.create(null, basicSchema.text(fill(pick(INTROS), topic))),
      ns.paragraph.create(null, basicSchema.text(pick(BODIES))),
      ns.code_block.create(null, basicSchema.text(pick(CODES))),
      ns.paragraph.create(null, basicSchema.text(pick(EXPLAINS))),
      ns.blockquote.create(null, ns.paragraph.create(null, basicSchema.text(pick(QUOTES)))),
      ns.paragraph.create(null, ns.image.create({ src: DIAGRAM_SVG })),
      ns.paragraph.create(null, basicSchema.text(pick(CLOSINGS))),
      ns.horizontal_rule.create(),
    );
    section++;
  }
  while (out.length < n) out.push(ns.paragraph.create());
  return out;
}

function buildInitialState(n: number, content: "plain" | "tech"): EditorState {
  const nodes =
    content === "tech" && n > 0
      ? buildTechNodes(n)
      : Array.from({ length: n }, () => basicSchema.nodes.paragraph.create());
  const doc = nodes.length > 0 ? basicSchema.nodes.doc.create(null, nodes) : undefined;
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
}

export default function PerfV3SnvPage() {
  const [state, setState] = useState<EditorState>(() =>
    buildInitialState(readNumberParam("n"), readContentParam()),
  );

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
      <h1 style={{ marginBottom: "12px" }}>
        perf-v3-snv — react-prosemirror + static React nodeview
      </h1>
      <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
        Memoized React nodeview with no context, no state. Each paragraph renders a static {"<img>"}{" "}
        + content area.
      </p>
      <ProseMirror
        state={state}
        dispatchTransaction={(tr: Transaction) => setState((s) => s.apply(tr))}
        nodeViewComponents={{ paragraph: StaticParagraphView }}
      >
        <ProseMirrorDoc className="tiptap" />
      </ProseMirror>
    </main>
  );
}
