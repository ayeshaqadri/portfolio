let type = new Typed(".txt-1", {
    strings: ["Web and app developer...", "Code perfectionist...", "Strategic thinker..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// for navbar
function toggleMenu() {
    const navbarNav = document.getElementById("navbarNav");
    navbarNav.classList.toggle("active");
}


// First Section Scrolling
let scrollContainer1 = document.getElementById("movie-container1");
let rightBtn1 = document.getElementById("rightBtn1");
let leftBtn1 = document.getElementById("leftBtn1");

rightBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    if (window.innerWidth <= 768) {
        scrollContainer1.scrollLeft += 200; // Slower scroll for smaller screens
    } else {
        scrollContainer1.scrollLeft += 500;
    }
});

leftBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    if (window.innerWidth <= 768) {
        scrollContainer1.scrollLeft -= 200; // Slower scroll for smaller screens
    } else {
        scrollContainer1.scrollLeft -= 500;
    }
});

// Second Section Scrolling
let scrollContainer2 = document.getElementById("movie-container2");
let rightBtn2 = document.getElementById("rightBtn2");
let leftBtn2 = document.getElementById("leftBtn2");

rightBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    if (window.innerWidth <= 768) {
        scrollContainer2.scrollLeft += 200; // Slower scroll for smaller screens
    } else {
        scrollContainer2.scrollLeft += 500;
    }
});

leftBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    if (window.innerWidth <= 768) {
        scrollContainer2.scrollLeft -= 200; // Slower scroll for smaller screens
    } else {
        scrollContainer2.scrollLeft -= 500;
    }
});