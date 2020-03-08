const headerSwip = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })