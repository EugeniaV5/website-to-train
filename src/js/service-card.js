// (() => {
//   const refs = {
//     openCardBtn: document.querySelector('[data-card-open]'),
//     closeCardBtn: document.querySelector('[data-card-close]'),
//     card: document.querySelector('[data-card]'),
//     // backdrop: document.querySelector('[data-backdrop]'),
//   };

//   refs.openCardBtn.addEventListener('click', toggleCard);
//   refs.closeCardBtn.addEventListener('click', toggleCard);

//   function toggleCard() {
//     refs.card.classList.toggle('is-opened');
//     // refs.backdrop.classList.toggle('is-hidden');
//   }
// })();
// Fancybox.defaults.showClass = 'transform: translateX(100%)
// ';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

// Fancybox.fromSelector('[data-fancybox="card"]');

// Show HTML element
// Fancybox.show([{ src: '#modal-service-1', type: 'inline' }]);
// Fancybox.show([{ src: '#modal-service-1', type: 'clone' }]);
