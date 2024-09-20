import React from "react";
import Image from "next/image";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import ArticleHeader from "../../features/article/components/ArticleHeader";

export const article19Metadata: ArticleIntro = {
  title: "Stress Test: Lexical/ProseMirror editors",
  author: "Kata",
  authorLink: null,
  introText: /* language=md */ `Performing a stress test on a basic Lexical and ProseMirror rich text editor`,
  postId: "lexical-prosemirror-comparison",
  timestamp: 1723134798677,
  imgSrc: "https://lexical.dev/img/logo.svg",
  url: "https://emergence-engineering.com/blog/lexical-prosemirror-comparison",
};

const imageStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignSelf: "center",
  width: "100%",
  maxWidth: "100%",
  aspectRatio: "16 / 9",
};

const MD0 = /* language=md */ `

# tl;dr
We compared two rich text editors - Lexical and ProseMirror - to evaluate their performance under data load over time. 
The tests showed significant differences between the two editors depending on the amount of time we want to use them. Lexical performs better for short-term use, responding faster initially, but its performance degrades under very heavy use (likely) due to inefficient memory management. ProseMirror is designed for long-term use, offering a little bit slower responses but more predictable and stable performance over time. 


## Introduction
There are many online platforms where you can edit your text, whether it's a simple note-taking app or a work management site. They are easy to use: the features are familiar from text editor softwares, and sometimes the result is even better - think of image handling and the ability to preview links. These editors are called WYSIWYG (What You See Is What You Get) editors, and there are several libraries you can use for rich text editing. We tested two for this article: ProseMirror and Lexical.

## The editors
The ProseMirror editor was developed by Marijn Haverbeke. It is robust and reliable; it was released about 6 years ago and is maintained regularly. Work management platforms like Asana and widely read newspapers like The New York Times use it without a problem. There are a number of libraries based on the core of this editor, showing the strong foundations that can be built upon. 

The Lexical editor was developed by Meta to meet their own needs. It is quite new, but is spreading quickly thanks to its reputation and an easily extensible system. Almost anything is possible by creating your own plugins and the library promises to handle the weight of them.

# Goal
The purpose of this test is to see if there's any difference between the two editors when loaded with text - and I mean massive amounts of text. How far they can go, how fast they execute scripts, how they handle leaks, how effectively they use memory.

# Environment
The website containing the editors was as clean as possible, built with React, the first load bundle of the ProseMirror editor is 158 KB and the Lexical is 160 KB. Both editors had the same basic features: the ProseMirror had an example setup, and the Lexical got equipped with the same tools.

# Test
The test was performed using Playwright, running in Chrome, and collecting data using the CDP (Chrome DevTools Protocol).\\
The two tests ran one after the other as in the config the number of workers was set to 1. In the beforeEach hook we set the interval for the metrics collection, 
in the afterEach we cleared it and saved the data. 
The test mimicked typing a word and pressing the ‘enter’ key in a loop, creating a new paragraph in every line.\\
We collected measurements in every 15 seconds, recorded timestamps after every 200 nodes, and let each test run for one hour. 
The metrics measured were JSHeapUsedSize, LayoutCount, and ScriptDuration.


## Note
You will notice that the Lexical editor stops consistently around 8200 node count (~20 minutes) in all the tests. The likely cause is related to memory management issues in the long run. 
The ProseMirror editor could go up to 1 hour, usually reaching 11500 node count.\\
You can also see on some of the graphs how the points get closer and closer to each other as the test progresses. 
Both editors can process fewer nodes in 15 seconds after some load, and it shows nicely when they get slower.

## (Bypass)
As we wanted to make the test as noiseless as possible, a thought arose - could it be that the repetitive CDP data collection is interfering with the test? What if instead we saved the trace JSON file at the end and processed it by filtering for only the relevant metrics? 

Each metric we measured with the CDP can be roughly calculated from the data of these trace events:

\**ScriptDuration\**: *total of* RunMicroTasks.dur (cat: v8.execute), FunctionCall.dur (cat: devtools.timeline), EventDispatch.dur (cat: devtools.timeline), MajorGC.dur (cat: devtools.timeline), MinorGC.dur (cat: devtools.timeline)

\**LayoutCount\**: how often the Layout event occurs (cat: devtools.timeline)

\**JSHeapUsedSize\**: UpdateCounters.args.data.jsHeapSizeUsed (cat: disabled-by-default-devtools.timeline)

The trace file can get very large very quickly, so we had to set a filter for the required categories in the beginning and allocate 8GB of memory for it, with an increased timeout in the afterAll hook to let it save the file. Still, the tracing is not designed for an hour-long test that mimics quite active user interaction, so after about 2.5 minutes it just stopped.

And that's how we stayed with the CDP.

\`\`\`typescript
import { Page, test, CDPSession } from "@playwright/test";
import { findEditor, relevantMetrics } from "./utils";
import { EditorParams } from "./types";

const MEASUREMENT_INTERVAL = 15000; // how often the code saves the metrics you measure - default is 15 sec
const MAX_NODES = 20000; // how many nodes to insert into the editor - default is 20k to make sure the test doesn't finish before the set timeout
const NODECOUNT_CHECKPOINT = 200; // the node count at which you want to save the time-nodeCount pair - default is 200

let page: Page;
let session: CDPSession;

let activeEditor: EditorParams;
let nodeCount: number = 0;
let metricInterval: NodeJS.Timeout;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  session = await page.context().newCDPSession(page);
  await session.send("Performance.enable");
  await findEditor(page, editor, querySelector);

  // set an interval to read and collect the selected metrics in every MEASUREMENT_INTERVAL seconds
  metricInterval = setInterval(async () => {
    const perfMetrics = await session.send("Performance.getMetrics");
    const filteredPerfMetrics = perfMetrics.metrics.filter((metric) =>
      relevantMetrics.includes(metric.name),
    );
    activeEditor.perfMetrics.push({ metrics: filteredPerfMetrics, nodeCount });
  }, MEASUREMENT_INTERVAL);

  nodeCount = 0;
});

// the test itself was as light as possible
test(\`Lexical stress test: infinite nodes\`, async () => {
  activeEditor = lexicalParams; // and we did the same with the ProseMirror
  
  for (let i = 0; i < MAX_NODES; i++) {
    await page.keyboard.type("typing ");
    await page.keyboard.press("Enter");
    nodeCount = i + 1;

    if (nodeCount % NODECOUNT_CHECKPOINT === 0 || nodeCount === 1) {
      activeEditor.nodeCountMetrics.push({
        nodeCount: nodeCount,
        time: performance.now(),
      });
    }
  }
});
\`\`\`


# Nodecount
We saved the \`performance.now()\` timestamp after every 200 nodes, and it turned out that Lexical could achieve faster performance. 
It hit the first 200 nodes earlier in time and the first metric measurement (15sec) occurred at a higher node count. 
When it stopped at about 8200 words, the ProseMirror was about to pass the 7600 nodecount.
`;

const MD1 = /* language=md */ `

# ScriptDuration
*ScriptDuration is the time taken to execute scripts as part of the editor's operation, measured in milliseconds.*

\**Lexical and ProseMirror\**: The ScriptDuration time increases with the nodecount in both editors, but Lexical’s graph rises more sharply.
When the tracing files were analyzed in Chrome's performance profiler, it was found that Lexical performed almost twice as much minor garbage collection as  ProseMirror.

\**Conclusions\**: Lexical's total of script executing time increases faster than ProseMirror's, which is probably linked to its faster handling of increasing content and more frequent garbage collection. Either way, this means that users may experience increasing delays in response times sooner as they continue to load Lexical.
`;

const MD2 = /* language=md */ `
    
# LayoutCount
*LayoutCount is the number of layout operations performed by the editor.* 

\**Lexical and ProseMirror\**: The number of layout operations grows linearly with nodecount in both editors, though ProseMirror performs about 2-2.5 times more operations than Lexical.

\**Conclusions\**: In ProseMirror, each user interaction or change generates a transaction, and the editor state is synchronized with the DOM after each transaction. This leads to a higher LayoutCount and is potentially more responsive to user input, providing smoother and quicker updates to the layout. On the other hand, Lexical batches multiple synchronous updates of the editor state into a single asynchronous update to the DOM. This approach improves performance in the short term by reducing the frequency of layout recalculations.
`;

const MD3 = /* language=md */ `


# JSHeapUsedSize
*The JSHeapUsedSize is the actual memory being used at any point in time, measured in bytes - here, converted to MB.*

\**Lexical\**: Lexical shows a continuous upward trend, indicating increasing memory usage over time, suggesting a potential memory leak 
or inefficient memory management as the test progresses. The graph stops at about 3.7 GB of memory usage around 23 minutes into the test. 

\**ProseMirror\**: The JSHeapUsedSize for ProseMirror fluctuates slightly, but remains mostly between 12 and 22 MB throughout the test. The fluctuations indicate minor changes in memory usage, but there is no significant increase or memory leak observed, demonstrating efficient memory management.

\**Conclusions\**: Lexical users might initially experience responsive performance, but as memory usage increases, they could face lagging, slowdowns, and eventually crashes or unresponsiveness.
`;

const MD4 = /* language=md */ `
    
# Results
Both editors have their own pros and cons. \n 
Lexical initially handles the data load better and provides faster content processing, performing operations more efficiently in the short term. This makes it a better choice for quick and small editing tasks. Meta likely designed it this way to benefit from these features in their live chat applications, but it can also be used for personal note-taking, kiosk applications, or short-lived web sessions.
\n However, if you need an editor for heavier tasks, ProseMirror offers a stable and robust solution (and has more thorough documentation). Whether you are building a CMS (Content Management System), an ECM (Enterprise Content Management), or just need an online editor for your blog, you can count on ProseMirror.


Here you find the [public repository](https://github.com/emergence-engineering/prosemirror-vs-lexical-performance-comparison)  to which we’ve uploaded the test with some graph-generation options - feel free to rerun them or use them as a starting point if you’ve got further ideas - and please tell us about it!
`;

const Article = () => (
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

    <div style={{ ...imageStyle}}>
      <Image
        src="/article19-nodeCount.png"
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <Markdown source={MD1} />
    <br />

    <div style={imageStyle}>
      <Image
        src="/article19-scriptDuration.png"
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <Markdown source={MD2} />
    <br />
    <div style={imageStyle}>
      <Image
        src={"/article19-layoutCount.png"}
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <Markdown source={MD3} />
    <br />
    <div style={{...imageStyle, aspectRatio: "3/1"} }>
      <Image
        src={"/article19-jsHeapUsedSize1.png"}
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>
    <div style={imageStyle}>
      <Image
          src={"/article19-jsHeapUsedSize2.png"}
          alt="image"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <Markdown source={MD4} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;