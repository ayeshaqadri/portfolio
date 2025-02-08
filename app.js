let type = new Typed(".txt-1", {
    strings: ["Web and app developer...", "Code perfectionist...", "Strategic thinker..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const images = document.querySelectorAll("img");
images.forEach(img => {
    img.onerror = () => {
        img.src = "path/to/fallback-image.png";
    };
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
function setupScrolling(containerId, rightBtnId, leftBtnId) {
    const scrollContainer = document.getElementById(containerId);
    const rightBtn = document.getElementById(rightBtnId);
    const leftBtn = document.getElementById(leftBtnId);

    const scrollAmount = window.innerWidth <= 768 ? 200 : 500;

    rightBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += scrollAmount;
    });

    leftBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= scrollAmount;
    });
}

setupScrolling("movie-container1", "rightBtn1", "leftBtn1");
setupScrolling("movie-container2", "rightBtn2", "leftBtn2");
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener("scroll", debounce(() => {
    console.log("Scrolling...");
}, 100));