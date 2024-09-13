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

export const articleProgrammerArchetypes: ArticleIntro = {
  title: "Programmer archetypes: how to pick a team",
  author: "Viktor",
  imgSrc: "https://emergence-engineering.com/blog/handfight.webp",
  authorLink: null,
  introText: /* language=md */ `No one enjoys being confined to one, yet we often place each other inside it. What is it?
  A box.`,
  postId: "programmer-archetypes-how-to-pick-a-team",
  timestamp: 1710892800000,
  url: "https://emergence-engineering.com/blog/programmer-archetypes-how-to-pick-a-team",
  tags: ["TEAM", "ARCHETYPES", "PROGRAMMER", "TEAMWORK"],
};

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

    <div className="flex w-full flex-col gap-4">
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
      <p>
        No one enjoys being confined to one, yet we often place each other
        inside it. What is it? A box.
      </p>
      <p>
        In my time in software, I&apos;ve met a lot of people, seen a lot of
        teams, some worked well, some not so much. I&apos;ve often wondered how
        the pieces fit and how I could support the team more.
      </p>
      <p>
        Looking for solutions, I&apos;ve found that a 3-piece combo has to work:
      </p>
      <ul className="list-disc pl-5">
        <li>
          <p>the developer&apos;s personality</p>
        </li>
        <li>
          <p>the team&apos;s &quot;personality&quot;</p>
        </li>
        <li>
          <p>the project&apos;s &quot;personality&quot;</p>
        </li>
      </ul>
      <h2>The Planner</h2>
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
      <p>Loves tickets, planning and clear paths, his favourite saying is:</p>
      <ul className="list-disc pl-5">
        <li>
          <p>
            &quot;I had such a productive day, ticked off five things off my
            list!&quot;
          </p>
        </li>
      </ul>
      <p>
        Loves estimating and chunking work into smaller pieces. But! Runs into
        problems with that since the &quot;unknown&quot; part of software
        development doesn&apos;t fit into his thought patterns.
      </p>
      <p>
        Hates chaos and his productivity can tank if there&apos;s no clear goal.
        In short: experiments, proof of concepts are not his thing.
      </p>
      <p> If skilled and self-reflective, he could be a good team lead.</p>
      <h2>The Craftsman</h2>
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
      <p>
        Loves seeing progress every day. Has ways to do things and a routine and
        that combination can lead to serious results.
      </p>
      <p>
        There are things in software development that are usually looked down
        but you need to be skilled to do it well, and it&apos;s obvious in the
        results if you&apos;re not. It&apos;s grunt work for everyone else and
        it shows on the product. Like CSS.
      </p>
      <p>
        The craftsman Just. Loves. Writing. Good. CSS. Does it fast and the end
        result is light years ahead of anyone that writes that part because he
        has to.
      </p>
      <h2>The Teacher</h2>
      <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
        <Image
          src={Handpullup}
          alt="hammer"
          width={320}
          height={320}
          placeholder="blur"
        />
        <div className="font-bold">Come with me if you want to live</div>
      </div>
      <p>
        You&apos;d never figure this out, but I&apos;m a generous god: she loves
        teaching. If anyone posts anything she&apos;ll be on it and provide a
        good answer and some encouragement. The more experience she has the more
        she&apos;ll know each person&apos;s strengths and weaknesses and can be
        very good at delegating. Can have a hard time asking for help.
      </p>
      <p>Makes an amazing team lead.</p>
      <p>
        The love of teaching can lead to a lot of documentation reading and
        studying, resulting in a high skill level in a short time.
      </p>
      <p>
        Teaching can happen one-on-one or through creating docs, guidelines, and
        tutorials for everyone.
      </p>
      <h2>The Perfectionist</h2>
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
      <p>
        There are two ways to do things: the ugly or the perfect. He prefers
        perfect.
      </p>
      <p>
        100% code coverage and CI from day 1, everything is scalable, the code
        has no tech debt.
      </p>
      <p>
        He&apos;s good at arguments since he always gets into them. It takes
        days to get to the bottom because he has answers to everything. If you
        find yourself in that situation, ask: &qout;Does the benefit of this
        decision worth the time it takes to have this argument?&quot; - if the
        answer is no then vote on the issue, without arguing. In the end JS will
        run with or without semicolons at the end of every line.
      </p>
      <p>
        It can be frustrating. It can also be useful because a lot of time
        he&apos;s right, and he will be happy to lead the team through a change.
        Be aware that sometimes the &quot;perfect way&quot; can be a mix of
        thought through opinions and things that he&apos;s used to. It feels the
        same for him (calmness if it&apos;s like that, disgust if it isn&apos;t)
        but are separate things.
      </p>
      <p>
        If you put him into a hacky codebase be ready for war. People like him
        are absolutely necessary to stop or reverse code rot.
      </p>
      <h2>The Hero</h2>
      <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
        <Image
          src={Hero}
          alt="perfection"
          width={320}
          height={320}
          placeholder="blur"
        />
        <div className="font-bold">Who&apos;s with me?</div>
      </div>
      <p>
        The hero needs to feel important and useful. Thrives in a team that
        appreciates her.
      </p>
      <p>
        The problem can be an impossible mission to figure out a seemingly
        impossible problem, or an issue that no one will tackle. It doesn&apos;t
        matter. What does is that he&apos;s needed and appreciated.
      </p>
      <p>
        Loves hacking things together, proof of concepts and any challenge where
        the end result is not given.
      </p>
      <p>
        Hates grunt work and doing the same thing longer than a few weeks. If
        anyone can do her job then she doesn&apos;t have &quot;the fire&quot;.
      </p>
      <p>For some reason loves teaching, but isn&apos;t a good teacher.</p>
      <p>The definition of a team player.</p>
      <h1>How to assemble the right team</h1>
      <p>
        There&apos;s no formula, you&apos;ll have to think :) A few pointers
        that usually help me decide:
      </p>
      <ul className="list-disc pl-5">
        <li>
          <p>
            In tech-heavy projects you&apos;ll need a few Heroes at the
            beginning. Every Hero needs a few Craftsmen: if the goalpost is too
            close, the Hero will get bored and seek the next challenge. Let
            people who enjoy finishing do the finishing.
          </p>
        </li>
        <li>
          <p>
            Heroes love to provide value: a user-facing part is a good place for
            a Hero, even if it isn&apos;t challenging technically. Heroes love
            talking to users.
          </p>
        </li>
        <li>
          <p>
            The proof of concept stage takes a huge toll on Craftsmen: they find
            progress rewarding, discarded work kills their motivation.
          </p>
        </li>
        <li>
          <p>
            If you sense that a project&apos;s quality is down, the solution is
            a Teacher. A good one will usually transform a project and she will
            pull up people that are lagging.
          </p>
        </li>
        <li>
          <p>
            Planner needs a partner, a Teacher or a Hero, for estimations. The
            Planner doesn&apos;t have to be a team lead, but could be. The more
            straightforward the project, the better she&apos;ll be.
          </p>
        </li>
        <li>
          <p>
            Putting a Perfectionist into a lead position could halt progress and
            demotivate people. They can also help improve processes and code
            quality.
          </p>
        </li>
        <li>
          <p>
            Mature Perfectionists can see shades of grey and make compromises.
          </p>
        </li>
      </ul>
      <h1>Beware the box</h1>
      <div className="flex w-full flex-col items-center bg-gray-100 pt-4">
        <Image
          src={Letmeout}
          alt="perfection"
          width={320}
          height={320}
          placeholder="blur"
        />
        <div className="font-bold">Let me out</div>
      </div>
      <p>
        People change. Maybe you do, but I don&apos;t know myself, I don&apos;t
        fully understand my motivations. How could I know someone else?
      </p>
      <p>
        It&apos;s an interesting thought experiment and can be useful to ignite
        your brain and start thinking, but it can turn into judgment. How to
        find the balance? That&apos;s something you&apos;ll have to figure out
        for yourself :)
      </p>
      <p>
        There&apos;s no substitute for courage, honesty, curiosity and emotional
        vulnerability. Both in a person, but also in a team&apos;s culture.
      </p>
      <p>Which one is you?</p>
    </div>
  </ArticleWrapper>
);
export default Article;
