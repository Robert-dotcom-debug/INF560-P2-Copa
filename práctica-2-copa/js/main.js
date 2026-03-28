// SCROLL SUAVE
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// REVEAL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// CARRUSEL
let slides = document.querySelectorAll(".carousel-item");
let i = 0;

function showSlide(n) {
    slides.forEach(s => s.classList.remove("active"));
    slides[n].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    i = (i + 1) % slides.length;
    showSlide(i);
};

document.querySelector(".prev").onclick = () => {
    i = (i - 1 + slides.length) % slides.length;
    showSlide(i);
};

// AUTO
setInterval(() => {
    i = (i + 1) % slides.length;
    showSlide(i);
}, 4000);

// CONTADOR ANIMADO
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let update = () => {
        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;

        let increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

