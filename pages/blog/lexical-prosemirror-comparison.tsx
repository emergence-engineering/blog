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
There are many online platforms where you can edit your text, whether it's a simple note-taking app or a work management site. They are easy to use: the features are familiar from text editor softwares, and sometimes the result is even better - think of image handling and the ability to preview links. These editors are called WYSIWYG (what you see is what you get) editors, and there are several libraries you can use for rich text editing. We tested two for this article: ProseMirror and Lexical.

## The editors
The ProseMirror editor was developed by Marijn Haverbeke. It is robust and reliable; it was released about 6 years ago and is maintained regularly. Work management platforms like Asana and widely read newspapers like The New York Times use it without a problem. There are a number of libraries based on the core of this editor, showing the strong foundations that can be built upon. 

The Lexical editor was developed by Meta to meet their own needs. It is quite new, but is spreading quickly thanks to its reputation and an easily extensible system. Almost anything is possible by creating your own plugins and the library promises to handle the weight of them.

# Goal
The purpose of this test is to see if there's any difference between the two editors when loaded with text - and I mean massive amounts of text. How far they can go, how fast they execute scripts, how they handle leaks, how effectively they use memory.

# Environment
The website containing the editors was as clean as possible, built with React, the first load bundle of the ProseMirror editor is 158 KB and the Lexical is 160 KB. Both editors had the same basic features: the ProseMirror had an example setup, and the Lexical got equipped with the same tools.

# Test
The test was performed using Playwright, running in Chrome, and collecting data using the CDP (Chrome DevTools Protocol). The test mimicked typing a word and pressing the ‘enter’ key in a loop, creating a new paragraph in every line. We collected measurements and nodecount in every 15 seconds and let the test run for one hour. The metrics measured were JSHeapUsedSize, LayoutCount, ThreadTime, and ScriptDuration.

## Note
You will notice that the Lexical editor stops consistently around the 20-minute mark / 8200 node count in all the tests. The likely cause is related to memory management issues in the long run. 
The ProseMirror editor could go up to 1 hour, usually reaching 11500 node count.

## (Bypass)
As we wanted to make the test as noiseless as possible, a thought arose - could it be that the repetitive CDP data collection is interfering with the test? What if instead we saved the trace JSON file at the end and processed it by filtering for only the relevant metrics? 

Each metric we measured with the CDP can be roughly calculated from the data of these trace events:

\**ScriptDuration\**: *total of* RunMicroTasks.dur (cat: v8.execute), FunctionCall.dur (cat: devtools.timeline), EventDispatch.dur (cat: devtools.timeline), MajorGC.dur (cat: devtools.timeline), MinorGC.dur (cat: devtools.timeline)

\**LayoutCount\**: how often the Layout event occurs (cat: devtools.timeline)

\**ThreadTime\**: RunTask.tdur (cat: devtools.timeline) - we needed here the 'tdur' value because it reflects the actual CPU time used by the thread to perform the task, excluding any potential idle time, waiting periods, or other interruptions where the thread was not actively processing the event

\**JSHeapUsedSize\**: UpdateCounters.args.data.jsHeapSizeUsed (cat: disabled-by-default-devtools.timeline)

The trace file can get very large very quickly, so we had to set a filter for the required categories in the beginning and allocate 8GB of memory for it, with an increased timeout in the afterAll hook to let it save the file. Still, the tracing is not designed for an hour-long test that mimics quite active user interaction, so after about 2.5 minutes it just stopped.

And that's how we stayed with the CDP.

\`\`\`typescript
import { findEditor, relevantMetrics } from "./utils";

const REPEATS = 100000; // to make sure it doesn't finish in an hour
const MEASUREMENT_INTERVAL = 15000; // ms
let page: Page;

let nodeCount: number;
const nodeCountMetrics: number[] = [];
let nodeCountInterval: NodeJS.Timeout;

const performanceMetrics: Protocol.Performance.Metric[] = [];
let metricInterval: NodeJS.Timeout;
let session: CDPSession;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  session = await page.context().newCDPSession(page);
  await session.send("Performance.enable");
  await findEditor(page, "lexical", ".ContentEditable__root");
  
  nodeCountInterval = setInterval(async () => {
    nodeCountMetrics.push(nodeCount);
  }, MEASUREMENT_INTERVAL);

  interval = setInterval(async () => {
    const perfMetrics = await session.send("Performance.getMetrics");
    const filteredPerfMetrics = perfMetrics.metrics.filter((metric) =>
      relevantMetrics.includes(metric.name), // did not need every metrics
    );
    performanceMetrics.push(...filteredPerfMetrics);
  }, MEASUREMENT_INTERVAL);
});

// the test itself was as light as possible
test("Lexical stress test", async () => {
  for (let i = 0; i < REPEATS; i++) {
    await page.keyboard.type("typing ");
    await page.keyboard.press("Enter");
    nodeCount = i + 1;
  }
});
\`\`\`


# Nodecount
We saved the number of nodes (synchronized with the metrics), and it turned out that Lexical could achieve faster performance. When it stopped at about 8200 words, the ProseMirror was usually about to pass the 7600 nodecount. The graph you see is made of the data collected during the ScriptDuration test.
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

\**Lexical and ProseMirror\**: The number of layout operations grows linearly with nodecount in both editors, though ProseMirror performs about three times more operations than Lexical.

\**Conclusions\**: In ProseMirror, each user interaction or change generates a transaction, and the editor state is synchronized with the DOM after each transaction. This leads to a higher LayoutCount and is potentially more responsive to user input, providing smoother and quicker updates to the layout. On the other hand, Lexical batches multiple synchronous updates of the editor state into a single asynchronous update to the DOM. This approach improves performance in the short term by reducing the frequency of layout recalculations.
`;

const MD3 = /* language=md */ `

# ThreadTime
*ThreadTime refers to the CPU time consumed by the thread handling the editor's operations.*

\**Lexical and ProseMirror\**: As more nodes are added to the editor, the computational load increases, resulting in higher CPU usage. 

\**Conclusions\**: While Lexical's node count grows quickly initially, its ThreadTime remains overall lower compared to ProseMirror, indicating that Lexical processes nodes more efficiently at lower node counts. 
`;

const MD4 = /* language=md */ `

# JSHeapUsedSize
*The JSHeapUsedSize is the actual memory being used at any point in time, measured in bytes - here, converted to MB.*

\**Lexical\**: Lexical shows a continuous upward trend, indicating increasing memory usage over time, suggesting a potential memory leak or inefficient memory management as the test progresses. The graph stops at about 3.6 GB of memory usage around 23 minutes into the test. 

\**ProseMirror\**: The JSHeapUsedSize for ProseMirror fluctuates slightly, but remains mostly between 10 and 20 MB throughout the test. The fluctuations indicate minor changes in memory usage, but there is no significant increase or memory leak observed, demonstrating efficient memory management.

\**Conclusions\**: Lexical users might initially experience responsive performance, but as memory usage increases, they could face lagging, slowdowns, and eventually crashes or unresponsiveness.
`;

const MD5 = /* language=md */ `
    
# Results
Both editors have their own pros and cons. \n 
Lexical initially handles the data load better and provides faster content processing, performing operations more efficiently in the short term. This makes it a better choice for quick and small editing tasks. Meta likely designed it this way to benefit from these features in their live chat applications, but it can also be used for personal note-taking, kiosk applications, or short-lived web sessions.
\n However, if you need an editor for heavier tasks, ProseMirror offers a stable and robust solution (and has more thorough documentation). Whether you are building a CMS (Content Management System), an ECM (Enterprise Content Management), or just need an online editor for your blog, you can count on ProseMirror.


Here you find the \**public repository\**  to which we’ve uploaded the tests, so feel free to rerun them or use them as a starting point if you’ve got further ideas - and please tell us about it too!
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

    <div style={{ ...imageStyle, width: "80%" }}>
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
    <div style={imageStyle}>
      <Image
        src={"/article19-threadTime.png"}
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>
    <Markdown source={MD4} />
    <br />
    <div style={imageStyle}>
      <Image
        src={"/article19-JSHeapUsedSize.png"}
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <Markdown source={MD5} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;