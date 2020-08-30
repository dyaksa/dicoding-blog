import "./styles/main.css";

const menu = document.getElementById("menu");
const drawer = document.getElementById("drawer");
const main = document.querySelector("main");
const hero = document.querySelector(".hero");

menu.addEventListener("click", (event) => {
  drawer.classList.toggle("open");
  console.log(drawer);
  event.stopPropagation();
});

main.addEventListener("click", (event) => {
  drawer.classList.remove("open");
});

hero.addEventListener("click", (event) => {
  drawer.classList.remove("open");
});
