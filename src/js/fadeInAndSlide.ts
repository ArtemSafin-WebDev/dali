import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function fadeInAndSlide() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-fade-in-and-slide")
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
      y: 30,
      ease: "power2.out",
    });
  });
}
