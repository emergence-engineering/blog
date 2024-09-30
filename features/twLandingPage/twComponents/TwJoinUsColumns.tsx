import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { scrollToContact } from "../utils/scrollToContact";
import TwAccordion from "./TwAccordion";
import { Button } from "./Button";

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
      <div className="blackWhiteBgSplit font-pt-sans-narrow relative grid flex-grow grid-cols-1 gap-[100px] bg-black pb-20 pt-10 text-white sm:max-w-[540px] md:max-w-[720px] md:pb-40 md:text-black lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="hidden lg:absolute lg:left-1/2 lg:top-[17rem] lg:block lg:-translate-x-1/2 lg:transform">
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="hidden lg:absolute lg:left-1/2 lg:top-[54em] lg:block lg:-translate-x-1/2 lg:transform">
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="hidden lg:absolute lg:left-1/2 lg:top-[99rem] lg:block lg:-translate-x-1/2 lg:transform">
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="hidden lg:absolute lg:left-1/2 lg:top-[187rem] lg:block lg:-translate-x-1/2 lg:transform">
          <Image
            src={"/illustrations/Arrow_Right.svg"}
            alt={"Right Arrow"}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="customGridContainer flex flex-col">
          <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
            <div className="my-3 justify-self-center">
              <div className="bg-tagGray w-fit rounded-full px-4 py-2 font-sans text-xs uppercase">
                YOU HAVE AN IDEA, LET&#39;S PLAN TOGETHER!
              </div>
            </div>
            <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
              <div className="mr-4 w-fit bg-letter-background bg-clip-text font-bold text-transparent">
                01
              </div>
              <h1 className="font-extrabold">PLAN</h1>
            </div>
          </div>
          <div className="customAreaTwo flex items-center justify-center">
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
          <div className="customAreaThree md:text-white">
            <p className="text-center text-xl font-bold md:text-left md:text-4xl">
              You come to the right place if you need:
            </p>
            <div className="flex flex-col">
              <ul className="mt-4 list-outside list-disc pl-5 text-sm md:text-base">
                <li className="font-montserrat">web application</li>
                <li className="font-montserrat">payment or fintech solution</li>
                <li className="font-montserrat">AI development</li>
                <li className="font-montserrat">cloud service solution</li>
                <li className="font-montserrat">
                  collaborative rich text editor
                </li>
                <li className="font-montserrat">
                  versatile team that covers it all
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 flex w-full justify-center md:hidden">
            <Image
              src={"/illustrations/Arrow_Down.svg"}
              alt={"Down Arrow"}
              width={40}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="customAreaFour flex flex-col items-center md:items-start">
            <div className="my-3 justify-self-center text-xl font-bold md:text-4xl">
              Why us?
            </div>
            <TwAccordion />
          </div>
        </div>
        {/* |||||||||||| PLAN 2 SECTION |||||||||||| */}
        <div className="customGridContainer flex flex-col">
          <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
            <div className="my-3 justify-self-center">
              <div className="bg-tagGray w-fit rounded-full px-4 py-2 font-sans text-xs uppercase">
                With a solid plan in place lets start building!
              </div>
            </div>
            <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
              <div className="mr-4 w-fit bg-letter-background bg-clip-text font-bold text-transparent">
                02
              </div>
              <h1 className="font-extrabold">PROTOTYPE</h1>
            </div>
          </div>
          <div className="customAreaTwo flex items-center justify-center">
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
          <div className={`customAreaThree md:text-white`}>
            <div className="mt-2 text-xl font-bold md:text-4xl">
              Hold your app in your hands for the first time
            </div>
          </div>
          <div className="mt-3 flex w-full justify-center md:hidden">
            <Image
              src={"/illustrations/Arrow_Down.svg"}
              alt={"Down Arrow"}
              width={40}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="customAreaFour flex flex-col gap-4">
            <p className="justify-self-center text-xl font-bold md:text-4xl">
              How we build:
            </p>
            <div className="md:text-descriptionGray font-montserrat text-white">
              With extensive experience building MVPs and robust web
              applications, our team takes on back-end, front-end, and DevOps
              responsibilities. We can continue working with your existing
              codebase or help plan a new greenfield project. Partners can rely
              on us to guide them in making well-informed technical decisions,
              always focusing on finding the best technologies for each
              product’s stage and goals.
            </div>
            <div className="md:text-descriptionGray font-montserrat text-white">
              Getting users onboard early is a priority! We focus on what truly
              matters to launch as soon as possible. By concentrating on the
              essentials, we can move swiftly to validation and repeat the
              development cycle.
            </div>
            {/* TECHNOLOGY BOX */}
            <div className="mt-10 w-full">
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
                  <h2 className="text-2xl font-bold">Our technology toolbox</h2>
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
                <div className="grid gap-4 rounded-b-lg border border-l border-r border-black bg-white p-2">
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src={"/node.svg"}
                        alt={"Node"}
                        width={120}
                        height={120}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/prosemirror.svg"}
                        alt={"prosemirror"}
                        width={120}
                        height={120}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-4">
                      <Image
                        src={"/reactLogo.svg"}
                        alt={"React Logo"}
                        width={110}
                        height={110}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/firebase.svg"}
                        alt={"Firebase Logo"}
                        width={120}
                        height={120}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/aws.svg"}
                        alt={"Aws Logo"}
                        width={58}
                        height={58}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-4">
                      <Image
                        src={"/supabase.svg"}
                        alt={"Supabase Logo"}
                        width={110}
                        height={110}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/openAi.svg"}
                        alt={"OpenAi Logo"}
                        width={94}
                        height={94}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      <Image
                        src={"/yjs.svg"}
                        alt={"Yjs Logo"}
                        width={58}
                        height={58}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-4">
                      <Image
                        src={"/stripe.svg"}
                        alt={"Stripe Logo"}
                        width={78}
                        height={78}
                        style={{
                          width: "auto",
                          height: "auto",
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
        <div className="customGridContainer flex flex-col">
          <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
            <div className="my-3 justify-self-center">
              <div className="bg-tagGray w-fit rounded-full px-4 py-2 font-sans text-xs uppercase">
                Let’s test the prototype!
              </div>
            </div>
            <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
              <div className="mr-4 w-fit bg-letter-background bg-clip-text font-bold text-transparent">
                03
              </div>
              <h1 className="font-extrabold">VALIDATION</h1>
            </div>
          </div>
          <div className={`customAreaTwo flex items-center justify-center`}>
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
          <div className="customAreaThree md:text-white">
            <div className="text-xl font-bold md:text-4xl">
              We will develop, deploy, test, evaluate and rebuild until
              everything works the way it should.
            </div>
          </div>
          <div className="mt-3 flex w-full justify-center md:hidden">
            <Image
              src={"/illustrations/Arrow_Down.svg"}
              alt={"Down Arrow"}
              width={40}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="customAreaFour flex flex-col">
            <div className="my-3 justify-self-center text-xl font-bold md:text-4xl">
              How we guarantee success:
            </div>
            <div className="my-1 font-montserrat font-semibold text-white md:text-custom-charcoal">
              Continuous delivery
            </div>
            <div className="mb-5 font-montserrat text-white md:text-custom-charcoal">
              Every change we make in the code will be instantly visible,
              allowing for continuous, quick feedback from you and from the
              users. We also place a lot of emphasis on collaboration and
              communication between the operations team and dev team. By taking
              small, deliberate steps, we ensure steady progress towards a high
              performant web application.
            </div>
            <div className="my-1 font-montserrat font-semibold text-white md:text-custom-charcoal">
              Continuous feedback
            </div>
            <div className="mb-5 font-montserrat text-white md:text-custom-charcoal">
              We build on rigorous performance testing and user feedback. With
              many years of experience in test automation we consistently
              monitor the performance of our work. Persistent testing, combined
              with your insights and real user feedback, helps us uncover the
              missing links and potential weak spots.
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
                <h2 className="text-xl font-bold text-black md:text-4xl">
                  The rules we play by:
                </h2>
                <Image
                  src={"/rule-star.svg"}
                  alt={"Star"}
                  width={34}
                  height={34}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="grid grid-cols-1 grid-rows-5 gap-y-6 bg-black p-3">
                <div className="flex w-full gap-3">
                  <div className="flex h-6 w-1/3 items-center justify-center rounded-full bg-yellow-500 font-sans text-xs font-bold text-black">
                    FIT
                  </div>
                  <div className="flex-3 flex w-2/3 font-montserrat md:w-8/12">
                    Don&apos;t under or over-engineer, build the right solution
                    for the right stage
                  </div>
                </div>
                <div className="flex w-full gap-3">
                  <div className="flex h-6 w-1/3 items-center justify-center rounded-full bg-yellow-500 font-sans text-xs font-bold text-black">
                    REFLECT
                  </div>
                  <div className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                    If something doesn’t go as planned take time to STOP and
                    think
                  </div>
                </div>
                <div className="flex w-full gap-3">
                  <div className="flex h-6 w-1/3 items-center justify-center rounded-full bg-yellow-500 font-sans text-xs font-bold text-black">
                    RESOLVE
                  </div>
                  <div className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                    Find the root cause of problems and fix that instead of the
                    symptoms
                  </div>
                </div>

                <div className="flex w-full gap-3">
                  <div className="flex h-6 w-1/3 items-center justify-center rounded-full bg-yellow-500 font-sans text-xs font-bold text-black">
                    OPTIMIZE
                  </div>
                  <div className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                    Run multiple things at once, the quicker the feedback loop
                    the better
                  </div>
                </div>
                <div className="flex w-full gap-3">
                  <div className="flex h-6 w-1/3 items-center justify-center rounded-full bg-yellow-500 font-sans text-xs font-bold text-black">
                    FOCUS
                  </div>
                  <div className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                    Don&apos;t get lost in details make sure to keep moving
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* |||||||||||| PLAN 4 SECTION |||||||||||| */}
        <div className="customGridContainer flex flex-col">
          <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
            <div className="my-3 justify-self-center">
              <div className="bg-tagGray w-fit rounded-full px-4 py-2 font-sans text-xs uppercase">
                Let&#39;s press the launch button. Shall we?:D
              </div>
            </div>
            <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
              <div className="mr-4 w-fit bg-letter-background bg-clip-text font-bold text-transparent">
                04
              </div>
              <h1 className="font-extrabold">PRODUCT</h1>
            </div>
          </div>
          <div className="customAreaTwo flex items-center justify-center">
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
          <div className="customAreaThree flex flex-col gap-4 md:text-white">
            <div className="text-xl font-bold md:text-4xl">
              We did it! The product launch was successful.
            </div>
            <div className="font-montserrat">
              Congratulations! You have users and are also generating some
              revenue. Now we just need to maintain, add more features and scale
              the business to infinity and beyond.
            </div>
            <Button
              label={"Launch"}
              theme={"primary"}
              handleClick={scrollToContact}
            />
          </div>
          <div className="mt-3 flex w-full justify-center md:hidden">
            <Image
              src={"/illustrations/Arrow_Down.svg"}
              alt={"Down Arrow"}
              width={40}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="customAreaFour flex flex-col">
            <div className="font- my-3 justify-self-center text-xl font-bold md:text-4xl">
              So, what was the lesson of the story?
              <br />
              <br />
              Was it the journey itself? The success at the end? Or maybe it was
              the friends we made along the way.....
            </div>
            <Link href="/references" className="mt-4 self-start">
              <Button label="References" theme="tertiary" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwJoinUsColumns;
