import "virtual:svg-icons-register";
import "../scss/style.scss";
import header from "./header";
import imagesSlider from "./imagesSlider";
import forms from "./forms";
import smoothScrolling from "./smoothScrolling";
import intro from "./intro";
import fadeIn from "./fadeIn";
import fadeInAndSlide from "./fadeInAndSlide";
import imageParallax from "./imageParallax";
import imageParallaxReversed from "./imageParallaxReversed";
import members from "./members";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  header();
  imagesSlider();
  forms();
  intro();
  fadeIn();
  fadeInAndSlide();
  imageParallax();
  imageParallaxReversed();
  members();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
