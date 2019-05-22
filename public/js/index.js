$(document).ready(function() {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal", // 垂直切换选项
    loop: true, // 循环模式选项
    effect: "fade",
    // autoplay: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true //用户操作swiper之后是否禁止autoplay，包括触碰，拖动，点击pagination等操作true/false
    },

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
      clickable: "true"
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    uniqueNavElements: false
  });


  
});
