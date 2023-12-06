export default function header() {
  const burger = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );

  const menuCloseBtn = document.querySelector<HTMLButtonElement>(
    ".page-header__side-menu-close"
  );

  const menu = document.querySelector<HTMLElement>(".page-header__side-menu");

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });

  menuCloseBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-open");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.body.classList.remove("menu-open");
    }
  });

  menu?.addEventListener("click", function (event) {
    if (event.target === this) {
      document.body.classList.remove("menu-open");
    }
  });
}
