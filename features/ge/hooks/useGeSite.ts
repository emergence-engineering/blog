import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Runtime behaviours of the Growth Engineering pages, ported from the static
 * bundle's site.js (nav, reveal, tabs, blog filter). The markup is fully
 * server-rendered; this hook only attaches the same progressive enhancements
 * the original attached, and re-runs on client-side navigation.
 */
export const useGeSite = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (
      target: EventTarget,
      event: string,
      handler: EventListenerOrEventListenerObject,
      options?: AddEventListenerOptions
    ) => {
      target.addEventListener(event, handler, options);
      cleanups.push(() => target.removeEventListener(event, handler, options));
    };

    /* ---------- sticky header + mobile nav ---------- */
    const hdr = document.getElementById("hdr");
    if (hdr) {
      const onScroll = () => hdr.classList.toggle("stuck", window.scrollY > 8);
      onScroll();
      on(window, "scroll", onScroll, { passive: true });
      const t = document.getElementById("navToggle");
      if (t)
        on(t, "click", () => {
          const open = hdr.classList.toggle("open");
          t.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    /* ---------- services dropdown ---------- */
    const subs = Array.from(document.querySelectorAll(".has-sub"));
    subs.forEach((sub) => {
      const btn = sub.querySelector(".subtoggle");
      if (!btn) return;
      on(btn, "click", (e) => {
        e.stopPropagation();
        const open = sub.classList.toggle("open");
        subs.forEach((o) => {
          if (o !== sub) o.classList.remove("open");
        });
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    on(document, "click", () => {
      subs.forEach((s) => {
        s.classList.remove("open");
        const b = s.querySelector(".subtoggle");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    });
    on(document, "keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape")
        subs.forEach((s) => s.classList.remove("open"));
    });

    /* ---------- scroll reveal ---------- */
    const els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en, i) => {
            if (en.isIntersecting) {
              window.setTimeout(
                () => en.target.classList.add("in"),
                Math.min(i * 70, 260)
              );
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
      );
      els.forEach((e) => io.observe(e));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- competency tabs ---------- */
    document.querySelectorAll(".tabs").forEach((tabs) => {
      const buttons = tabs.querySelectorAll(".tablist button");
      buttons.forEach((btn) => {
        on(btn, "click", () => {
          buttons.forEach((b) => b.setAttribute("aria-selected", "false"));
          tabs
            .querySelectorAll(".tabpanel")
            .forEach((p) => p.setAttribute("data-active", "false"));
          btn.setAttribute("aria-selected", "true");
          const panel = tabs.querySelector(
            `#${btn.getAttribute("aria-controls")}`
          );
          if (panel) panel.setAttribute("data-active", "true");
        });
      });
    });

    /* ---------- blog filter (case studies page) ---------- */
    const filterTabs = document.querySelectorAll(".tab[data-filter]");
    filterTabs.forEach((tab) => {
      on(tab, "click", () => {
        filterTabs.forEach((t) => t.setAttribute("aria-selected", "false"));
        tab.setAttribute("aria-selected", "true");
        const f = tab.getAttribute("data-filter");
        document.querySelectorAll("#postGrid .post").forEach((p) => {
          (p as HTMLElement).style.display =
            f === "all" || p.getAttribute("data-cat") === f ? "" : "none";
        });
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [asPath]);
};
