const menu_icon = document.getElementById("menu-icon");
const nav_list = document.querySelector(".navlist");

const sr = ScrollReveal({
    distance: "-65px",
});

sr.reveal(".navlist", { delay: 300, origin: "top" });
sr.reveal(".logo", { delay: 400, origin: "top" });
sr.reveal(".hero-text", { delay: 500, origin: "left" });
sr.reveal(".hero-img", { delay: 500, origin: "right" });
sr.reveal(".icons", { delay: 1000 });
sr.reveal(".scroll-down", { delay: 1000 });

menu_icon.addEventListener("click", () => {
    nav_list.classList.toggle("active");
    menu_icon.classList.toggle("bx-x");
});
