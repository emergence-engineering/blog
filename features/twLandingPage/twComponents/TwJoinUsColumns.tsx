import React, { FC } from "react";
import Image from "next/image";
import { montserrat, ptSans, ptSansNarrow } from "../../../utils/fonts";

const TwJoinUsColumns: FC = () => {
  return (
    <>
      <style jsx>{`
        .blackWhiteBgSplit {
          @media (min-width: 769px) {
            background: linear-gradient(to right, black 50%, white 50%);
          }
        }
        .customGridContainer {
          @media (min-width: 769px) {
            display: grid;
            grid-template-areas:
              "one two"
              "three four";
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            column-gap: clamp(1rem, 11rem, 15rem);
          }
        }

        .customAreaOne {
          @media (min-width: 769px) {
            grid-area: one;
          }
        }

        .customAreaTwo {
          @media (min-width: 769px) {
            grid-area: two;
          }
        }

        .customAreaThree {
          @media (min-width: 769px) {
            grid-area: three;
          }
        }

        .customAreaFour {
          @media (min-width: 769px) {
            grid-area: four;
          }
        }
      `}</style>
      <div
        id="join_us_root"
        className={`blackWhiteBgSplit md:pb-15 relative grid max-w-[1440px] flex-grow grid-cols-1 gap-12 bg-black px-3 pb-20 pt-10 md:h-[100vh] ${ptSansNarrow.className} text-white md:text-black`}
      >
        <div
          id="sec-1-arrow"
          className="hidden opacity-0 lg:absolute lg:left-1/2 lg:top-[17em] lg:block lg:-translate-x-1/2 lg:transform"
        >
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          id="sec-2-arrow"
          className="hidden opacity-0 lg:absolute lg:left-1/2 lg:top-[19.5em] lg:block lg:-translate-x-1/2 lg:transform"
        >
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          id="sec-3-arrow"
          className="hidden opacity-0 lg:absolute lg:left-1/2 lg:top-[14rem] lg:block lg:-translate-x-1/2 lg:transform"
        >
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          id="sec-4-arrow"
          className="hidden opacity-0 lg:absolute lg:left-1/2 lg:top-[12.5rem] lg:block lg:-translate-x-1/2 lg:transform"
        >
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div id="section-1" className="px-2 md:absolute md:opacity-0">
          <div className="customGridContainer flex flex-col">
            <div
              id="sec-1-label"
              className="hidden flex-col items-center bg-black md:flex md:items-start md:text-white"
            >
              <div className="my-3 justify-self-center">
                <div
                  className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs`}
                >
                  YOU HAVE AN IDEA, LET&#39;S PLAN TOGETHER!
                </div>
              </div>
              <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                <div
                  className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                >
                  01
                </div>
                <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                  PLAN
                </h1>
              </div>
            </div>

            <div
              id="section-labels"
              className="gradient-under relative flex h-28 flex-col items-center"
            >
              <div
                id="m-label-1"
                className="absolute flex w-full flex-col items-center bg-black md:items-start md:text-white"
              >
                <div className="my-3 justify-self-center">
                  <div
                    className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs`}
                  >
                    YOU HAVE AN IDEA, LET&#39;S PLAN TOGETHER!
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div
                    className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                  >
                    01
                  </div>
                  <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                    PLAN
                  </h1>
                </div>
              </div>

              <div
                id="m-label-2"
                className="absolute flex w-full flex-col items-center bg-black opacity-0 md:items-start md:text-white"
              >
                <div className="my-3 justify-self-center">
                  <div
                    className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs uppercase`}
                  >
                    With a solid plan in place lets start building!
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div
                    className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                  >
                    02
                  </div>
                  <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                    PROTOTYPE
                  </h1>
                </div>
              </div>

              <div
                id="m-label-3"
                className="absolute flex w-full flex-col items-center bg-black opacity-0 md:items-start md:text-white"
              >
                <div className="my-3 justify-self-center">
                  <div
                    className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs uppercase`}
                  >
                    Let&#39;s press the launch button. Shall we?:D
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div
                    className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                  >
                    04
                  </div>
                  <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                    PRODUCT
                  </h1>
                </div>
              </div>

              <div
                id="m-label-4"
                className="absolute flex w-full flex-col items-center bg-black opacity-0 md:items-start md:text-white"
              >
                <div className="my-3 justify-self-center">
                  <div className="w-fit rounded-full bg-gray-700 px-4 py-2 text-xs uppercase">
                    Let&#39;s press the launch button. Shall we? :D
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div className="mr-4 w-fit bg-letter-background bg-clip-text font-bold text-transparent">
                    04
                  </div>
                  <h1 className="font-extrabold">PRODUCT</h1>
                </div>
              </div>
            </div>

            <div
              className="customAreaTwo flex items-center justify-center md:opacity-0"
              id="sec-1-illustration"
            >
              <div className="justify-self-center">
                <Image
                  src={"/illustrations/Illustration_Plan.png"}
                  alt={"Illustration Plan"}
                  width={170}
                  height={280}
                  style={{ objectFit: "contain" }}
                  className="h-auto w-[250px] md:w-[461px]"
                />
              </div>
            </div>
            <div
              className="customAreaThree md:text-white md:opacity-0"
              id="sec-1-intro"
            >
              <p
                className={`text-center ${ptSansNarrow.className} text-xl font-bold md:text-left md:text-4xl`}
              >
                You come to the right place if you
              </p>
              <div className="flex flex-col">
                <ul
                  className={`mt-4 list-outside list-disc pl-5 ${montserrat.className} text-sm md:text-base`}
                >
                  <li>Have many questions and feeling unsure.</li>
                  <li>
                    Feel confused and lost in the tech maze, not knowing what to
                    choose.
                  </li>
                  <li>Need a versatile team that covers everything.</li>
                </ul>
              </div>
            </div>

            <div
              className="mt-3 flex w-full justify-center md:hidden md:opacity-0"
              id="sec-1-arrow"
            >
              <Image
                src={"/illustrations/Arrow_Down.svg"}
                alt={"Down Arrow"}
                width={40}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className="customAreaFour flex flex-col items-center md:items-start md:opacity-0"
              id="sec-1-description"
            >
              <div
                className={`my-3 justify-self-center ${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                We are the team that
              </div>
              <ul
                className={`list-outside list-disc pl-5 ${montserrat.className} text-sm md:text-base`}
              >
                <li>
                  <span className={`font-bold ${montserrat.className}`}>
                    keeps asking questions{" "}
                  </span>
                  until we understand every aspect of
                  <span className={`font-bold ${montserrat.className}`}>
                    {" "}
                    your idea
                  </span>
                  , even the ones you might not have considered.
                </li>
                <li>
                  gives you{" "}
                  <span className={`font-bold ${montserrat.className}`}>
                    brutal honesty
                  </span>
                  , no sir or madam.
                </li>
                <li>
                  uses our tech expertise to help you &quot;get it&quot; and
                  make the choices with
                  <span
                    className={`font-bold text-red-500 ${montserrat.className}`}
                  >
                    {" "}
                    you
                  </span>
                  .
                </li>
                <li className={`${montserrat.className}`}>
                  has expertise in every stage from product
                  <span className={`font-bold ${montserrat.className}`}>
                    {" "}
                    ideas
                  </span>
                  , through
                  <span className={`font-bold ${montserrat.className}`}>
                    {" "}
                    design
                  </span>{" "}
                  and
                  <span className={`font-bold ${montserrat.className}`}>
                    {" "}
                    development
                  </span>{" "}
                  to
                  <span className={`font-bold ${montserrat.className}`}>
                    {" "}
                    SEO
                  </span>{" "}
                  and
                  <span className={`font-bold ${montserrat.className}`}>
                    {" "}
                    marketing
                  </span>
                  —we&apos;ve done it all.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* |||||||||||| PLAN 2 SECTION |||||||||||| */}
        <div id="section-2" className="px-2 md:absolute md:opacity-0">
          <div className="customGridContainer flex flex-col">
            <div
              id="sec-2-label"
              className="customAreaOne absolute hidden flex-col items-center bg-black opacity-0 md:flex md:items-start md:text-white"
            >
              <div className="my-3 justify-self-center">
                <div
                  className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs uppercase`}
                >
                  With a solid plan in place lets start building!
                </div>
              </div>
              <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                <div
                  className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                >
                  02
                </div>
                <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                  PROTOTYPE
                </h1>
              </div>
            </div>
            <div
              id="sec-2-illustration"
              className="customAreaTwo flex items-center justify-center md:opacity-0"
            >
              <div className="justify-self-center">
                <Image
                  src={"/illustrations/Illustration_Prototype.png"}
                  alt={"Illustration Plan"}
                  width={170}
                  height={280}
                  style={{ objectFit: "contain" }}
                  className="h-auto w-[250px] md:w-[461px]"
                />
              </div>
            </div>
            <div
              id="sec-2-intro"
              className={`customAreaThree md:text-white md:opacity-0`}
            >
              <div className="text-xl font-bold md:text-4xl">
                <div className={`${ptSansNarrow.className} text-letter-red`}>
                  We don’t do
                </div>
              </div>
              <div
                className={`mt-2 ${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                MVPs that take years, feature bloat, overdesigned landing pages
                with 0 users.
              </div>
            </div>
            <div
              className="mt-3 flex w-full justify-center md:hidden md:opacity-0"
              id="sec-2-arrow"
            >
              <Image
                src={"/illustrations/Arrow_Down.svg"}
                alt={"Down Arrow"}
                width={40}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              id="sec-2-description"
              className="customAreaFour flex flex-col md:opacity-0"
            >
              <p
                className={`font- my-3 justify-self-center ${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                We follow a guiding principle based on years of building
                prototypes: Cut the right corners!
              </p>
              <ul
                className={`list-outside list-disc pl-5 text-left ${montserrat.className} text-sm md:text-base`}
              >
                <li className={` ${montserrat.className}`}>
                  Launch something as soon as possible
                </li>
                <li className={` ${montserrat.className}`}>
                  Say no to unnecessary features: focus on what&#39;s important
                </li>
                <li className={` ${montserrat.className}`}>
                  Get users and listen to them
                </li>
              </ul>
              {/* TECHNOLOGY BOX */}
              <div className="mt-10 max-w-sm self-center md:max-w-xl">
                <div className="mx-auto max-w-3xl text-white">
                  <div className="flex items-center justify-between rounded-t-lg border-l border-r border-t border-black bg-gray-900 p-4 text-white">
                    <Image
                      src={"/construction.svg"}
                      alt={"Tools"}
                      width={34}
                      height={34}
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                    <h2
                      className={`${ptSansNarrow.className} text-center text-2xl font-bold`}
                    >
                      Our technology toolbox
                    </h2>
                    <Image
                      src={"/construction.svg"}
                      alt={"Tools"}
                      width={34}
                      height={34}
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="grid gap-4 rounded-b-lg border border-l border-r border-black bg-white">
                    <div className="flex w-full flex-wrap justify-center gap-x-3 md:gap-x-6">
                      <Image
                        src={"/node.svg"}
                        alt={"Node"}
                        width={120}
                        height={120}
                        className="w-20 flex-shrink md:w-28"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/prosemirror.svg"}
                        alt={"Prosemirror"}
                        width={120}
                        height={120}
                        className="w-20 flex-shrink md:w-28"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/reactLogo.svg"}
                        alt={"React Logo"}
                        width={120}
                        height={120}
                        className="w-20 flex-shrink md:w-28"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div className="flex w-full flex-wrap justify-center gap-x-3 md:gap-x-6">
                      <Image
                        src={"/firebase.svg"}
                        alt={"Firebase Logo"}
                        width={120}
                        height={120}
                        className="w-20 flex-shrink md:w-28"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/aws.svg"}
                        alt={"AWS Logo"}
                        width={120}
                        height={120}
                        className="w-14 flex-shrink md:w-20"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/supabase.svg"}
                        alt={"Supabase Logo"}
                        width={120}
                        height={120}
                        className="w-20 flex-shrink md:w-28"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/openAi.svg"}
                        alt={"OpenAI Logo"}
                        width={120}
                        height={120}
                        className="w-16 flex-shrink md:w-24"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div className="flex w-full flex-wrap justify-center gap-x-3 md:gap-x-6">
                      <Image
                        src={"/yjs.svg"}
                        alt={"Yjs Logo"}
                        width={120}
                        height={120}
                        className="w-14 flex-shrink md:w-20"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/stripe.svg"}
                        alt={"Stripe Logo"}
                        width={120}
                        height={120}
                        className="w-16 flex-shrink md:w-24"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* |||||||||||| PLAN 3 SECTION |||||||||||| */}
        <div id="section-3" className="px-2 md:absolute md:opacity-0">
          <div className="customGridContainer flex flex-col">
            <div
              id="sec-3-label"
              className="customAreaOne hidden flex-col items-center md:flex md:items-start md:text-white"
            >
              <div className="my-3 justify-self-center">
                <div
                  className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs uppercase`}
                >
                  Let’s test the prototype!
                </div>
              </div>
              <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                <div
                  className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                >
                  03
                </div>
                <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                  VALIDATE
                </h1>
              </div>
            </div>
            <div
              id="sec-3-illustration"
              className="customAreaTwo flex items-center justify-center md:opacity-0"
            >
              <div className="justify-self-center">
                <Image
                  src={"/illustrations/Illustration_Validate.png"}
                  alt={"Illustration Plan"}
                  width={170}
                  height={280}
                  style={{ objectFit: "contain" }}
                  className="h-auto w-[250px] md:w-[461px]"
                />
              </div>
            </div>
            <div
              id="sec-3-intro"
              className="customAreaThree md:text-white md:opacity-0"
            >
              <div
                className={`${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                Most products fail due to a lack of validation.
              </div>
            </div>
            <div
              className="mt-3 flex w-full justify-center md:hidden md:opacity-0"
              id="sec-3-arrow"
            >
              <Image
                src={"/illustrations/Arrow_Down.svg"}
                alt={"Down Arrow"}
                width={40}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              id="sec-3-description"
              className="customAreaFour flex flex-col md:opacity-0"
            >
              <div
                className={`font- my-3 justify-self-center ${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                We will develop, deploy, test, evaluate and rebuild until
                everything works the way it should.
              </div>
              <div
                className={`my-1 ${ptSansNarrow.className} text-2xl font-bold`}
              >
                Our secret?
              </div>
              <div
                className={`text-l my-1 ${montserrat.className} font-semibold`}
              >
                Continuous delivery
              </div>
              <div className={`text-l mb-5 ${montserrat.className}`}>
                Every change we make is instantly visible, allowing for
                continuous and quick feedback from you and from the users. By
                taking small, deliberate steps, we ensure steady progress
                towards a successful product.
              </div>
              <div
                className={`text-l my-1 ${montserrat.className} font-semibold`}
              >
                Continuous feedback
              </div>
              <div className={`text-l mb-5 ${montserrat.className}`}>
                Your insights, combined with real user feedback, help us uncover
                the missing links: keeping you in the loop and picking your
                brain to make sure we don&#39;t skip over details.
              </div>
              <div className="mx-auto w-full max-w-2xl rounded-lg border border-gray-300 md:text-white">
                <div className="flex items-center justify-between bg-white px-4 py-4">
                  <Image
                    src={"/rule-star.svg"}
                    alt={"Star"}
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                  />
                  <h2
                    className={`${ptSansNarrow.className} text-xl font-bold text-black md:text-4xl`}
                  >
                    Rules of the game
                  </h2>
                  <Image
                    src={"/rule-star.svg"}
                    alt={"Star"}
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="grid grid-cols-1 grid-rows-7 gap-y-6 bg-black p-3">
                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      FIT
                    </div>
                    <div
                      className={`flex-3 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      Don&#39;t under or over-engineer – Create the right
                      solution for the right stage
                    </div>
                  </div>
                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      RESOLVE
                    </div>
                    <div
                      className={`col-span-2 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      The right problem – Find the root cause (and fix that)
                    </div>
                  </div>

                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      REFLECT
                    </div>
                    <p
                      className={`col-span-2 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      If something doesn’t go as planned → STOP and think
                    </p>
                  </div>

                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      ITERATE
                    </div>
                    <p
                      className={`col-span-2 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      No month long expeditions - The quicker the loop the
                      better
                    </p>
                  </div>
                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      PARALLELIZE
                    </div>
                    <p
                      className={`col-span-2 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      Don’t get stuck on one thing - Run multiple loops at once.
                    </p>
                  </div>

                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      FOCUS
                    </div>
                    <p
                      className={`w col-span-2 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      Don&#39;t get lost in details - Get moving
                    </p>
                  </div>
                  <div className="flex w-full gap-3">
                    <div
                      className={`md:1/6 ${ptSans.className} flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-bold text-black`}
                    >
                      INDEPENDENCE
                    </div>
                    <p
                      className={`col-span-2 flex w-2/3 ${montserrat.className} md:w-8/12`}
                    >
                      No micromanagement - Everyone should be able to make
                      decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* |||||||||||| PLAN 4 SECTION |||||||||||| */}
        <div id="section-4" className="px-2 md:absolute md:opacity-0">
          <div className="customGridContainer flex flex-col">
            <div
              id="sec-4-label"
              className="customAreaOne hidden flex-col items-center md:flex md:items-start md:text-white"
            >
              <div className="my-3 justify-self-center">
                <div
                  className={`${ptSans.className} w-fit rounded-full bg-gray-700 px-4 py-2 text-xs uppercase`}
                >
                  Let&#39;s press the launch button. Shall we?:D
                </div>
              </div>
              <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                <div
                  className={`mr-4 w-fit bg-letter-background bg-clip-text ${ptSansNarrow.className} font-bold text-transparent`}
                >
                  04
                </div>
                <h1 className={`${ptSansNarrow.className} font-extrabold`}>
                  PRODUCT
                </h1>
              </div>
            </div>
            <div
              id="sec-4-illustration"
              className="customAreaTwo flex items-center justify-center md:opacity-0"
            >
              <div className="justify-self-center">
                <Image
                  src={"/illustrations/Product.png"}
                  alt={"Illustration Plan"}
                  width={170}
                  height={280}
                  style={{ objectFit: "contain" }}
                  className="h-auto w-[250px] md:w-[461px]"
                />
              </div>
            </div>
            <div
              id="sec-4-intro"
              className="customAreaThree md:text-white md:opacity-0"
            >
              <div
                className={`${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                We did it! The product launch was successful.
              </div>
              <div className={`${montserrat.className}`}>
                There are users, and some revenue also, now we just need to
                maintain, add more features and scale the business to infinity
                and beyond.
              </div>
            </div>
            <div className="mt-3 flex w-full justify-center md:hidden md:opacity-0">
              <Image
                src={"/illustrations/Arrow_Down.svg"}
                alt={"Down Arrow"}
                width={40}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              id="sec-4-description"
              className="customAreaFour flex flex-col md:opacity-0"
            >
              <div
                className={`font- my-3 justify-self-center ${ptSansNarrow.className} text-xl font-bold md:text-4xl`}
              >
                So, what was the lesson of the story?
                <br />
                Was it the journey itself? <br /> The success at the end?
                <br />
                Or maybe it was the friends we made along the way? :D
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwJoinUsColumns;
