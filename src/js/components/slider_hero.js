import Swiper, { EffectFade, Autoplay, Pagination } from "swiper";

Swiper.use([EffectFade, Autoplay, Pagination]);
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 8000,
  },
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
});
