$(() => {
  //引入头部
  $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head");
  $.ajax({
    url: "header.html",
    type: "get",
    success: function(res) {
      console.log(res);
      var my_header = document.getElementsByClassName("my_header");
      console.log(my_header);
      $("#header").append(res);
    }
  });
});
$(document).ready(function() {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal", // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination"
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
