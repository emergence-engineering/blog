import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";
import theme, { sizes } from "../../../utils/theme";
import Idea from "../../../public/lp/idea.png";
import Plan from "../../../public/lp/plan.png";
import Prototype from "../../../public/lp/prototype.png";
import Validation from "../../../public/lp/validation.png";
import Product from "../../../public/lp/product.png";
import Handshake from "../../../public/lp/handshake.png";
import Rollercoaster from "../../../public/lp/rollercoaster.png";
import ProseMirror from "../../../public/lp/prosemirror.png";
import AiDev from "../../../public/lp/aidev.png";
import Collab from "../../../public/lp/collab.png";
import Marketing from "../../../public/lp/marketing.png";
import Payment from "../../../public/lp/payment.png";
import SoftwareDev from "../../../public/lp/softwareDev.png";
import RichText from "../../../public/lp/richtext.png";
import Lex from "../../../public/lp/Lex.png";

import NodeJS from "../../../public/lp/nodejs.svg";
import Firebase from "../../../public/lp/firebase.svg";
import AWS from "../../../public/lp/aws.svg";
import ReactLogo from "../../../public/lp/react.svg";
import Stripe from "../../../public/lp/stripe.svg";
import Supabase from "../../../public/lp/supabase.svg";
import OpenAI from "../../../public/lp/openai.svg";
import YJS from "../../../public/lp/yjs.svg";

import { HeaderLink } from "../../common/components/Header";
import References from "./References";

export const RootWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: ${theme.color.white};
`;

export const Root = styled.div`
  flex: 1;
  max-width: 50rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
  padding: 4rem ${sizes.sidePadding};
`;

export const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
  text-decoration: underline;
  text-decoration-color: ${theme.color.tertiary};
`;

export const SubTitle = styled.h2`
  color: ${theme.color.gray1};
`;

export const Paragraph = styled.p`
  text-align: left;
  text-wrap: pretty;
  align-self: stretch;
`;

export const SixByTwoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 10rem;
  position: relative;
  flex-direction: column;
`;

export const GridItemTitle = styled.h3`
  margin-top: 0;
`;

export const GridItemDescription = styled.p`
  text-wrap: pretty;
  margin-top: 0;
  position: relative;
`;

const ColumnedRoot = styled.div`
  width: 100%;
  display: flex;
  max-width: 50rem;
`;

const WhatWeCanLeftSide = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`;

const WhatWeCanContent = styled.div`
  display: flex;
  flex: 2;
  li {
    margin-bottom: 0.5rem;
    text-wrap: pretty;
  }
`;

const WhatWeCanTitle = styled(SectionTitle)`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  font-size: 1.5rem;
  color: ${theme.color.tertiary};
`;

const StepsFlowchart = styled.div`
  display: flex;
  justify-content: center;
  //text-decoration: underline;
  position: relative;
  align-items: center;
`;

const StepFlowchartItem = styled.div`
  position: relative;
`;

const StepFlowchartContent = styled.div`
  position: absolute;
  bottom: 0.5rem;
  width: 100%;
  text-align: center;
`;

const TechList = styled.div`
  display: flex;
  //align-items: center;
  width: 100%;
  height: 10rem;
  flex-wrap: wrap;
`;

const TechListItem = styled.div<{ height?: number }>`
  height: ${(props) => props.height || 3}rem;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CrossroadRoot = styled.div`
  display: flex;
  position: relative;
`;

const CrossroadSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 2;
`;

export const Section1: FunctionComponent = () => (
  <RootWrapper>
    <Root>
      <SectionTitle>What we do</SectionTitle>
      <SixByTwoGrid>
        <GridItem>
          <Image
            src={SoftwareDev}
            alt="software development illustration"
            width={200}
          />
          <GridItemTitle>Software development</GridItemTitle>
          <GridItemDescription>From idea to product.</GridItemDescription>
        </GridItem>
        <GridItem>
          <Image
            src={RichText}
            alt="rich text editor illustration"
            width={200}
          />
          <GridItemTitle>Rich Text editors</GridItemTitle>
          <GridItemDescription>
            the next Google docs or a great input for a chat: we got you
            covered.
          </GridItemDescription>
          <Link
            href="/prosemirror"
            style={{ position: "absolute", right: 0, bottom: 0 }}
          >
            more
          </Link>
        </GridItem>
        <GridItem>
          <Image src={Payment} alt="payment system illustration" width={200} />
          <GridItemTitle>Payment systems</GridItemTitle>
          <GridItemDescription>
            The cure for your subscription, coupon and tax issues.
          </GridItemDescription>
        </GridItem>
        <GridItem>
          <Image
            src={Marketing}
            alt="PPC & Marketing illustration"
            width={200}
          />
          <GridItemTitle>PPC & Marketing</GridItemTitle>
          <GridItemDescription>
            get the word out the easy way.
          </GridItemDescription>
        </GridItem>
        <GridItem>
          <Image src={AiDev} alt="AI development illustration" width={200} />
          <GridItemTitle>AI development</GridItemTitle>
          <GridItemDescription>
            Create products that feel like magic.
          </GridItemDescription>
        </GridItem>
        <GridItem>
          <Image
            src={Collab}
            alt="collaborative UIs illustration"
            width={200}
          />
          <GridItemTitle>Collaborative UIs with YJS </GridItemTitle>
          <GridItemDescription>
            Katy and Matt editing the same page? Not a problem in our world.
          </GridItemDescription>
        </GridItem>
      </SixByTwoGrid>
      <SectionTitle>Our Journey Together</SectionTitle>
      <Paragraph style={{ textAlign: "center" }}>
        Hey, so you have an idea that will change the world?
        <br />
        Not sure how to take your idea from concept to reality? <br />
        You need a team that will be fully committed.
      </Paragraph>
      <Paragraph style={{ textAlign: "center" }}>
        Join us on a journey and let us take you on a winding, exciting path
        that leads to successful product.
      </Paragraph>
      <StepsFlowchart>
        <StepFlowchartItem>
          <Image alt="TODO" src={Idea} width={150} />
          <StepFlowchartContent>Idea (you are here)</StepFlowchartContent>
        </StepFlowchartItem>
        &rarr;
        <StepFlowchartItem>
          <Image alt="TODO" src={Plan} width={150} />
          <StepFlowchartContent>Plan</StepFlowchartContent>
        </StepFlowchartItem>
        &rarr;
        <StepFlowchartItem>
          <Image alt="TODO" src={Prototype} width={150} />
          <StepFlowchartContent>Prototype</StepFlowchartContent>
        </StepFlowchartItem>
        &rarr;
        <StepFlowchartItem>
          <Image alt="TODO" src={Validation} width={150} />
          <StepFlowchartContent>Validation</StepFlowchartContent>
        </StepFlowchartItem>
        &rarr;
        <StepFlowchartItem>
          <Image alt="TODO" src={Product} width={150} />
          <StepFlowchartContent> Product(clickable)</StepFlowchartContent>
        </StepFlowchartItem>
      </StepsFlowchart>
      <SectionTitle>Plan:</SectionTitle>
      <Paragraph style={{ textAlign: "center" }}>
        You came with an idea, lets plan together.
        <br />
        What's the product? What are the challenges? Who are users? <br />{" "}
        <br />
        Are there more questions you are still not sure about?
        <br />
        Or confused and lost about tech, don&#x27;t know what to pick?
        <br />
        You need a team that is not only good at one thing but can cover
        everything?
      </Paragraph>
      <ColumnedRoot>
        <WhatWeCanLeftSide>
          <Image src={Handshake} alt={"handshake"} width="200" />
          <WhatWeCanTitle>What we can promise you:</WhatWeCanTitle>
        </WhatWeCanLeftSide>
        <WhatWeCanContent>
          <ul>
            <li>
              We won’t stop asking questions until we understand every aspect of
              your idea, maybe even the ones you haven’t thought about.
            </li>
            <li>
              From product ideas trough design and development to SEO and
              marketing: We&#x27;ve done them all.
            </li>
            <li>Brutal honesty, no sir or madam.</li>
            <li>
              As tech experts we&#x27;ll help you &quot;get it&quot; and make
              the choices with you.
            </li>
          </ul>
        </WhatWeCanContent>
      </ColumnedRoot>
      <SectionTitle>Prototype:</SectionTitle>
      <Image alt="TODO" src={Rollercoaster} width={400} />
      <Paragraph>
        Now that we have a plan lets start building!
        <br /> <br />
        Building a new product is a bit scary. <br /> But it also can be fun!
        We&#x27;ll be with you on this rollercoaster.
      </Paragraph>
      <SubTitle>
        What we&apos;ve learned while building many prototypes over the years?
      </SubTitle>
      <CrossroadRoot>
        <CrossroadSide>
          <SectionTitle>NOT</SectionTitle>
          <Paragraph>
            MVPs that take years, feature bloat, overdesigned landing pages with
            0 users.
            <br />
            {/*Not how we like to do things.*/}
          </Paragraph>
        </CrossroadSide>
        <CrossroadSide>
          <ul>
            <li>Launch something as soon as possible</li>
            <li>
              Say no to unnecessary features: focus on what&#x27;s important
            </li>
            <li>Get users and listen to them</li>
            <li>In short: cut the right corners</li>
          </ul>
        </CrossroadSide>
      </CrossroadRoot>
      <Paragraph>
        We&#x27;ll help you avoid pitfalls and be there with you on the hard
        journey of building a product.
        <br /> It&#x27;s important to change one&#x27;s mindset as a product
        matures: scrappiness and structure have their place, but can hurt if
        used at the wrong time.
      </Paragraph>
      <SubTitle>What we use:</SubTitle>
      <TechList>
        <TechListItem>
          <Image
            alt="NodeJS logo"
            src={NodeJS}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem>
          <Image
            alt="ProseMirror logo"
            src={ProseMirror}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem>
          <Image
            alt="React logo"
            src={ReactLogo}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem height={1.8}>
          <Image
            alt="AWS logo"
            src={AWS}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem>
          <Image
            alt="Firebase logo"
            src={Firebase}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem>
          <Image
            alt="Supabase logo"
            src={Supabase}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem>
          <Image
            alt="OpenAI logo"
            src={OpenAI}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem height={2}>
          <Image
            alt="YJS logo"
            src={YJS}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
        <TechListItem>
          <Image
            alt="Stripe logo"
            src={Stripe}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </TechListItem>
      </TechList>
      <SectionTitle>Validation:</SectionTitle>
      <Paragraph>
        This is the most overlooked but most important step of the process. Most
        products fail due to a lack of validation. This is why we won’t let this
        happen. We will develop, deploy, test, evaluate and rebuild until
        everything works the way it should.
      </Paragraph>
      <SubTitle>How we work:</SubTitle>
      <ColumnedRoot>
        <WhatWeCanLeftSide>
          <Paragraph>
            Continuous delivery &rarr; You&#x27;ll see progress every day
          </Paragraph>
          <ul>
            <li>
              The changes made will be visible instantly &rarr; quick feedback
            </li>
            <li>Small steps &rarr; make sure we go towards the right thing.</li>
          </ul>
        </WhatWeCanLeftSide>
        <WhatWeCanLeftSide>
          <Paragraph>
            Continuous feedback &rarr; change course if necessary
          </Paragraph>
          <ul>
            <li>Feedback from you + feedback from real users</li>
            <li>
              Find the missing links: keep you in the loop, pick your brain to
              make sure we don&#x27;t skip over details
            </li>
          </ul>
        </WhatWeCanLeftSide>
      </ColumnedRoot>
      <SubTitle>Rules of the game</SubTitle>
      <ol>
        <li>
          Don&#x27;t under or overengineer – create the right solution for the
          right stage
        </li>
        <li>right solution for the right problem – train idea</li>
        <li>If something doesn’t go as planned → STOP and think</li>
        <li>The quicker the loop the better. – less room for mistakes</li>
        <li>Run multiple loops at once.</li>
        <li>FOCUS: don&#x27;t get stuck in details, get moving</li>
        <li>
          Know the product: everyone involved should be able to make small
          (reversible) decisions -blog?
        </li>
      </ol>
      <Paragraph>
        We are nearing the end of our journey.
        <br />
        Let&#x27;s take the final step together and <strong>
          Start up
        </strong>{" "}
        your product. ;)
      </Paragraph>
      <SectionTitle>Product:</SectionTitle>
      <Paragraph>(confetti emoji or landing rocket booster)</Paragraph>
      <Paragraph>
        We did it! The launch was successful.
        <br />
        There are users, and some revenue also, now we just need to maintain,
        add more features and scale the business to infinity and beyond.
      </Paragraph>
      <SubTitle>References:</SubTitle>
      <SixByTwoGrid>
        <GridItem>
          <Image src={Lex} alt="Lex logo" width={200} />
          <GridItemTitle>Lex</GridItemTitle>
        </GridItem>
        <GridItem>
          <GridItemTitle>Filtered</GridItemTitle>
        </GridItem>
        <GridItem>
          <GridItemTitle>Axdraft</GridItemTitle>
        </GridItem>
        <GridItem>
          <GridItemTitle>Memrise</GridItemTitle>
        </GridItem>
        <GridItem>
          <GridItemTitle>Skiff</GridItemTitle>
        </GridItem>
        <GridItem>
          <GridItemTitle>SwaraLink</GridItemTitle>
        </GridItem>
      </SixByTwoGrid>
      <SubTitle>Our products:</SubTitle>
      <ColumnedRoot>
        <WhatWeCanLeftSide>Place Of Cards</WhatWeCanLeftSide>
        <WhatWeCanLeftSide>SzámlaBridge</WhatWeCanLeftSide>
        <WhatWeCanLeftSide>SuggestCat</WhatWeCanLeftSide>
        <WhatWeCanLeftSide>Learn to Fly</WhatWeCanLeftSide>
      </ColumnedRoot>
      <Paragraph>So here is your product:</Paragraph>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <HeaderLink href="/#contactUs" caption={"Your product"} />
      </div>
      <SubTitle>So, what was the lesson of the story?</SubTitle>
      <Paragraph>
        Was it the journey itself? The success at the end? Or maybe it was the
        friends we made along the way? :D
      </Paragraph>
      <Paragraph>
        We are here to not only build a working application but to create a
        working business that generates revenue. For that to happen you must go
        through a lot of difficulties, testing, twist end turns so you better
        have team that you enjoy working with and whom you can trust. It’s a
        long road, choose your companions well.
      </Paragraph>
      <SubTitle>Client said about us</SubTitle>
      <References />
    </Root>
  </RootWrapper>
);
