import dynamic from "next/dynamic";

// react-prosemirror (barebone) perf harness — impl key "v3".
// Client-only: the editor reads `?n=` from window and manages its own DOM,
// so SSR is disabled to avoid hydration mismatch.
const PerfV3Page = dynamic(
  () => import("../articles/react-prosemirror/editors/perf-v3/page"),
  { ssr: false },
);

export default function Page() {
  return <PerfV3Page />;
}
