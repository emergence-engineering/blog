import { useCallback, useRef } from "react";

/**
 * Horizontal scroll carousel that wraps around: stepping past the last item
 * returns to the first, and stepping back from the first jumps to the last.
 *
 * The track is a plain scroll container, so touch and trackpad swiping keep
 * working on their own; these arrows just drive the same scroll position.
 */
export const useCarousel = (
  /** How far one step moves: a full page, or one card plus its gap. */
  stepSize: "page" | "card" = "page"
) => {
  const track = useRef<HTMLDivElement>(null);

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = track.current;
      if (!el) return;

      // Measure the real (fractional) slide width: clientWidth rounds down,
      // and the sub-pixel error accumulates across slides into a visible
      // sliver of the neighboring slide along the track's edge.
      const card = el.firstElementChild as HTMLElement | null;
      const slideWidth = card
        ? card.getBoundingClientRect().width
        : el.clientWidth;
      const distance = stepSize === "card" ? slideWidth + 16 : slideWidth;

      // 1px of slack: scrollLeft can land on a fraction after a smooth scroll
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      const atStart = el.scrollLeft <= 1;

      // Wrapping jumps instantly: a smooth scroll across every slide fights
      // with mandatory scroll snapping, which drags it back to where it was.
      if (direction === 1 && atEnd) {
        el.scrollTo({ left: 0, behavior: "auto" });
        return;
      }
      if (direction === -1 && atStart) {
        el.scrollTo({ left: el.scrollWidth, behavior: "auto" });
        return;
      }
      // Target an absolute slide boundary rather than scrollBy: relative steps
      // accumulate the fractional offset a smooth scroll can settle on, which
      // leaves a sliver of the neighboring slide visible along the edge.
      const index = Math.round(el.scrollLeft / distance);
      el.scrollTo({ left: (index + direction) * distance, behavior: "smooth" });
    },
    [stepSize]
  );

  return { track, step };
};
