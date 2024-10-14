import dynamic from "next/dynamic";
// dynamic import tiptap component
const Tiptap = dynamic(() => import("../features/test/tiptap"), { ssr: false });
export default function Test() {
  return (
    <div>
      <Tiptap />
    </div>
  );
}
