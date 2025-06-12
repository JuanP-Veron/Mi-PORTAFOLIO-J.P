/* ==================== 
    Alternar Icono de Navegación
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== 
    Enlace Activo al Desplazarse por Secciones 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Barra de Navegación Fija 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Remover Icono y Navegación al Hacer Click en Enlaces 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Efecto Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .about-img, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".education-container, .portfolio-box",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-img, .home-content h1,.div-card, .about-content", { origin: "left" });
ScrollReveal().reveal(".home-content p, .div2", { origin: "right" });

/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Programador"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
