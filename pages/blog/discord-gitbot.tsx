// eslint-disable-next-line no-use-before-define
import React from "react";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import ArticleHeader from "../../features/article/components/ArticleHeader";

export const article7Metadata: ArticleIntro = {
  title: "Discord gitBot: get Github notifications on your discord server",
  author: "Törcsi & Viktor",
  authorLink: null,
  introText: /* language=md */ `Release of [Discord gitBot](https://discordgitbot.com/): get notified about GitHub events
  on your discord server.
  `,
  postId: "discord-gitbot",
  timestamp: 1643829565161,
  imgSrc: "https://discordgitbot.com/ogimage.png",
  url: "https://emergence-engineering.com/blog/discord-gitbot",
  tags: ["Discord", "GitHub", "Bot Development", "Notifications"],
};

const MD0 = /* language=md */ `
# What's this about?

Release of [Discord gitBot](https://discordgitbot.com/): get notified about GitHub events.

We're aiming at becoming a more product-focused company, and this small(ish) app is just the first in many more to come 
( hopefully! ).

I'd love to hear your feedback, feel free to [drop a mail](mailto:viktor.vaczi@emergence-engineering.com).
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={article7Metadata.url}
      title={article7Metadata.title}
      description={article7Metadata.introText}
      imgSrc={article7Metadata.imgSrc}
    />
    <ArticleHeader
      title={article7Metadata.title}
      author={article7Metadata.author}
      timestamp={article7Metadata.timestamp}
      tags={article7Metadata.tags}
    />
    <Markdown source={MD0} />
    <div style={{ flex: 1 }} />
  </ArticleWrapper>
);
export default Article;
