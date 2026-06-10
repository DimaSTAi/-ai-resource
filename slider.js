/* slider.js — Swiper для отзывов */

if (typeof Swiper !== "undefined") {
  new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
}
