import "virtual:svg-icons-register";
import "../scss/style.scss";
import header from "./header";
import imagesSlider from "./imagesSlider";
import forms from "./forms";

document.addEventListener("DOMContentLoaded", () => {
  header();
  imagesSlider();
  forms();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
