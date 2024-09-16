import { useEffect } from "react";
import { gsap } from "gsap";
import { calcScrollAnimationOffset } from "./calcScrollAnimationOffset";

const COLUMN_SCROLL_SPEED = 6;

const useGsapAnimation = () => {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const section1Timeline = gsap
        .timeline({ defaults: { duration: 1 } })
        .to("#sec-1-intro", { opacity: 1 })
        .to("#sec-1-illustration", { opacity: 1, delay: 1.5 })
        .to("#sec-1-description", { opacity: 1, delay: 1.5 })
        .to(["#sec-1-description", "#sec-1-illustration"], {
          y: () =>
            calcScrollAnimationOffset(
              document.querySelector("#sec-1-description")?.clientHeight || 0,
              document.querySelector("#sec-1-illustration")?.clientHeight || 0,
            ),
          duration: COLUMN_SCROLL_SPEED,
        });

      const section2Timeline = gsap
        .timeline({ defaults: { duration: 1 } })
        .to("#section-2", { opacity: 1, delay: 0.5 })
        .to("#sec-2-intro", { opacity: 1, delay: 1.5 })
        .to("#sec-2-illustration", { opacity: 1, delay: 1.5 })
        .to("#sec-2-description", { opacity: 1, delay: 1.5 })
        .to(["#sec-2-description", "#sec-2-illustration"], {
          y: () =>
            calcScrollAnimationOffset(
              document.querySelector("#sec-2-description")?.clientHeight || 0,
              document.querySelector("#sec-2-illustration")?.clientHeight || 0,
            ),
          duration: COLUMN_SCROLL_SPEED,
        });
      const section3Timeline = gsap
        .timeline({ defaults: { duration: 1 } })
        .to("#section-3", { opacity: 1, delay: 0.5 })
        .to("#sec-3-intro", { opacity: 1, delay: 1.5 })
        .to("#sec-3-illustration", { opacity: 1, delay: 1.5 })
        .to("#sec-3-description", { opacity: 1, delay: 1.5 })
        .to(["#sec-3-description", "#sec-3-illustration"], {
          y: () =>
            calcScrollAnimationOffset(
              document.querySelector("#sec-3-description")?.clientHeight || 0,
              document.querySelector("#sec-3-illustration")?.clientHeight || 0,
            ),
          duration: COLUMN_SCROLL_SPEED,
        });
      const section4Timeline = gsap
        .timeline({ defaults: { duration: 1 } })
        .to("#section-4", { opacity: 1, delay: 0.5 })
        .to("#sec-4-intro", { opacity: 1, delay: 0.5 })
        .to("#sec-4-illustration", { opacity: 1, delay: 1.5 })
        .to("#join_us_root", { height: "65vh" }, "<")
        .to(["#sec-4-description", "#join-end-card"], {
          opacity: 1,
          duration: 1,
        })
        .to(["#sec-4-description", "#sec-4-illustration"], {
          y: () =>
            calcScrollAnimationOffset(
              document.querySelector("#sec-4-description")?.clientHeight || 0,
              document.querySelector("#sec-4-illustration")?.clientHeight || 0,
            ),
          duration: COLUMN_SCROLL_SPEED,
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#gsapContainer",
            start: "top center",
            end: "+=2500",
            scrub: 1,
            markers: true,
          },
          defaults: { duration: 1 },
        })
        .to("#section-1", { opacity: 1, delay: 5 })
        .add(section1Timeline)
        .to("#section-1", { opacity: 0, delay: 0.5 })
        .add(section2Timeline)
        .to("#section-2", { opacity: 0, delay: 0.5 })
        .add(section3Timeline)
        .to("#section-3", { opacity: 0, delay: 0.5 })

        .add(section4Timeline);

      ScrollTrigger.create({
        trigger: "#gsapContainer",
        start: "top top",
        end: "+=2000",
        pin: "#gsapPin",
        pinSpacing: false,
        scrub: 1,
        markers: true,
      });
    });
  }, []);
};

export default useGsapAnimation;
