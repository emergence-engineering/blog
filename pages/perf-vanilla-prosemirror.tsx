import dynamic from "next/dynamic";

// Vanilla ProseMirror (no React reconciler) perf harness — impl key "v4".
const PerfV4Page = dynamic(
  () => import("../articles/react-prosemirror/editors/perf-v4/page"),
  { ssr: false },
);

export default function Page() {
  return <PerfV4Page />;
}
