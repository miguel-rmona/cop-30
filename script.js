// ==============================
// Menu responsivo (mobile)
// ==============================
const nav = document.querySelector("nav ul");
const header = document.querySelector("header");

// cria botão hamburguer
const menuBtn = document.createElement("div");
menuBtn.innerHTML = "&#9776;"; // ícone de menu
menuBtn.style.fontSize = "2rem";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "none";
menuBtn.style.color = "white";
header.insertBefore(menuBtn, header.children[1]);

// mostra/oculta em telas menores
function toggleMenu() {
    if (window.innerWidth <= 768) {
        menuBtn.style.display = "block";
        nav.style.display = "none";
        menuBtn.addEventListener("click", () => {
            nav.style.display = nav.style.display === "flex" ? "none" : "flex";
            nav.style.flexDirection = "column";
            nav.style.gap = "1rem";
            nav.style.background = "#1e824c";
            nav.style.padding = "1rem";
            nav.style.borderRadius = "10px";
        });
    } else {
        menuBtn.style.display = "none";
        nav.style.display = "flex";
        nav.style.flexDirection = "row";
    }
}
toggleMenu();
window.addEventListener("resize", toggleMenu);

// ==============================
// Rolagem suave para links do menu
// ==============================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ==============================
// Animação ao carregar os cards
// ==============================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

