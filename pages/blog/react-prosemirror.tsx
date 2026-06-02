import React, { useState } from "react";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";
import { LightBox } from "../../features/twBlog/LightBox";

export const articleReactProsemirrorMetadata: ArticleIntro = {
  title:
    "React-ProseMirror vs Vanilla ProseMirror vs TipTap performance comparison",
  author: "Viktor and matejcsok",
  authorLink: null,
  introText: /* language=md */ `Can TipTap or React-ProseMirror beat vanilla ProseMirror?`,
  postId: "react-prosemirror",
  timestamp: 1780066915415,
  imgSrc:
    "https://discuss.prosemirror.net/uploads/secondsite/original/1X/5005ab45edc1c7b72d1331d43feb55a5cad7b74c.png",
  url: "https://emergence-engineering.com/blog/react-prosemirror",
  tags: [
    "ProseMirror",
    "Plugin Development",
    "Comparison",
    "React-ProseMirror",
    "TipTap",
  ],
};

const MD0 = /* language=md */ `
# React-ProseMirror vs Vanilla ProseMirror vs TipTap performance comparison

## TL;DR
React-ProseMirror makes development much easier if working with ProseMirror and React.
Can use all the same plugins and features. And if using NodeViews it is much easier, we can access React context, hooks and state. But it comes with a cost.
As we add more and more nodes to the document it has to pay the React reconciler tax.

Vanilla ProseMirror is the fastest, but it needs the most amount of work for a full-featured editor.

TipTap ships as a near-full-featured editor out of the box and performance wise almost identical to vanilla ProseMirror until we start adding NodeViews, we can use React context, hooks,
state with \`ReactNodeViewRenderer\` to make it easier to develop, but it uses React Portals which adds tax.
React-ProseMirror performance issue becomes noticeable at 5k nodes. TipTap performance issue becomes noticeable around 2.5k-5k nodes with NodeViews.

## Introduction

Vanilla ProseMirror is the standard technology for rich text editing in the browser. It is a powerful and flexible library that provides a wide range of features and customization options.
It comes with some basic plugins, but requires some work to make it a full-featured online editor. On the other hand it has a huge community and there are a lot of free plugins made by other developers you can use to customize your editor.

TipTap is an abstraction layer built on top of ProseMirror, which provides a lot of pre-built plugins to start with. Much easier to plug and play with the official plugins.
It is also fully customizable, but the abstraction layer makes it harder to customize.
It has a solution for easier custom NodeViews using [ReactNodeViewRenderer](https://tiptap.dev/docs/editor/extensions/custom-extensions/node-views/react) which makes it possible to use React components as NodeViews,
and accessing state and context. But we will see that it comes with a cost.

React-ProseMirror moved the rendering out of the editor view and into React.
This makes it much easier to use ProseMirror with React: you can use plain React components for custom NodeViews, share normal React context and hooks,
and let the editor UI live in the same component tree as the rest of your app. You still get ProseMirror's document model, transactions, plugins, and selection handling, but without fighting a separate DOM-rendering lifecycle.
[_This library provides an alternate implementation of ProseMirror's EditorView.
It uses React as the rendering engine, rather than ProseMirror's home-brewed DOM update system.
This allows us to provide a more comfortable integration with ProseMirror's powerful data model, transformations, and event management systems._](https://github.com/handlewithcarecollective/react-prosemirror#the-solution)

## Test Cases

### Test Case 1: Engine throughput and the cost of holding state as the document grows

#### What the test does:
From an empty editor, in a single browser session, append paragraphs to the end of the document as fast as the engine allows. After every 200 appends,
record a checkpoint (nodes, elapsedMs) and yield one animation frame so the browser can paint and the test harness can read CDP metrics.
Every 2 seconds, an outer monitor polls Chrome's \`Performance.getMetrics\` and records the cumulative cost across six counters: ScriptDuration, TaskDuration, JSHeapUsedSize, Nodes (DOM), LayoutCount, RecalcStyleCount.

How each "keystroke" is fired. Inside \`page.evaluate\`, for each cycle we dispatch synthetic \`InputEvent("beforeinput", {inputType: "insertText", data})\` events for the characters in "typing ",
followed by a synthetic \`KeyboardEvent("keydown", {key: "Enter"})\`.
Each editor's view-level DOM input handlers pick these up and apply them exactly as they would a real keystroke
No real OS-level input pipeline, no IME, no focus management — just the editor's reaction to the event.

- We keep going until a single 200-node batch exceeds 5s here, ≈40 nodes/sec - well past usable, or heap > 3.5 GB, or the renderer crashes, or a 50,000-node safety cap.
- We don't measure per-keystroke latency.
- We always append at the end of the document.
- Synthetic events, we don't try to replicate a human typing experience, only pure engine throughput.
`;

const MD1 = `
#### Conclusions:
- React-ProseMirror pays a per-transaction reconciler tax that scales with the document size. for every new paragraph React needs to walk a growing tree, even when nothing has changed in the existing paragraphs
- Vanilla ProseMirror and TipTap let the \`EditorView\` handle DOM updates directly, the cost is proportional to "what has changed" , not to document size.
- Memory usage scales with document size for Vanilla ProseMirror and TipTap, but not for React-ProseMirror.
For React-ProseMirror every paragraph in the document also exists as a React fiber - a JS object holding props, hooks, refs, parent/sibling pointers, and an alternate fiber for the next render.

#### Disclosure:
We needed to patch a memory leak in the official React-ProseMirror implementation, without it the memory usage skyrocketed, and the stress test ended pretty quickly.
`;

const MD2 = `
### Test Case 2: Cold load

#### What the test does:
- We render the 3 editors with 500, 1000, 2500, 5000, 10k, 20k 50k nodes in the document and we measure time to React tree mount, ProseMirror view init, and rendering N paragraphs into the DOM.

`;

const MD3 = /* language=md */ `
#### Conclusions:
- Mount cost scales with how many React fibers your engine creates, not how many DOM nodes the browser holds.
Vanilla ProseMirror has zero React fibers for nodes so it has a flat curve.
The two React-rendered engines each pay a per-paragraph reconciler cost at mount; TipTap's ReactNodeViewRenderer adds another layer on top, which is why it ends up worst.
`;

const MD4 = `
### Test Case 3: Keystroke latency (lag breakpoint)

#### What the test does:
- Find the document size where typing feels laggy
- Increment doc size by 1k paragraphs with NodeView in each line
- Fire 150 real Chromium keystrokes via \`page.keyboard.press("a")\`
- Stop when p95 INP > 100 ms for two consecutive iterations.
`;

const MD5 = `
#### Conclusions:
 - Vanilla ProseMirror's typing stays smooth ~5× longer than TipTap with the same NodeView.
 Same per-paragraph React component, same paragraph schema, same keystrokes - the only thing different is what owns the editor surface.
 Vanilla ProseMirror applies the mutation directly to the DOM and updates the affected fiber; TipTap's ReactNodeViewRenderer adds portal-bridge synchronization on top, which dominates per-keystroke cost at scale.
  - A memoized React NodeView is not free at scale. Even with React.memo, the reconciler still has to visit each fiber on every keystroke to ask "should I render?" - it can skip the render phase, not the walk.
  At 30k+ fibers, that walk alone exceeds the 100 ms budget.
`;

const MDff = /* language=md */ `
### Does this hold on Firefox?
  We re-ran the portable test cases on Firefox 148 — same specs, same machine, only the engine swapped.
  Memory is gone on purpose: Firefox exposes no JS-heap API to a page (\`performance.memory\` and \`measureUserAgentSpecificMemory\` are both Chromium-only), so the heap and script-duration graphs above can't be reproduced.
That leaves throughput, cold-load time-to-visible, and keystroke latency.

  One thing to know before reading the latency chart: Firefox's INP floor is ~56ms on an empty document vs Chromium's ~16ms, almost entirely paint/vsync quantization reported in coarse 8ms steps.
Don't compare the absolute numbers across engines - compare the slope above each engine's own
  baseline.

 #### What changed, what didn't:
  - Vanilla ProseMirror and React-ProseMirror keep their ranking and their shape.
    React-ProseMirror is ~1.5× slower at sustained typing on Firefox, but the per-keystroke cost grows at the same rate on both engines - the reconciler tax belongs to the engine, not the browser.
  - Vanilla ProseMirror stays flat on both. No surprises.
  - TipTap with NodeViews is the one real divergence. The \`ReactNodeViewRenderer\` portal bridge is meaningfully more expensive on Firefox: steeper cold-load, and a keystroke lag breakpoint that lands roughly twice as early.
    If you ship React NodeViews through TipTap, Firefox is your worst case, not Chrome.
`;

const MD6 = /* language=md */ `
### Verdict

  - For most use cases React-ProseMirror is fine (blog posts, articles, even thesis or Moby Dick), no visual lags, but makes development much easier (React components/hooks/context).
  - For extremely large content Vanilla ProseMirror or TipTap perform much better, until you have many Node Views, in that case Vanilla ProseMirror is the absolute winner.
  - But even Vanilla ProseMirror can't handle the whole Bible, but at that point it is not even ProseMirror, but the \`contentEditable\` is the bottleneck.
  A solution could be virtualization - which has not been implemented with ProseMirror yet - or splitting by chapters, and mounting one chapter at a time.
`;

const MD7 = /* language=md */ `
### Some reference:
| Document | Paragraphs (≈) |
|---|---|
| Typical blog post | 30–80 |
| Long-read article (Wired feature, NYT Magazine) | 100–250 |
| Wikipedia article ("World War II") | ~500 |
| Master's thesis | 1,000–2,000 |
| The Great Gatsby | ~700 |
| Harry Potter and the Sorcerer's Stone | ~2,500 |
| Moby Dick | ~3,000 |
| The Lord of the Rings (entire trilogy) | ~6,500 |
| War and Peace | ~8,000–10,000 |
| All 7 Harry Potter books combined | ~14,500 |
| The complete works of Shakespeare | ~25,000 |
`;

const stress1 = [
  {
    src: "/blog/react-prosemirror/combined-v3-v4-v5-JSHeapUsedSize.png",
    title: "JSHeapUsedSize",
  },
  {
    src: "/blog/react-prosemirror/combined-v3-v4-v5-ScriptDuration.png",
    title: "script duration",
  },
];

const stress2 = [
  {
    src: "/blog/react-prosemirror/node-count-vs-time-v3-v4-v5.png",
    title: "React-ProseMirror's layout count",
  },
  {
    src: "/blog/react-prosemirror/node-count-vs-time-v4-v5.png",
    title: "React-ProseMirror's js heap used size",
  },
];

const coldLoad = [
  {
    src: "/blog/react-prosemirror/combined-v3-snv-v4-snv-v5-snv-cold-load-JSHeapUsedSize.png",
    title: "Cold load JSHeapUsedSize",
  },
  {
    src: "/blog/react-prosemirror/combined-v3-snv-v4-snv-v5-snv-cold-load-timeToVisible.png",
    title: "Cold load time to visible",
  },
];

const inputLatency = [
  {
    src: "/blog/react-prosemirror/keystroke-ramp.png",
    title: "Keystroke latency",
  },
];

const firefixDiagrams = [
  {
    src: "/blog/react-prosemirror/ff-vs-chrome-tc1-throughput.png",
    title: "Firefox vs Chrome Test Case 1",
  },
  {
    src: "/blog/react-prosemirror/ff-vs-chrome-tc2-coldload.png",
    title: "Firefox vs Chrome Test Case 2",
  },
];

const firefixDiagrams2 = [
  {
    src: "/blog/react-prosemirror/ff-vs-chrome-tc3-ramp.png",
    title: "Firefox vs Chrome Test Case 3",
  },
];

const Article = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGraph, setActiveGraph] = useState<string | null>(null);

  const handleToggleImage = (src: string) => {
    if (isOpen && activeGraph === src) {
      setIsOpen(false);
      setActiveGraph(null);
    } else {
      setActiveGraph(src);
      setIsOpen(true);
    }
  };

  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={articleReactProsemirrorMetadata.url}
        title={articleReactProsemirrorMetadata.title}
        description={articleReactProsemirrorMetadata.introText}
        imgSrc={articleReactProsemirrorMetadata.imgSrc}
      />
      <ArticleHeader
        title={articleReactProsemirrorMetadata.title}
        author={articleReactProsemirrorMetadata.author}
        timestamp={articleReactProsemirrorMetadata.timestamp}
        tags={articleReactProsemirrorMetadata.tags}
      />
      <Markdown source={MD0} />

      <div className="flex justify-evenly max-md:flex-wrap">
        {stress1.map((image) => (
          <div
            key={image.src}
            className="graph-image-wrapper"
            onClick={() => handleToggleImage(image.src)}
          >
            <LightBox
              src={image.src}
              isOpen={isOpen && activeGraph === image.src}
              title={image.title}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-evenly max-md:flex-wrap">
        {stress2.map((image) => (
          <div
            key={image.src}
            className="graph-image-wrapper"
            onClick={() => handleToggleImage(image.src)}
          >
            <LightBox
              src={image.src}
              isOpen={isOpen && activeGraph === image.src}
              title={image.title}
            />
          </div>
        ))}
      </div>

      <Markdown source={MD1} />

      <Markdown source={MD2} />
      <div className="flex justify-evenly max-md:flex-wrap">
        {coldLoad.map((image) => (
          <div
            key={image.src}
            className="graph-image-wrapper"
            onClick={() => handleToggleImage(image.src)}
          >
            <LightBox
              src={image.src}
              isOpen={isOpen && activeGraph === image.src}
              title={image.title}
            />
          </div>
        ))}
      </div>

      <Markdown source={MD3} />
      <Markdown source={MD4} />

      <div className="flex justify-evenly max-md:flex-wrap">
        {inputLatency.map((image) => (
          <div
            key={image.src}
            className="graph-image-wrapper"
            onClick={() => handleToggleImage(image.src)}
          >
            <LightBox
              src={image.src}
              isOpen={isOpen && activeGraph === image.src}
              title={image.title}
            />
          </div>
        ))}
      </div>
      <Markdown source={MD5} />

      <Markdown source={MDff} />
      <div className="flex justify-evenly max-md:flex-wrap">
        {firefixDiagrams.map((image) => (
          <div
            key={image.src}
            className="graph-image-wrapper"
            onClick={() => handleToggleImage(image.src)}
          >
            <LightBox
              src={image.src}
              isOpen={isOpen && activeGraph === image.src}
              title={image.title}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-evenly max-md:flex-wrap">
        {firefixDiagrams2.map((image) => (
          <div
            key={image.src}
            className="graph-image-wrapper"
            onClick={() => handleToggleImage(image.src)}
          >
            <LightBox
              src={image.src}
              isOpen={isOpen && activeGraph === image.src}
              title={image.title}
            />
          </div>
        ))}
      </div>

      <Markdown source={MD6} />
      <Markdown source={MD7} />
    </ArticleWrapper>
  );
};

export default Article;
