import dynamic from "next/dynamic";

// Tiptap 3 + static React nodeview — impl key "v5-snv".
const PerfV5SnvPage = dynamic(
  () => import("../articles/react-prosemirror/editors/perf-v5-snv/page"),
  { ssr: false },
);

export default function Page() {
  return <PerfV5SnvPage />;
}
