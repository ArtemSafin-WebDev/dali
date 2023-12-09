export default function members() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".members__card")
  );

  elements.forEach((element) => {
    const video = element.querySelector("video");
    if (!video) return;

    console.log("Video", video);
    element.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play();
      video.classList.add("visible");
    });
    element.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.classList.remove("visible");
    });
  });
}
