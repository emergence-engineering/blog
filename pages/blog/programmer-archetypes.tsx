import React from "react";
import Image from "next/image";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";

import Handfight from "../../public/blog/handfight.webp";
import Todo from "../../public/blog/todo.webp";
import Hammer from "../../public/blog/hammer.webp";
import Handpullup from "../../public/blog/handpullup.webp";
import Perfection from "../../public/blog/perfection.webp";
import Hero from "../../public/blog/hero.webp";
import Letmeout from "../../public/blog/letmeout.webp";
import Markdown from "../../features/article/components/Markdown";

export const articleProgrammerArchetypes: ArticleIntro = {
  title: "Programmer archetypes: 5 types of coders",
  author: "Viktor",
  imgSrc: "https://emergence-engineering.com/blog/handfight.webp",
  authorLink: null,
  introText: /* language=md */ `No one enjoys being confined to one, yet we often place each other inside it. What is it?
  A box.`,
  postId: "programmer-archetypes",
  timestamp: 1710892800000,
  url: "https://emergence-engineering.com/blog/programmer-archetypes",
  tags: ["TEAM", "ARCHETYPES", "PROGRAMMER", "TEAMWORK"],
};

const MD0 = /* language=md */ `
No one enjoys being confined to one, yet we often place each other inside it. What is it? A box.

In my time in software, I've met a lot of people, seen a lot of teams, some worked well, some not so much. I've often wondered how the pieces fit and how I could support the team more.

Looking for solutions, I've found that a 3-piece combo has to work:
- the developer's personality
- the team's "personality"
- the project's "personality"

## The Planner

`;

const MD1 = /* language=md */ `
Loves tickets, planning and clear paths, his favourite saying is:

- "I had such a productive day, ticked off five things off my list!"

Loves estimating and chunking work into smaller pieces. But! Runs into problems with that since the "unknown" part of software development doesn't fit into his thought patterns.

Hates chaos and his productivity can tank if there's no clear goal. In short: experiments, proof of concepts are not his thing.

If skilled and self-reflective, he could be a good team lead.

## The Craftsman

`;

const MD2 = /* language=md */ `
Loves seeing progress every day. Has ways to do things and a routine and that combination can lead to serious results.

There are things in software development that are usually looked down but you need to be skilled to do it well, and it's obvious in the results if you're not. It's grunt work for everyone else and it shows on the product. Like CSS.

The craftsman Just. Loves. Writing. Good. CSS. Does it fast and the end result is light years ahead of anyone that writes that part because he has to.

## The Teacher

`;

const MD3 = /* language=md */ `
You'd never figure this out, but I'm a generous god: she loves teaching. If anyone posts anything she'll be on it and provide a good answer and some encouragement. The more experience she has the more she'll know each person's strengths and weaknesses and can be very good at delegating. Can have a hard time asking for help.

Makes an amazing team lead.

The love of teaching can lead to a lot of documentation reading and studying, resulting in a high skill level in a short time.

Teaching can happen one-on-one or through creating docs, guidelines, and tutorials for everyone.

## The Perfectionist

`;

const MD4 = /* language=md */ `
There are two ways to do things: the ugly or the perfect. He prefers perfect.

100% code coverage and CI from day 1, everything is scalable, the code has no tech debt.

He's good at arguments since he always gets into them. It takes days to get to the bottom because he has answers to everything. If you find yourself in that situation, ask: "Does the benefit of this decision worth the time it takes to have this argument?" - if the answer is no then vote on the issue, without arguing. In the end JS will run with or without semicolons at the end of every line.

It can be frustrating. It can also be useful because a lot of time he's right, and he will be happy to lead the team through a change. Be aware that sometimes the "perfect way" can be a mix of thought through opinions and things that he's used to. It feels the same for him (calmness if it's like that, disgust if it isn't) but are separate things.

If you put him into a hacky codebase be ready for war. People like him are absolutely necessary to stop or reverse code rot.

## The Hero

`;

const MD5 = /* language=md */ `
The hero needs to feel important and useful. Thrives in a team that appreciates her.

The problem can be an impossible mission to figure out a seemingly impossible problem, or an issue that no one will tackle. It doesn't matter. What does is that he's needed and appreciated.

Loves hacking things together, proof of concepts and any challenge where the end result is not given.

Hates grunt work and doing the same thing longer than a few weeks. If anyone can do her job then she doesn't have "the fire".

For some reason loves teaching, but isn't a good teacher.

The definition of a team player.

# How to assemble the right team

There's no formula, you'll have to think :) A few pointers that usually help me decide:

- In tech-heavy projects you'll need a few Heroes at the beginning. Every Hero needs a few Craftsmen: if the goalpost is too close, the Hero will get bored and seek the next challenge. Let people who enjoy finishing do the finishing.
- Heroes love to provide value: a user-facing part is a good place for a Hero, even if it isn't challenging technically. Heroes love talking to users.
- The proof of concept stage takes a huge toll on Craftsmen: they find progress rewarding, discarded work kills their motivation.
- If you sense that a project's quality is down, the solution is a Teacher. A good one will usually transform a project and she will pull up people that are lagging.
- Planner needs a partner, a Teacher or a Hero, for estimations. The Planner doesn't have to be a team lead, but could be. The more straightforward the project, the better she'll be.
- Putting a Perfectionist into a lead position could halt progress and demotivate people. They can also help improve processes and code quality.
- Mature Perfectionists can see shades of grey and make compromises.

# Beware the box

`;

const MD6 = /* language=md */ `
People change. Maybe you do, but I don't know myself, I don't fully understand my motivations. How could I know someone else?

It's an interesting thought experiment and can be useful to ignite your brain and start thinking, but it can turn into judgment. How to find the balance? That's something you'll have to figure out for yourself :)

There's no substitute for courage, honesty, curiosity and emotional vulnerability. Both in a person, but also in a team's culture.

Which one is you?`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={articleProgrammerArchetypes.url}
      title={articleProgrammerArchetypes.title}
      description={articleProgrammerArchetypes.introText}
      imgSrc={articleProgrammerArchetypes.imgSrc}
    />
    <ArticleHeader
      title={articleProgrammerArchetypes.title}
      author={articleProgrammerArchetypes.author}
      timestamp={articleProgrammerArchetypes.timestamp}
      tags={articleProgrammerArchetypes.tags}
    />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Handfight}
        alt="handfight"
        width={320}
        height={320}
        priority
      />
      <div className="font-bold">And the winner is:</div>
    </div>
    <Markdown source={MD0} />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Todo}
        alt="todo"
        width={320}
        height={320}
        placeholder="blur"
      />
      <div className="font-bold">What&apos;s next?</div>
    </div>
    <Markdown source={MD1} />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Hammer}
        alt="hammer"
        width={320}
        height={320}
        placeholder="blur"
      />
      <div className="font-bold">What time is it?</div>
    </div>
    <Markdown source={MD2} />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Handpullup}
        alt="handpullup"
        width={320}
        height={320}
        placeholder="blur"
      />
      <div className="font-bold">Come with me if you want to live</div>
    </div>
    <Markdown source={MD3} />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Perfection}
        alt="perfection"
        width={320}
        height={320}
        placeholder="blur"
      />
      <div className="font-bold">Some things don&apos;t have a place</div>
    </div>
    <Markdown source={MD4} />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Hero}
        alt="hero"
        width={320}
        height={320}
        placeholder="blur"
      />
      <div className="font-bold">Who&apos;s with me?</div>
    </div>
    <Markdown source={MD5} />
    <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
      <Image
        src={Letmeout}
        alt="letmeout"
        width={320}
        height={320}
        placeholder="blur"
      />
      <div className="font-bold">Let me out</div>
    </div>
    <Markdown source={MD6} />
  </ArticleWrapper>
);
export default Article;
