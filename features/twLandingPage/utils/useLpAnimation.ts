import { useEffect } from "react";
import { gsap } from "gsap";

const useGsapAnimation = () => {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const section1Timeline = gsap
        .timeline({})
        .to("#sec-1-intro", { opacity: 1 })
        .to("#sec-1-illustration", { opacity: 1, delay: 1.5 })
        .to("#sec-1-description", { opacity: 1, delay: 1.5 });

      const section2Timeline = gsap
        .timeline()
        .to("#section-2", { opacity: 1, delay: 1.5 })
        .to("#sec-2-illustration", { opacity: 1, delay: 1.5 })
        .to("#sec-2-intro", { opacity: 1, delay: 1.5 })
        .to("#sec-2-description", { opacity: 1, delay: 1.5 });

      const section3Timeline = gsap
        .timeline()
        .to("#section-3", { opacity: 1, delay: 1.5 })
        .to("#sec-3-illustration", { opacity: 1, delay: 1.5 })
        .to("#sec-3-intro", { opacity: 1, delay: 1.5 })
        .to("#sec-3-description", { opacity: 1, delay: 1.5 });

      const section4Timeline = gsap
        .timeline()
        .to("#section-4", { opacity: 1, delay: 1.5 })
        .to("#sec-4-intro", { opacity: 1, delay: 1.5 })
        .to("#sec-4-illustration", { opacity: 1, delay: 1.5 })
        .to(["#sec-4-description", "#join-end-card"], {
          opacity: 1,
          delay: 1.5,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#gsapContainer",
            start: "top top",
            end: "+=1000",
            scrub: 1,
            markers: true,
          },
          defaults: { duration: 1 },
        })
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
        end: "+=1000",
        pin: "#gsapPin",
        scrub: 1,
        markers: true,
      });

      gsap.to("#section-1", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#section-1",
          start: "top center",
          end: "top top",
          scrub: 1,
          markers: true,
        },
      });
    });
  }, []);
};

export default useGsapAnimation;
