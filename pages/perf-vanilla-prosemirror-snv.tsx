import dynamic from "next/dynamic";

// Vanilla ProseMirror + static DOM nodeview — impl key "v4-snv".
const PerfV4SnvPage = dynamic(
  () => import("../articles/react-prosemirror/editors/perf-v4-snv/page"),
  { ssr: false },
);

export default function Page() {
  return <PerfV4SnvPage />;
}
