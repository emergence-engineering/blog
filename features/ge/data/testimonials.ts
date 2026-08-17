import { StaticImageData } from "next/image";

import GregPhoto from "../../../public/partners/greg.jpeg";
import MarcPhoto from "../../../public/partners/marc.jpeg";
import BenPhoto from "../../../public/partners/ben.jpeg";
import AndrewPhoto from "../../../public/partners/andrew.jpeg";
import OlegPhoto from "../../../public/partners/oleg.jpeg";
import SandeepPhoto from "../../../public/partners/sandeep.jpeg";
import AchillesPhoto from "../../../public/partners/achilles.png";

export interface Testimonial {
  photo: StaticImageData;
  name: string;
  /** Monogram used by the navy quote block. */
  initials: string;
  role: string;
  quote: string;
  /** What we did for them, shown next to the quote when we have it. */
  did?: string[];
}

/** Client quotes, carried over from the previous homepage carousel. */
export const testimonials: Testimonial[] = [
  {
    photo: GregPhoto,
    name: "Greg Detre",
    initials: "GD",
    role: "Consultant, Chief Data Scientist & CTO",
    quote:
      "I have chosen to work with Emergence Engineering on every one of my last 3 major projects. They are incredibly smart, you can trust them, and they’re great to work with. I cannot recommend them highly enough.",
  },
  {
    photo: MarcPhoto,
    name: "Marc Zao-Sanders",
    initials: "MZ",
    role: "CEO at Filtered",
    did: [
      "Content organization platform, from prototype to enterprise SaaS",
    ],
    quote:
      "We've worked with Emergence for three years and it's been wonderful. They helped us build a product from a basic prototype to a full enterprise SaaS offering, with speed, quality and a sense of fun.",
  },
  {
    photo: BenPhoto,
    name: "Ben Whately",
    initials: "BW",
    role: "Entrepreneur & Startup Investor, Speaker",
    quote:
      "Emergence are exceptional. For any new projects and products they are my go-to dev house. They work fast and to super high quality. They have the rare ability to understand the needs of early stage product discovery as well as the ability to build robust, high quality applications that will scale.",
  },
  {
    photo: AndrewPhoto,
    name: "Andrew Milich",
    initials: "AM",
    role: "co-founder & CEO at Skiff",
    did: [
      "Product feature development for collaboration tools",
      "Technical support for scale and adoption",
    ],
    quote:
      "Emergence Engineering was a fantastic partner for us to collaborate with on our collaborative editor and workspace. We had a great experience working on tough issues, from code editing to image embedding.",
  },
  {
    photo: OlegPhoto,
    name: "Oleg Zaremba",
    initials: "OZ",
    role: "CTO at Axdraft",
    quote:
      "Emergence Engineering helped our team move faster during a crucial moment of our product development. Their ProseMirror expertise paired with great communication skills resulted in a great working relationship.",
  },
  {
    photo: SandeepPhoto,
    name: "Sandeep Kamath",
    initials: "SK",
    role: "founder at Swaralink",
    quote:
      "The Emergence Engineering Team was very helpful in developing a Node.js script for a manufacturing test system for a Bluetooth product.",
  },
  {
    photo: AchillesPhoto,
    name: "Achilles Schmelzer",
    initials: "AS",
    role: "CTO at relay.cc",
    quote:
      "Working with Emergence was awesome! I was thoroughly impressed with the level of technical skill and communication of their engineers. Aaron and Gergo were able to deliver high-quality work on-time even in the absence of strong specifications and direction and Viktor did a great job of staying in the loop and filling in as a communicator whenever necessary.",
  },
];
