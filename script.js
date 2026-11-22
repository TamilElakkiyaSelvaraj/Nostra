// ---------- Carousel ----------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// Automatic carousel
setInterval(() => {
    changeSlide(1);
}, 3000);


// ---------- Mobile menu ----------
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
    navLinks.classList.toggle("open");
}

function closeMenu() {
    navLinks.classList.remove("open");
}


// ---------- Wishlist heart ----------
function toggleWishlist(button) {
    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.textContent = "♥";
    } else {
        button.textContent = "♡";
    }
}
