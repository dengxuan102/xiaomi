
$(function () {
  $(".site-header .search-text").focus(function () {
    $(this).css("border", "1px solid #ff6700").next().css("border", "1px solid #ff6700").next().addClass("hide");
    $(".site-header .search-form .keyword-list").removeClass("hide");
  });
  $(".site-header .search-text").blur(function () {
    $(this).css("border", "1px solid #e0e0e0").next().css("border", "1px solid #e0e0e0");
    $(".site-header .search-form .keyword-list").addClass("hide");
  });
})