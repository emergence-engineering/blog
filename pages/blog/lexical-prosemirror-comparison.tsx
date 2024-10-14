import React, { useState } from "react";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";
import { LightBox } from "../../features/twBlog/LightBox";

export const article19Metadata: ArticleIntro = {
  title: "Rich Text Editors in Action: Stress Test On Lexical and ProseMirror",
  author: "Kata & Viktor",
  authorLink: null,
  introText: /* language=md */ `This article explores how Lexical and ProseMirror handle long-term use and heavy data stress.`,
  postId: "lexical-prosemirror-comparison",
  timestamp: 1728049303258,
  url: "https://emergence-engineering.com/blog/lexical-prosemirror-comparison",
  tags: ["ProseMirror", "Lexical", "performance test"],
};

const MD0 = /* language=md */ `

# TL;DR
We compared two rich text editors - Lexical and ProseMirror - to evaluate their performance under data load over time. The tests showed significant differences between the two editors depending on the amount of time we want to use them. Lexical performs better for short-term use, responding faster initially, but its performance degrades under very heavy use (likely) due to inefficient memory management. ProseMirror is designed for long-term use, offering a little bit slower responses but more predictable and stable performance over time.

\_\_\_

# Update: October 9, 2024
On the Lexical Discord server \`etrepum\` drew our attention to Lexical's history plugin (it ensures that I can undo/redo my actions in the editor) -
it's useful for general use cases, but in this scenario it just broke the test, because the plugin stores all the editor states as they are,
without compressing or removing older ones over time. We re-ran the test without the plugin; please see the results below.


# Introduction
There are many online platforms where you can edit your rich text, such as Google Docs or the Slack or Discord input box. To create your own rich text editor, you will need a library that you can pull pre-built features from to streamline development and to save time, since building all the features from the ground up is really hard.

We tested two rich text editor libraries for this article: ProseMirror and Lexical.

ProseMirror is the standard technology for building complex rich text editors with good documentation and a vibrant community. The editor was released by Marijn Haverbeke about 6 years ago and is maintained regularly. It is robust and reliable. There is a huge open source community around it - most of the time someone has already created the feature you need. ProseMirror is used everywhere from work management platforms like Asana and widely read newspapers like The New York Times to the input box of ChatGPT. 

Lexical is a newer rich text editor framework developed by Meta to meet their own needs. Its community is smaller and the documentation is not as good as ProseMirror’s. It caught attention a few years ago; we also made a few plugins and wrote articles about our experiences with it. After all that, we were curious if their performance and code size claims were true.

So how does the new library developed by Meta stack up against the current champion?

# Test Overview and Methodology
For the test we created a Next.JS website with two routes: \`/prosemirror\` and \`/lexical\` . These routes had their corresponding editors: ProseMirror had its example setup,  Lexical was configured to have the same features. The first load bundle of the ProseMirror editor is 158 KB and the Lexical is 160 KB which is a negligible difference.

This website was used by Playwright to perform the tests, we were collecting data using the CDP (Chrome DevTools Protocol). We tried using trace files instead of CDP, but it quickly ran out of memory, as it is not designed for long tests with such active user interactions.

The test itself was quite simple: it mimicked typing a word and pressing the ‘enter’ key in a loop (creating a new paragraph in every line). We ran this loop on both editors for an hour, one after the other - before each one we set a 15-second interval for the metrics collection, and after each one we cleared it and saved the data.  Meanwhile, we recorded the timestamps in every 200 nodes to see how the increasing content affects their speed (and loss).

We measured three metrics that can alter it immensely: ScriptDuration, LayoutCount and JSHeapUsedSize.
ScriptDuration measures the time taken to execute scripts that are part of the editor's operation. A higher number typically results in slower responsiveness of the editor. If it increases users may notice lagging when typing, delays in applying formatting, or general sluggishness in interacting with the editor.

LayoutCount measures the total number of layout events. Layout operations involve calculating the positions and sizes of elements on the page, especially after changes like typing, inserting elements, or resizing content.

JSHeapUsedSize tracks the amount of memory currently used in the editor's operation. As memory usage increases, the editor might become less responsive, leading to slowdowns, freezes, or even crashes if the heap becomes too large and its garbage collection doesn’t work well enough.

This is where the shorter length of the line of the Lexical graph needs to be addressed. As you will notice the editor stops consistently around 8200 node counts (~20 minutes) in all the tests. The likely cause is related to memory management issues in the long run. The ProseMirror editor usually reached 11500 node counts during the one hour.

The other important detail you can see on some of the graphs how the points get closer and closer to each other as the test progresses. Both editors can process fewer nodes in 15 seconds after some load, and the images show nicely when they get slower.

\`\`\`typescript
import { Page, test, CDPSession } from "@playwright/test";
import { findEditor, relevantMetrics } from "./utils";
import { EditorParams } from "./types";

// how often the code saves the metrics you measure - 
// default is 15 sec
const MEASUREMENT_INTERVAL = 15000; 
// how many nodes to insert into the editor - 
// default is 20k to make sure the test doesn't finish early
const MAX_NODES = 20000; 
// the node count at which you want to save the time-nodeCount pair - 
// default is 200 nodes
const NODECOUNT_CHECKPOINT = 200; 

let page: Page;
let session: CDPSession;

let activeEditor: EditorParams;
let nodeCount: number = 0;
let metricInterval: NodeJS.Timeout;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  session = await page.context().newCDPSession(page);
  await session.send("Performance.enable");
  await findEditor(page, activeEditor.editor, activeEditor.qs);

  // set an interval to read and collect the selected metrics
  metricInterval = setInterval(async () => {
    const perfMetrics = await session.send("Performance.getMetrics");
    const filteredPerfMetrics = perfMetrics.metrics.filter((metric) =>
      relevantMetrics.includes(metric.name),
    );
    activeEditor.perfMetrics.push({
      metrics: filteredPerfMetrics,
      nodeCount,
      time: performance.now(),
    });
  }, MEASUREMENT_INTERVAL);

  nodeCount = 0;
});

// the two tests ran after each other and were as light as possible
test(\`Lexical stress test\`, async () => {
    activeEditor = lexicalParams; 
    
    activeEditor.nodeCountMetrics.push({
      nodeCount: nodeCount,
      time: performance.now(),
    });
  
    for (let i = 0; i < MAX_NODES; i++) {
      await page.keyboard.type("typing ");
      await page.keyboard.press("Enter");
        
      nodeCount = i + 1;
        
      if (nodeCount % NODECOUNT_CHECKPOINT === 0) {
        activeEditor.nodeCountMetrics.push(
          nodeCount: nodeCount,
          time: performance.now(),
        });
      }
    }
});
\`\`\`


# Nodecount
We saved the \`performance.now()\` timestamp after every 200 nodes, and it turned out that Lexical could achieve faster performance. It hit the first 200 nodes earlier in time and the first metric measurement (15sec) occurred at a higher node count. When it stopped at about 8200 words, the ProseMirror just passed the 7600 node counts. 
That means Lexical is 8% faster than ProseMirror in this test.

**Update**: With the history plugin disabled in the Lexical editor, the max node count was 13.928 here and 11.642 in the ProseMirror, which is a more promising 19,5% difference in speed by the end of the hour.

*You can zoom in by clicking on the image.*
`;

const MD1 = /* language=md */ `

# ScriptDuration
*ScriptDuration is the time taken to execute scripts as part of the editor's operation, measured in milliseconds.*

\**Lexical and ProseMirror\**: The ScriptDuration time increases with the node count in both editors, but Lexical’s graph rises more sharply. When experimental tracing files were analyzed in Chrome's performance profiler, it was found that Lexical performed almost twice as much minor garbage collection as ProseMirror.

\**Conclusions\**: Lexical's total of script executing time increases surprisingly faster than ProseMirror's ~~which is probably linked to its faster handling of increasing content and more frequent garbage collection~~.

**Update**: With the history plugin disabled in the Lexical editor, the rise of the blue line is a bit less steep, probably because logging the state updates took time.

*You can zoom in by clicking on the image.*
`;

const MD2 = /* language=md */ `
    
# LayoutCount
*LayoutCount is the number of layout operations performed by the editor.* 

\**Lexical and ProseMirror\**: The number of layout operations grows linearly with nodecount in both editors, though ProseMirror performs about 2-2.5 times more operations than Lexical.

\**Conclusions\**: In ProseMirror, each user interaction or change generates a transaction, and the editor state is synchronized with the DOM after each transaction. Lexical, on the other hand, achieves the same thing with less. The main improvement of Lexical is the batched updates meaning updates are executed in a single step, instead of updating the editor after each change. This approach improves performance in the short term by reducing the frequency of layout recalculations, and could be beneficial for editors with many features.

*You can zoom in by clicking on the image.*

`;

const MD3 = /* language=md */ `


# JSHeapUsedSize
*The JSHeapUsedSize is the actual memory being used at any point in time, measured in bytes - here, converted to MB.*

\**Lexical\**: Lexical shows a continuous upward trend, indicating increasing memory usage over time, suggesting a potential memory leak or inefficient memory management as the test progresses. The graph stops at about 3.9 GB of memory usage around 23 minutes into the test.

\**ProseMirror\**: The JSHeapUsedSize for ProseMirror fluctuates slightly, but remains between 6 and 18 MB throughout the test. The fluctuations indicate minor changes in memory usage, but there is no significant increase or memory leak observed, demonstrating efficient memory management.

\**Conclusions\**: Lexical users might initially experience responsive performance, but as memory usage increases, they could face lagging, slowdowns, and eventually crashes or unresponsiveness.

**Update**: With the history plugin disabled in the Lexical editor, the Lexical graph resembles more to the ProseMirror graph. It still uses more memory, fluctuating between about 10 and 70 MB, but the garbage collection works well and lets the editor run for the whole hour without crashing or slowing down significantly. 

*You can zoom in by clicking on the image.*

`;

const MD4 = /* language=md */ `
    
# Results
Depending on how you intend to use the editor you choose, you will have to make trade-offs; here we have collected information that can help you to make the best decision.

**Update**: It turned out that the Lexical's history plugin saves the editor states without compressing or discarding the old ones, causing the editor to crash under these circumstances. This test admittedly doesn't mimic a common use case, but since we wanted to test the editors with the same features, it meant we had to include this plugin as well.

Lexical initially handles the data load better and provides faster content processing, performing operations more efficiently in the short term. This makes it a better choice for quick and small editing tasks. Meta likely designed it this way to benefit from these features in their live chat applications, but it can also be used for personal note-taking, kiosk applications, or short-lived web sessions.

However, if you need an editor for heavier tasks, ProseMirror offers a stable and robust solution. Whether you are building a CMS (Content Management System), or just need an online editor for your blog, you can count on ProseMirror.

Also, there’s another part of the story: ProseMirror has very good and mature documentation, a thriving ecosystem, and solutions for all kinds of problems. Lexical is really lacking in these areas, sometimes making development very difficult for things that would be easy with ProseMirror. Since Lexical is a newer framework backed by a huge company, we expected it to be significantly better than ProseMirror, but we didn’t see that. Even without the memory issues, it’s not worth using; you trade a lot of development effort for marginal performance improvements.


Footnote: Here you find the [public repository](https://github.com/emergence-engineering/prosemirror-vs-lexical-performance-comparison) to which we’ve uploaded the test with some graph-generation options. Feel free to rerun them or use them as a starting point if you’ve got further ideas - and please tell us about it!
`;

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

  const nodeCountImages = [
    {
      src: "/blog/article19/nodeCount.png",
      title: "Lexical's history plugin ON",
    },
    {
      src: "/blog/article19/nodeCount-noHistory.png",
      title: "Lexical's history plugin OFF",
    },
  ];
  const scriptDurImages = [
    {
      src: "/blog/article19/scriptDuration.png",
      title: "Lexical's history plugin ON",
    },
    {
      src: "/blog/article19/scriptDuration-noHistory.png",
      title: "Lexical's history plugin OFF",
    },
  ];
  const layoutCountImages = [
    {
      src: "/blog/article19/layoutCount.png",
      title: "Lexical's history plugin ON",
    },
    {
      src: "/blog/article19/layoutCount-noHistory.png",
      title: "Lexical's history plugin OFF",
    },
  ];

  const jsHeapImages1 = [
    {
      src: "/blog/article19/jsHeapUsedSize-lexical.png",
      title: "Lexical's history plugin ON",
    },
    {
      src: "/blog/article19/jsHeapUsedSize-pm.png",
      title: "Lexical's history plugin ON",
    },
  ];
  const jsHeapImages2 = [
    {
      src: "/blog/article19/jsHeapUsedSize.png",
      title: "Lexical's history plugin ON",
    },
    {
      src: "/blog/article19/jsHeapUsedSize-noHistory.png",
      title: "Lexical's history plugin OFF",
    },
  ];

  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article19Metadata.url}
        title={article19Metadata.title}
        description={article19Metadata.introText}
        imgSrc={article19Metadata.imgSrc}
      />
      <ArticleHeader
        title={article19Metadata.title}
        author={article19Metadata.author}
        timestamp={article19Metadata.timestamp}
      />

      <Markdown source={MD0} />
      <br />

      <div className="flex justify-evenly max-md:flex-wrap">
        {nodeCountImages.map((image) => (
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
      <br />

      <div className="flex justify-evenly max-md:flex-wrap">
        {scriptDurImages.map((image) => (
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

      <Markdown source={MD2} />
      <br />

      <div className="flex justify-evenly max-md:flex-wrap">
        {layoutCountImages.map((image) => (
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
      <br />
      <div className="flex justify-evenly max-md:flex-wrap">
        {jsHeapImages1.map((image) => (
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
        {jsHeapImages2.map((image) => (
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

      <Markdown source={MD4} />
    </ArticleWrapper>
  );
};
export default Article;