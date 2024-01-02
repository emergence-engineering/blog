import React from "react";

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
  timestamp: 1703258447236,
  imgSrc: "https://lexical.dev/img/logo.svg",
  url: "https://emergence-engineering.com/blog/lexical-prosemirror-comparison",
};

const MD0 = /* language=md */ `

## Introduction
There are many online platforms where you can edit your text, whether it's a simple note-taking app or a work management site. They are easy to use: the features are familiar from text editor softwares, and sometimes the result is even better - think of image handling and the ability to preview links. These editors are called WYSIWYG (what you see is what you get) editors, and there are several libraries you can use for rich text editing. We tested two for this article: ProseMirror and Lexical.

# The editors
The ProseMirror editor was developed by Marijn Haverbeke. It is robust and reliable; it was released about 6 years ago and is maintained regularly. Work management platforms like Asana and widely read newspapers like The New York Times use it without a problem. There are a number of libraries based on the core of this editor, showing the strong foundations that can be built upon. 

The Lexical editor was developed by Meta to meet their own needs. It is quite new, but is spreading quickly thanks to its reputation and an easily extensible system. Almost anything is possible by creating your own plugins and the library promises to handle the weight of them.

# The goal
The purpose of this test is to see if there's any difference between the two editors when loaded with text - and I mean massive amounts of text. How far they can go, how they handle leaks, how effectively they use memory.

# The environment
The test was performed using Playwright, running in Chrome, and collecting data using the CDP (Chrome DecTools Protocol). On the test site both editors had the same basic features: the ProseMirror had an example setup, and the Lexical was equipped with the same tools.
I've collected data every 5000 ms, mimicking the typing of a word *n* times - as long as the editor could stand it. The typing was done in a browser environment for better simulation. The metrics measured were JSHeapUsedSize, JSHeapTotalSize, ThreadTime, and ScriptDuration.


## Note
First of all, I couldn't run the test on the two editors for the same number of word repetitions - the Lexical editor slowed down significantly after 60 thousand repetitions (somewhere between 60900 and 61000), the ProseMirror editor could run up to 90 thousand repetitions before becoming passive. While I don't have a solid explanation for this, I did try to make some sense out of it in the last section.


# JSHeapUsedSize and TotalSize
\**Lexical\**: As you can see on the line graph of the used memory size, in the first few seconds there are some larger swings, which later become steadier and the line just goes up smoothly. This first part could indicate that the editor is making more internal adjustments or optimizations, and quite soon it reaches a more stable state where its memory usage increases are more predictable and less variable. The continuous increase in heap size without any significant drops might indicate a potential memory leak. 
In the total memory size graph there is a sharp spike at the beginning, which quickly drops and then begins a steady increase. This could be due to initial allocations that get trimmed down before the test enters a steady state.

\**ProseMirror\**: The total amount of memory initially allocated is used up quite early, as we can see in the total size graph. On both images, total memory and memory usage seem to oscillate within a certain range, the latter with an upper boundary at around 25,000,000 bytes and a lower boundary around 13,000,000 bytes. The editor may be intermittently freeing memory or performing periodic optimizations. This could be a sign of efficient garbage collection and memory management strategies. Also, the gradual increase in memory usage suggests a more predictable and controlled memory usage pattern.

`;

const MD1 = /* language=md */ `

# ScriptDuration, ThreadTime
Both editors show a linear performance degradation in terms of script execution time and thread time as the time increases. However, the ProseMirror editor exhibits a faster rate of degradation despite its more dynamic memory management observed in the JSHeapTotalSize metric.

`;

const MD2 = /* language=md */ `

# Result
The presence of garbage collection might mean that the ProseMirror editor could handle long-term usage better than the Lexical editor, as it doesn't allow the heap size to grow unbounded.


## End notes
The website containing the editors was as clean as possible, built with React, the first load bundle of the ProseMirror editor is 158 KB and the Lexical is 160 KB.
I didn’t run out of memory as my JS heap size limit is close to 4 GB and the highest used was about 42MB (Lexical) and 27MB (ProseMirror), allocated memory size was 56MB and 46MB. Although in the case of Lexical continuous allocation without freeing memory can lead to fragmentation, making it difficult for the browser to find contiguous blocks of memory for new operations. With the other editor, the browser's garbage collector might try to free up memory more frequently, but it becomes less effective over time as it can be costly in terms of CPU usage. Frequent garbage collection attempts can cause performance lags.


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
    <div>
      <img src={"/article19-usedSize-totalSize.png"} alt={""} width={"100%"} />
    </div>
    <Markdown source={MD1} />
    <br />
    <div>
      <img
        src={"/article19-scriptDur-threadTime.png"}
        alt={""}
        width={"100%"}
      />
    </div>
    <Markdown source={MD2} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
