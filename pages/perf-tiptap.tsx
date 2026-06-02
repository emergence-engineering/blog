import dynamic from "next/dynamic";

// Bare-bone Tiptap 3 perf harness — impl key "v5".
const PerfV5Page = dynamic(
  () => import("../articles/react-prosemirror/editors/perf-v5/page"),
  { ssr: false },
);

export default function Page() {
  return <PerfV5Page />;
}
