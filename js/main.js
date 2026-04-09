// MENU MOVIL
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("activo");
}

// SLIDER DE OPINIONES
let index = 0;
const slides = document.getElementById("slides");

function mostrarSlide(i) {
    if (!slides) return;
    const total = slides.children.length;
    index = (i + total) % total;
    slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

function moverSlide(n) {
    mostrarSlide(index + n);
}

if (slides) {
    setInterval(() => moverSlide(1), 5000);
}

// ANIMACION AL HACER SCROLL
const elementos = document.querySelectorAll('[data-animate]');
function mostrarScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    elementos.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('activo');
        }
    });
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('load', mostrarScroll);