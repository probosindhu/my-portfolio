const nav = document.querySelector("#header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY >= 60) {
        nav.classList.add("nav--hidden");
        console.log("=============================");
        console.log("down");
        console.log(`current window = ${window.scrollY}`);
        console.log(`lastScroll window = ${lastScrollY}`);
        console.log("=============================");
    } else {
        nav.classList.remove("nav--hidden");
        console.log("=============================");
        console.log("up");
        console.log(`current window = ${window.scrollY}`);
        console.log(`lastScroll window = ${lastScrollY}`);
        console.log("=============================");
    }

    lastScrollY = window.scrollY;
});