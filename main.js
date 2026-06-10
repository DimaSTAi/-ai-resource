/* main.js — инициализация библиотек и меню */

// ── tsParticles (фон Hero) ──
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ["#6C63FF", "#00D4FF", "#FF6B6B"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: { min: 1, max: 3 }, random: true },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: "bounce"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#6C63FF",
        opacity: 0.2,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
        push: { quantity: 4 }
      }
    },
    background: { color: "transparent" }
  });
}

// ── AOS (анимации при скролле) ──
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    once: true,
    offset: 80
  });
}

// ── Burger menu ──
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

if (burgerBtn && navMenu) {
  burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    burgerBtn.classList.toggle("active");
  });

  // Закрыть меню при клике на ссылку
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      burgerBtn.classList.remove("active");
    });
  });
}

// ── Плавный скролл для якорных ссылок ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
