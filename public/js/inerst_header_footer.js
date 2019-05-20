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
  $(`<link rel="stylesheet" href="./css/footer.css">`).appendTo("head");
  $.ajax({
    url: "footer.html",
    type: "get",
    success: function(res) {
      console.log(res);
      var my_header = document.getElementsByClassName("my_footer");
      console.log(my_header);
      $("#footer").append(res);
    }
  });
});
