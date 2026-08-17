import React, { FunctionComponent, useCallback, useRef } from "react";
import Link from "next/link";

import { testimonials } from "../data/testimonials";

/**
 * The testimonial section of the English (software) pages. Works the same
 * way as the Growth Engineering one: the arrows flank the quote, the side
 * panel stays fixed while the quotes swipe.
 */
export const EnTestimonials: FunctionComponent = () => {
  const track = useRef<HTMLDivElement>(null);

  const step = useCallback((direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }, []);

  const arrowClass =
    "h-10 w-10 shrink-0 rounded-full border border-white/25 text-white transition hover:border-coral hover:text-coral";

  return (
    <section className="on-navy">
      <div className="wrap">
        <div className="eyebrow rv in" style={{ marginBottom: ".4rem" }}>
          Testimonial
        </div>
        <div className="quote-grid">
          {/* min-w-0: grid items default to min-width auto, which would let
              the scroll track blow the column open */}
          <div className="flex min-w-0 items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => step(-1)}
              className={arrowClass}
            >
              ←
            </button>
            <div
              ref={track}
              className="flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((x) => (
                <div key={x.name} className="w-full shrink-0 snap-start">
                  <blockquote>
                    <em>“</em>
                    {x.quote}
                    <em>”</em>
                  </blockquote>
                  <div className="attrib">
                    <div className="av">{x.initials}</div>
                    <div>
                      <div className="who">{x.name}</div>
                      <div className="role">{x.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => step(1)}
              className={arrowClass}
            >
              →
            </button>
          </div>
          <div className="qside rv in">
            <h4>Who we work with</h4>
            <p style={{ color: "#A9B9CE", fontSize: ".92rem", lineHeight: "1.6", marginBottom: "1.4rem" }}>
              Startups and product teams whose product lives or dies on the
              editor, the collaboration, or getting something hard to run in
              the browser.
            </p>
            <Link href="/contact-en" className="tlink">
              Start a project <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
