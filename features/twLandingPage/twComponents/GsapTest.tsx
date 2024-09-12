import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const ColoredSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#gsapContainer", // The container that triggers the animation
            start: "top top", // When the top of gsapContainer hits the top of the viewport
            end: "+=5000",
            pin: "#outerDiv", // Pin the container in place
            // pinSpacing: false,
            scrub: 1, // Smoothly scrub through the animation timeline as you scroll
            markers: true, // Remove this in production, used to debug
          },
          defaults: { duration: 1 },
        })
        .to("#sec1", { opacity: 1 })
        .to("#sec1", { opacity: 0, delay: 0.5 })
        .to("#sec2", { opacity: 1 })
        .to("#sec2", { opacity: 0, delay: 0.5 })
        .to("#sec3", { opacity: 1 })
        .to("#sec3", { opacity: 0, delay: 0.5 })
        .to("#sec4", { opacity: 1 });
    });
  }, []);

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
      <div id="outerDiv" className="w-full">
        asd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
        sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d
        a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
        d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
        as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
        asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as
        d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
        as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
        asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s
        d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
        s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d
        a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as
        d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
        as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
        sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d
        a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
        d a sdasd as d a s d asd as d asd as d a sds d a s d asd as d asd as d a
        sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d
        a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
        d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
        as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
        asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as
        d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
        as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
        asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s
        d asd as d asd as d a sdasd as d a s d asd as d asd as d a sds d a s d
        asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s
        d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
        s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d
        a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as
        d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
        as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
        sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d
        a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
        d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
        as d a sds d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
        d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
        as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
        asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as
        d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
        as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
        asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s
        d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
        s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d
        a s d asd as d asd as d a sd
        <div
          id={"gsapContainer"}
          className="containerGsap relative z-20 h-[800px] w-screen"
        >
          <div
            id={"sec1"}
            className="section absolute h-[600px] w-full bg-red-500 opacity-0"
          >
            <div className="customGridContainer flex flex-col">
              <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
                <div className="my-3 justify-self-center">
                  <div className="w-fit rounded-full bg-gray-700 px-4 py-2 font-pt-sans text-xs">
                    YOU HAVE AN IDEA, LET&#39;S PLAN TOGETHER!
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div className="mr-4 w-fit bg-letter-background bg-clip-text font-pt-sans-narrow font-bold text-transparent">
                    01
                  </div>
                  <h1 className="font-pt-sans-narrow font-extrabold">PLAN</h1>
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
                <p className="text-center font-pt-sans-narrow text-xl font-bold md:text-left md:text-4xl">
                  You come to the right place if you
                </p>
                <div className="flex flex-col">
                  <ul className="mt-4 list-outside list-disc pl-5 font-montserrat text-sm md:text-base">
                    <li>Have many questions and feeling unsure.</li>
                    <li>
                      Feel confused and lost in the tech maze, not knowing what
                      to choose.
                    </li>
                    <li>Need a versatile team that covers everything.</li>
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
                <div className="my-3 justify-self-center font-pt-sans-narrow text-xl font-bold md:text-4xl">
                  We are the team that
                </div>
                <ul className="list-outside list-disc pl-5 font-montserrat text-sm md:text-base">
                  <li>
                    <span className="font-bold">keeps asking questions</span>
                    until we understand every aspect of
                    <span className="font-bold"> your idea</span>, even the ones
                    you might not have considered.
                  </li>
                  <li>
                    gives you <span className="font-bold">brutal honesty</span>,
                    no sir or madam.
                  </li>
                  <li>
                    uses our tech expertise to help you &quot;get it&quot; and
                    make the choices with
                    <span className="font-bold text-red-500"> you</span>.
                  </li>
                  <li className="font-montserrat">
                    has expertise in every stage from product{" "}
                    <span className="font-bold">ideas</span>, through{" "}
                    <span className="font-bold">design</span> and
                    <span className="font-bold"> development</span> to{" "}
                    <span className="font-bold">SEO</span> and
                    <span className="font-bold"> marketing</span>—we&apos;ve
                    done it all.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id={"sec2"}
            className="section absolute h-[600px] w-full bg-green-500 opacity-0"
          >
            <div className="customGridContainer flex flex-col">
              <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
                <div className="my-3 justify-self-center">
                  <div className="w-fit rounded-full bg-gray-700 px-4 py-2 font-pt-sans text-xs uppercase">
                    With a solid plan in place lets start building!
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div className="mr-4 w-fit bg-letter-background bg-clip-text font-pt-sans-narrow font-bold text-transparent">
                    02
                  </div>
                  <h1 className="font-pt-sans-narrow font-extrabold">
                    PROTOTYPE
                  </h1>
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
                <div className="text-xl font-bold md:text-4xl">
                  <div className="font-pt-sans-narrow text-letter-red">
                    We don’t do
                  </div>
                </div>
                <div className="mt-2 font-pt-sans-narrow text-xl font-bold md:text-4xl">
                  MVPs that take years, feature bloat, overdesigned landing
                  pages with 0 users.
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
                <p className="font- my-3 justify-self-center font-pt-sans-narrow text-xl font-bold md:text-4xl">
                  We follow a guiding principle based on years of building
                  prototypes: Cut the right corners!
                </p>
                <ul className="list-outside list-disc pl-5 text-left font-montserrat text-sm md:text-base">
                  <li>Launch something as soon as possible</li>
                  <li>
                    Say no to unnecessary features: focus on what&#39;s
                    important
                  </li>
                  <li>Get users and listen to them</li>
                </ul>
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
                      <h2 className="font-pt-sans-narrow text-2xl font-bold">
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
                    <div className="grid gap-4 rounded-b-lg border border-l border-r border-black bg-white p-2">
                      <div className="flex justify-center">
                        <div className="§gap-4 grid grid-cols-3">
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
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-4">
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
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-4">
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
          </div>
          <div
            id={"sec3"}
            className="section absolute h-[600px] w-full bg-blue-500 opacity-0"
          >
            <div className="customGridContainer flex flex-col">
              <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
                <div className="my-3 justify-self-center">
                  <div className="w-fit rounded-full bg-gray-700 px-4 py-2 font-pt-sans text-xs uppercase">
                    Let’s test the prototype!
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div className="mr-4 w-fit bg-letter-background bg-clip-text font-pt-sans-narrow font-bold text-transparent">
                    03
                  </div>
                  <h1 className="font-pt-sans-narrow font-extrabold">
                    VALIDATE
                  </h1>
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
                <div className="font-pt-sans-narrow text-xl font-bold md:text-4xl">
                  Most products fail due to a lack of validation.
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
                <div className="font- my-3 justify-self-center font-pt-sans-narrow text-xl font-bold md:text-4xl">
                  We will develop, deploy, test, evaluate and rebuild until
                  everything works the way it should.
                </div>
                <div className="my-1 font-pt-sans-narrow text-2xl font-bold">
                  Our secret?
                </div>
                <div className="text-l my-1 font-montserrat font-semibold">
                  Continuous delivery
                </div>
                <div className="text-l mb-5 font-montserrat">
                  Every change we make is instantly visible, allowing for
                  continuous and quick feedback from you and from the users. By
                  taking small, deliberate steps, we ensure steady progress
                  towards a successful product.
                </div>
                <div className="text-l my-1 font-montserrat font-semibold">
                  Continuous feedback
                </div>
                <div className="text-l mb-5 font-montserrat">
                  Your insights, combined with real user feedback, help us
                  uncover the missing links: keeping you in the loop and picking
                  your brain to make sure we don&#39;t skip over details.
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
                    <h2 className="font-pt-sans-narrow text-xl font-bold text-black md:text-4xl">
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
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        FIT
                      </div>
                      <div className="flex-3 flex w-2/3 font-montserrat md:w-8/12">
                        Don&#39;t under or over-engineer – Create the right
                        solution for the right stage
                      </div>
                    </div>
                    <div className="flex w-full gap-3">
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        RESOLVE
                      </div>
                      <div className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                        The right problem – Find the root cause (and fix that)
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        REFLECT
                      </div>
                      <p className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                        If something doesn’t go as planned → STOP and think
                      </p>
                    </div>

                    <div className="flex w-full gap-3">
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        ITERATE
                      </div>
                      <p className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                        No month long expeditions - The quicker the loop the
                        better
                      </p>
                    </div>
                    <div className="flex w-full gap-3">
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        PARALLELIZE
                      </div>
                      <p className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                        Don’t get stuck on one thing - Run multiple loops at
                        once.
                      </p>
                    </div>

                    <div className="flex w-full gap-3">
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        FOCUS
                      </div>
                      <p className="w col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                        Don&#39;t get lost in details - Get moving
                      </p>
                    </div>
                    <div className="flex w-full gap-3">
                      <div className="md:1/6 flex h-6 w-1/3 justify-center rounded-full bg-yellow-500 font-pt-sans font-bold text-black">
                        INDEPENDENCE
                      </div>
                      <p className="col-span-2 flex w-2/3 font-montserrat md:w-8/12">
                        No micromanagement - Everyone should be able to make
                        decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id={"sec4"}
            className="section absolute h-[600px] w-full bg-yellow-500 opacity-0"
          >
            <div className="customGridContainer flex flex-col">
              <div className="customAreaOne flex flex-col items-center md:items-start md:text-white">
                <div className="my-3 justify-self-center">
                  <div className="w-fit rounded-full bg-gray-700 px-4 py-2 font-pt-sans text-xs uppercase">
                    Let&#39;s press the launch button. Shall we?:D
                  </div>
                </div>
                <div className="my-3 flex items-center justify-self-center text-4xl md:flex-col md:items-start md:text-7xl">
                  <div className="mr-4 w-fit bg-letter-background bg-clip-text font-pt-sans-narrow font-bold text-transparent">
                    04
                  </div>
                  <h1 className="font-pt-sans-narrow font-extrabold">
                    PRODUCT
                  </h1>
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
              <div className="customAreaThree md:text-white">
                <div className="font-pt-sans-narrow text-xl font-bold md:text-4xl">
                  We did it! The product launch was successful.
                </div>
                <div className="font-montserrat">
                  There are users, and some revenue also, now we just need to
                  maintain, add more features and scale the business to infinity
                  and beyond.
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
                <div className="font- my-3 justify-self-center font-pt-sans-narrow text-xl font-bold md:text-4xl">
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
        <div>
          a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
          as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
          sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
          d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
          as d a sdasd as d a s d asd as d asd as d a sds d a s d asd as d asd
          as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
          asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
          as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
          asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
          s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as
          d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
          as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
          sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
          d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
          as d a sds d a s d asd as d asd as d a sdasd as d a s d asd as d asd
          as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
          asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
          as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
          asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
          s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as
          d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
          as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
          sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
          d a sdasd as d a s d asd as d asd as d a sd a s d asd as d asd as d a
          sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
          d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
          as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
          asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
          as d asd as d a sds d a s d asd as d asd as d a sdasd as d a s d asd
          as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
          asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
          s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as
          d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
          as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
          sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
          d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
          as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
          asd as d a sdasd as d a s d asd as d asd as d a sds d a s d asd as d
          asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd
          as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d
          asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as d a
          s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd as
          d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a sdasd
          as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as d a
          sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd as
          d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d asd
          as d a sdasd as d a s d asd as d asd as d a sdasd as d a s d asd as d
          asd as d a sd
        </div>
      </div>
    </>
  );
};

export default ColoredSections;
