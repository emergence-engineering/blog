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
  width: "80%",
  maxWidth: "100%",
  aspectRatio: "16 / 9",
};

const MD0 = /* language=md */ `

# tl;dr
We compared two rich text editors - Lexical and ProseMirror - to evaluate their performance under data load over time. 
The tests showed significant differences between the two editors depending on the amount of time we want to use them. Lexical performs better for short-term use, responding faster initially, but its performance degrades and it can become unresponsive after about 20 minutes of heavy use. ProseMirror, on the other hand, is designed for long-term use, offering more predictable and stable performance over time. 


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
The test was performed using Playwright, running in Chrome, and collecting data using the CDP (Chrome DevTools Protocol). The test mimicked typing a word and pressing the ‘enter’ key in a loop. We’ve collected data every 15 seconds and let the test run for one hour (shown in minutes on the x-axis) before manually stopping it. The metrics measured were JSHeapUsedSize, LayoutCount, ThreadTime, and ScriptDuration.

\`\`\`tsx
import { findEditor, relevantMetrics } from "./utils";

const REPEATS = 100000; // to make sure it doesn't finish in an hour
const MEASUREMENT_INTERVAL = 15000; // ms
const performanceMetrics: Protocol.Performance.Metric[] = [];
let page: Page;
let interval: NodeJS.Timeout;
let session: CDPSession;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  session = await page.context().newCDPSession(page);
  await session.send("Performance.enable");
  await findEditor(page, "lexical", ".ContentEditable__root");

  interval = setInterval(async () => {
    const perfMetrics = await session.send("Performance.getMetrics");
    const filteredPerfMetrics = perfMetrics.metrics.filter((metric) =>
      relevantMetrics.includes(metric.name), // did not need every metrics
    );
    performanceMetrics.push(...filteredPerfMetrics);
  }, MEASUREMENT_INTERVAL);
});

test("Lexical stress test", async () => {
  test.setTimeout(10000000);

  for (let i = 0; i < REPEATS; i++) {
    await page.keyboard.type("typing ");
    await page.keyboard.press("Enter");
  }
});
\`\`\`


## Note
You will notice that the Lexical editor consistently stops around the 20-minute mark in all the tests. The likely cause is related to memory management issues in the long run.



# ScriptDuration
*ScriptDuration is the time taken to execute scripts as part of the editor's operation, measured in seconds.*

\**ProseMirror\**: ProseMirror demonstrates stable performance with a predictable and linear increase in script duration over time without sudden spikes or stops. This indicates that it handles operations consistently without significant performance degradation. By the end of the test, ProseMirror reaches a script duration of about 550 seconds.

\**Lexical\**:  Lexical's curve rises more steeply than ProseMirror's, indicating that the time taken by the editor’s scripts increases more rapidly, suggesting that it becomes less efficient over time. The abrupt stop indicates potential performance or stability issues under prolonged stress. Lexical reaches a script duration of about 490 seconds by the 19-minute mark

\**Conclusions\**: In the short term, Lexical's script duration increases more quickly compared to ProseMirror. This rapid increase suggests that Lexical is initially handling text operations more quickly, resulting in shorter script durations. In the long run, however, this means that users may experience increasing delays in response times as they continue to use Lexical. This can lead to a progressively sluggish experience.
`;

const MD1 = /* language=md */ `
    
# LayoutCount
*LayoutCount is the number of layout operations performed by the editor.* 

\**ProseMirror\**: Initially ProseMirror's curve is steeper than Lexical's, suggesting that it performs more layout operations per unit of time. It continues to perform consistently throughout the hour, with its operations count steadily increasing. This indicates that ProseMirror maintains its performance without significant degradation over time. At the end of the test it reaches 127600, at about 23 minutes it’s 84500.

\**Lexical\**: Although both editors start with a steep incline in the number of operations, indicating a high rate of layout operations, the Lexical editor's rate of increase in operations begins to slow down quite early, lagging behind the ProseMirror’s count. It reaches 65600 after about 23 minutes when it stops.

\**Conclusions\**: ProseMirror performing more operations per minute suggests it is potentially more responsive to user inputs, providing smoother and quicker updates to the layout as changes are made.
This could result in a more fluid user experience, especially in scenarios involving frequent updates, such as typing or complex document editing.
`;

const MD2 = /* language=md */ `

# ThreadTime
*ThreadTime refers to the CPU time consumed by the thread handling the editor's operations.*

\**ProseMirror and Lexical\**: Both editors maintain a consistent thread processing rate over time, with thread time increasing linearly. This indicates stable performance and efficient handling of thread operations - as long as the editor is responsive. 
`;

const MD3 = /* language=md */ `

# JSHeapUsedSize
*The JSHeapUsedSize is the actual memory being used at any point in time, measured in bytes - here, converted to MB.*

\**ProseMirror\**: The JSHeapUsedSize for ProseMirror fluctuates slightly, but averages around 20 MB throughout the test. The fluctuations indicate minor changes in memory usage, but there is no significant increase or memory leak observed, demonstrating efficient memory management.

\**Lexical\**: The JSHeapUsedSize for Lexical shows a continuous upward trend, indicating increasing memory usage over time, suggesting a potential memory leak or inefficient memory management as the test progresses. The graph stops at 3.86 GB of memory usage just before 20 minutes into the test.

\**Conclusions\**: Lexical users might initially experience responsive performance, but as memory usage increases, they could face lagging, slowdowns, and eventually crashes or unresponsiveness.
`;

const MD4 = /* language=md */ `

# Results
Both editors have their own pros and cons. \n 
Lexical initially handles the data load better, providing faster responses and handling more operations for a short time, making it a better choice for quick and small editing tasks. Meta likely designed it this way to benefit from these features in their live chat applications, but it can also be used for personal note-taking, kiosk applications, or short-lived web sessions.
\n However, if you need an editor for heavier tasks, ProseMirror offers a stable and robust solution (and has more thorough documentation). Whether you are building a CMS (Content Management System), an ECM (Enterprise Content Management), or just need an online editor for your blog, you can count on ProseMirror.

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

    <div style={imageStyle}>
      <Image
        src="/article19-scriptDuration.png"
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
        src={"/article19-layoutCount.png"}
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
        src={"/article19-threadTime.png"}
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>
    <Markdown source={MD3} />
    <br />
    <div style={{ ...imageStyle, width: "100%" }}>
      <Image
        src={"/article19-JSHeapUsedSize.png"}
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