const customer_rate = document.querySelector(".customer-rate");
const images = document.querySelectorAll(".spaces .image img");
const avt_tooltip = document.querySelector(".avt-tooltip");
const avt = document.querySelector(".avatar");
let present,
    scrollLeftPresent,
    idIntervalAutoScroll,
    isDraw = false;
let indexImage = 0;
const maxScrollLeft = customer_rate.scrollWidth - customer_rate.clientWidth;

const autoScroll = () => {
    if (customer_rate.scrollLeft >= maxScrollLeft) {
        customer_rate.scrollLeft = 0;
    } else {
        customer_rate.scrollLeft += 300;
    }
};

idIntervalAutoScroll = setInterval(autoScroll, 3000);

customer_rate.addEventListener("mousemove", (e) => {
    if (isDraw) {
        e.preventDefault();
        customer_rate.scrollLeft = scrollLeftPresent + (present - e.pageX);
    }
});
customer_rate.addEventListener("mousedown", (e) => {
    clearInterval(idIntervalAutoScroll);
    present = e.pageX;
    scrollLeftPresent = customer_rate.scrollLeft;
    isDraw = true;
});
customer_rate.addEventListener("mouseup", (e) => {
    idIntervalAutoScroll = setInterval(autoScroll, 3000);
    isDraw = false;
});
customer_rate.addEventListener("mouseleave", (e) => {
    isDraw = false;
});
customer_rate.addEventListener("touchstart", (e) => {
    clearInterval(idIntervalAutoScroll);
});
customer_rate.addEventListener("touchend", (e) => {
    idIntervalAutoScroll = setInterval(autoScroll, 3000);
});

setInterval(() => {
    if (indexImage > images.length - 1) {
        images[images.length - 1].classList.remove("show");
        images[0].classList.add("show");
        indexImage = 1;
    } else {
        images[indexImage].classList.add("show");
        indexImage === 0 || images[indexImage - 1].classList.remove("show");
        ++indexImage;
    }
}, 3000);

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
        avt_tooltip.classList.remove("show");
    }
});
avt.addEventListener("click", (e) => {
    avt_tooltip.classList.toggle("show");
    console.log(avt_tooltip.className);
});
