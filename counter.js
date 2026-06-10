/* counter.js — анимация счётчиков */

const counters = document.querySelectorAll(".counter");
let started = false;

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000; // мс
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutQuart
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(ease * target);
    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

function startCounters() {
  if (started) return;
  const section = document.querySelector(".counters");
  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        started = true;
        counters.forEach(c => animateCounter(c));
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(section);
}

if (counters.length) {
  startCounters();
}
