const menuicon = document.getElementById("menu-icon");
const navlist = document.querySelector("header .navlist");

menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("bx-x");
    navlist.classList.toggle("active");
});
