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
    // Revealed state is a data attribute rather than a class: React re-renders
    // and hydration diff the className prop, so a script-added class triggers
    // "Prop className did not match" warnings; unknown attributes are ignored.
    const reveal = (el: Element) => el.setAttribute("data-in", "");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".rv").forEach(reveal);
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en, i) => {
            if (en.isIntersecting) {
              window.setTimeout(() => reveal(en.target), Math.min(i * 60, 180));
              io.unobserve(en.target);
            }
          });
        },
        // The positive bottom margin starts the reveal just before the element
        // scrolls into view, so fast scrolling never lands on a blank section.
        { rootMargin: "0px 0px 12% 0px", threshold: 0.01 }
      );
      const register = (el: Element) => {
        if (el.classList.contains("in") || el.hasAttribute("data-in")) return;
        // Anything already scrolled past would never intersect again (deep
        // links, back navigation, a reload partway down the page), so reveal
        // it straight away instead of leaving it invisible.
        if (el.getBoundingClientRect().bottom < 0) reveal(el);
        else io.observe(el);
      };
      document.querySelectorAll(".rv").forEach(register);
      // React can replace these nodes (client-side navigation, fast refresh);
      // pick up any that appear later.
      const mo = new MutationObserver((records) => {
        records.forEach((r) =>
          r.addedNodes.forEach((n) => {
            if (!(n instanceof Element)) return;
            if (n.classList.contains("rv")) register(n);
            n.querySelectorAll?.(".rv").forEach(register);
          })
        );
      });
      mo.observe(document.body, { childList: true, subtree: true });
      cleanups.push(() => {
        io.disconnect();
        mo.disconnect();
      });
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
