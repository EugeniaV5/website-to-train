// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/scss/';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/bundle';
// import Swiper and modules styles

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // direction: 'vertical',
  //   loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  //   loop: true,
  //   lazy: true,

  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      // slidesPerGroup: 3,
      // Navigation arrows
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// // core version + navigation, pagination modules:
// // import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/bundle';

// // swiper/scss/bundle

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 8,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
