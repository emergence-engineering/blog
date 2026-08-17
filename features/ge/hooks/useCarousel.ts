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

      const card = el.firstElementChild as HTMLElement | null;
      const distance =
        stepSize === "card" && card ? card.offsetWidth + 16 : el.clientWidth;

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
      el.scrollBy({ left: direction * distance, behavior: "smooth" });
    },
    [stepSize]
  );

  return { track, step };
};
