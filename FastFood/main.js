const menu_btn = document.querySelector(".bx.bx-menu");
const navbar = document.querySelector(".navbar");

menu_btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.addEventListener("scroll", (e) => {
    navbar.classList.remove("active");
});
