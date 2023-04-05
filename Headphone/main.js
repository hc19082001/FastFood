const header = document.querySelector("header");
const icon_menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
    icon_menu.classList.remove("bx-x");
    navbar.classList.remove("active");
});

icon_menu.addEventListener("click", () => {
    icon_menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});
