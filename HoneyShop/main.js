const header = document.querySelector("header");
const menu_icon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navlist");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    menu_icon.classList.remove("bx-x");
    navbar.classList.remove("open");
});

menu_icon.addEventListener("click", function () {
    menu_icon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
});
