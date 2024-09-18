import Image from "next/image";

import { scrollToContact } from "../utils/scrollToContact";

import GregPhoto from "../../../public/partners/greg.jpeg";
import MarcPhoto from "../../../public/partners/marc.jpeg";
import BenPhoto from "../../../public/partners/ben.jpeg";
import AndrewPhoto from "../../../public/partners/andrew.jpeg";
import OlegPhoto from "../../../public/partners/oleg.jpeg";
import SandeepPhoto from "../../../public/partners/sandeep.jpeg";
import AchillesPhoto from "../../../public/partners/achilles.png";
import { scrollToServices } from "../utils/scrollToServices";
import BGImage from "../../../public/lp/hyperspace.webp";
import MobileBGImage from "../../../public/lp/hyperspace_mobile.webp";
import { Button } from "./Button";
import { StripeTestimonial, TwTestimonial } from "./TwTestimonial";

const Partners = [
  {
    src: GregPhoto.src,
    partnerName: "Greg Detre",
    partnerJob: "Consultant, Chief Data Scientist & CTO",
    saysThat:
      "I have chosen to work with Emergence Engineering on every one of my last 3 major projects. They are incredibly smart, you can trust them, and they’re great to work with. I cannot recommend them highly enough.",
  },
  {
    src: MarcPhoto.src,
    partnerName: "Marc Zao-Sanders",
    partnerJob: "CEO at Filtered",
    saysThat:
      "We've worked with Emergence for three years and it's been wonderful. They helped us build a product from a basic prototype to a full enterprise SaaS offering, with speed, quality and a sense of fun.",
  },
  {
    src: BenPhoto.src,
    partnerName: "Ben Whately",
    partnerJob: "Entrepreneur & Startup Investor, Speaker",
    saysThat: `Emergence are exceptional. For any new projects and products they are my go-to dev house. They work fast and to super high quality They have the rare ability to understand the needs of early stage product discovery as well as the ability to build robust, high quality applications that will scale.`,
  },
  {
    src: AndrewPhoto.src,
    partnerName: "Andrew Milich",
    partnerJob: "co-founder & CEO at Skiff",
    saysThat: `
      Emergence Engineering was a fantastic partner for us to collaborate with on our collaborative editor and workspace.
      We had a great experience working on tough issues, from code editing to image embedding.
      `,
  },
  {
    src: OlegPhoto.src,
    partnerName: "Oleg Zaremba",
    partnerJob: "CTO at Axdraft",
    saysThat: `Emergence Engineering helped our team move faster during a crucial moment of our product development. Their ProseMirror expertise paired with great communication skills resulted in a great working realtionship.`,
  },
  {
    src: SandeepPhoto.src,
    partnerName: "Sandeep Kamath",
    partnerJob: "founder at Swaralink",
    saysThat: `The Emergence Engineering Team was very helpful in developing a Node.js script for a manufacturing test system for a Bluetooth product`,
  },
  {
    src: AchillesPhoto.src,
    partnerName: "Achilles Schmelzer",
    partnerJob: "CTO at relay.cc",
    saysThat:
      "Working with Emergence was awesome! I was thoroughly impressed with the level of technical skill and communication of their engineers. Aaron and Gergo were able to deliver high-quality work on-time even in the absence of strong specifications and direction and Viktor did a great job of staying in the loop and filling in as a communicator whenever necessary.",
  },
];

export const TwIntroduction = () => {
  return (
    <div className="flex w-full flex-grow flex-col justify-center bg-black">
      <div className="relative flex">
        <div className="hidden md:block">
          <Image
            src={BGImage.src}
            alt="background"
            sizes="100vw"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            fill
            priority
          />
        </div>

        <div className="block md:hidden">
          <Image
            src={MobileBGImage.src}
            alt="background"
            sizes="100vw"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            fill
            priority
          />
        </div>

        <div className="z-10 flex w-full flex-col items-center justify-center gap-10 pt-3 text-amber-50 lg:pt-16">
          <div>
            <h1 className="px-3 text-center text-4.5xl font-bold leading-none lg:text-7.5xl">
              FROM <span className="text-orange-500">IDEA</span>
            </h1>
            <h1 className="px-3 text-center text-4.5xl font-bold leading-none lg:text-7.5xl">
              TO <span className="text-orange-500">APP</span> TO <span className="text-orange-500">MARKET</span>
            </h1>
          </div>
          <h2 className="max-w-3xl px-3 text-center text-xl font-bold lg:text-4xl">
            We are a full-stack development team building scalable, <br />
            high performance software products and webapps.
          </h2>

          <div className="flex w-full flex-col gap-5 px-3 py-10 md:flex-row md:justify-center">
            <Button
              theme="secondary"
              handleClick={scrollToServices}
              label="Our services"
            />
            <Button
              theme="primary"
              handleClick={scrollToContact}
              label="Get a quote"
            />
          </div>
          <div className="relative h-[28rem] w-full overflow-x-scroll md:min-h-[20rem]">
            <div className="absolute left-[12px] top-0 flex gap-5 md:left-[200px]">

              {Partners.slice(0, 2).map(
                ({ src, saysThat, partnerName, partnerJob }, idx) => (
                  <TwTestimonial
                    key={idx}
                    avatarURL={src as string}
                    name={partnerName}
                    title={partnerJob}
                    quote={saysThat}
                  />
                ),
              )} <StripeTestimonial />

              {Partners.slice(2).map(
                ({ src, saysThat, partnerName, partnerJob }, idx) => (
                  <TwTestimonial
                    key={idx}
                    avatarURL={src as string}
                    name={partnerName}
                    title={partnerJob}
                    quote={saysThat}
                  />
                ),
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
