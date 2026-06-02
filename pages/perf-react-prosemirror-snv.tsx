import dynamic from "next/dynamic";

// react-prosemirror + static React nodeview — impl key "v3-snv".
const PerfV3SnvPage = dynamic(
  () => import("../articles/react-prosemirror/editors/perf-v3-snv/page"),
  { ssr: false },
);

export default function Page() {
  return <PerfV3SnvPage />;
}
