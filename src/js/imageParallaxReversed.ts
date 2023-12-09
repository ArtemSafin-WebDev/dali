import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function imageParallaxReversed() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-image-parallax-reversed")
  );

  elements.forEach((element) => {
    const wrapper = element.querySelector<HTMLElement>(
      ".js-image-parallax-wrapper"
    );

    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(wrapper, {
        duration: 1,
        yPercent: -20,
        ease: "none",
      });
    });
  });
}
