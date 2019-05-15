$(() => {
  //引入头部
  $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head");
  $.ajax({
    url: 'header.html',
    type: 'get',
    success: function (res) {
      console.log(res);
      var my_header = document.getElementsByClassName("my_header");
      console.log(my_header);
      $("#header").append(res);
    }
  });
});