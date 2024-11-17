// Window Scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// Document
$(document).ready(function () {
  // Typing Animation
  new Typed("#type-it", {
    strings: ["TI", "Informatika"],
    typeSpeed: 120,
    loop: true,
  });
});
