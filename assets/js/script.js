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

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust offset for fixed header
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});
