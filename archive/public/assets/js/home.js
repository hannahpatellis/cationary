$("#NavBar-Icon").on("click", function() {
  $("#Menu").toggleClass("Menu-active");
  $(this).toggleClass("fa-bars");
  $(this).toggleClass("fa-times")
});