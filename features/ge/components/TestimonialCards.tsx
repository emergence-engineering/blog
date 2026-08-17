import React, { FunctionComponent } from "react";
import Image from "next/image";

import { testimonials } from "../data/testimonials";
import { useCarousel } from "../hooks/useCarousel";

interface TestimonialCardsProps {
  /** Heading text; the accent part is coloured. */
  heading: string;
  headingAccent: string;
}

/**
 * Swipeable client quotes. Used on the references page and on the Growth
 * Engineering homepage, so both sides of the site show the same references.
 */
export const TestimonialCards: FunctionComponent<TestimonialCardsProps> = ({
  heading,
  headingAccent,
}) => {
  const { track, step: scrollByCard } = useCarousel("card");

  return (
    <>
      <div className="mb-8 flex w-full items-end justify-between gap-4 lg:mb-12">
        <h2 className="text-4.5xl font-bold text-ink lg:text-7.5xl">
          {heading} <span className="text-coral">{headingAccent}</span>
        </h2>
        <div className="hidden shrink-0 gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByCard(-1)}
            className="h-10 w-10 rounded-full border border-ink/20 text-ink transition hover:border-coral hover:text-coral"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByCard(1)}
            className="h-10 w-10 rounded-full border border-ink/20 text-ink transition hover:border-coral hover:text-coral"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={track}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map(({ photo, name, role, quote }) => (
          <figure
            key={name}
            className="flex w-[85%] shrink-0 snap-start flex-col gap-4 rounded-lg border border-solid border-ink/15 bg-white p-5 sm:w-[380px]"
          >
            {/* inline: the GE stylesheet styles bare blockquotes for the big
                white quote on navy, which would win over these classes */}
            <blockquote
              style={{
                fontFamily: "inherit",
                fontSize: ".9rem",
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: 1.6,
                color: "rgba(11,27,51,.8)",
              }}
            >
              “{quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-ink/10 pt-4">
              <Image
                src={photo}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-coral">{name}</div>
                <div className="text-xs text-ink/70">{role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};
