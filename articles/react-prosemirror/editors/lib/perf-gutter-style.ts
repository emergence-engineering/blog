/**
 * Shared visual styling for the perf-v{3,4,5}{,-nv,-snv} nodeviews.
 *
 * Goal: every paragraph carries a visible "authorship gutter" (avatar + chip)
 * plus a debug pill (`ctx=N` for the -nv reactive variants, `static` for the
 * -snv variants). Same shape across react-prosemirror, vanilla PM, and Tiptap
 * pages so cross-impl manual testing actually shows what each nodeview is
 * doing.
 */
import type { CSSProperties } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const ctxLetter = (n: number): string => LETTERS[((n % 26) + 26) % 26];

export const CTX_AVATAR_BG = (n: number): string => `hsl(${(n * 53) % 360}, 65%, 55%)`;

export const STATIC_AVATAR_BG = "#94a3b8"; // slate-400

export const paragraphRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: 10,
  margin: "6px 0",
};

export const gutterStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  flexShrink: 0,
  userSelect: "none",
};

export const contentColStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
};

export const avatarStyle = (bg: string): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 22,
  height: 22,
  borderRadius: "50%",
  background: bg,
  color: "white",
  fontWeight: 600,
  fontSize: 12,
  fontFamily: "system-ui, -apple-system, sans-serif",
  lineHeight: 1,
});

export const ctxPillStyle: CSSProperties = {
  display: "inline-block",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: 11,
  padding: "2px 6px",
  borderRadius: 4,
  background: "#eef2ff",
  color: "#3730a3",
  border: "1px solid #c7d2fe",
  lineHeight: 1.2,
};

export const staticPillStyle: CSSProperties = {
  display: "inline-block",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: 11,
  padding: "2px 6px",
  borderRadius: 4,
  background: "#f1f5f9",
  color: "#475569",
  border: "1px solid #cbd5e1",
  lineHeight: 1.2,
};

export const ctxDotStyle = (n: number): CSSProperties => ({
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: CTX_AVATAR_BG(n),
});

export const staticDotStyle: CSSProperties = {
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: STATIC_AVATAR_BG,
};
