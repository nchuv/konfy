import ActiveMenuLink from "active-menu-link";

let options = {
  default: "default",
};
new ActiveMenuLink(".nav", options);

const nav = document.querySelectorAll(".nav")[0];
nav.addEventListener("click", function () {
  nav.classList.toggle("opened");
});

const links = document.querySelectorAll(".hero .btn");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 60;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
