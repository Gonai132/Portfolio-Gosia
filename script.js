const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
    menu.classList.toggle("on");
    nav.classList.toggle("on");
})