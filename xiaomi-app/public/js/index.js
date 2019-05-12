(function() {
  var topbar_cart = document.querySelector(".site-topbar>div>.topbar-cart");
  var topbar_info = document.querySelector(".topbar-cart>.cart-menu");
  // console.log(topbar_cart);
  // console.log(topbar_info);

  topbar_cart.onmouseover = function() {
    var topbar_cart = this;
    topbar_info.style.display = "block";
  };
  topbar_cart.onmouseout = function() {
    var topbar_cart = this;
    topbar_info.style.display = "none";
  };
})();
