import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function fadeIn() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-fade-in")
  );

  elements.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top+=50 bottom",
        end: "bottom top",
      },
    });

    tl.from(element, {
      duration: 0.6,
      autoAlpha: 0,
      ease: "power2.out",
    });
  });
}
