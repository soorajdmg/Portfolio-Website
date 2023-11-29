document.addEventListener("DOMContentLoaded", function () {
    var burgerMenu = document.querySelector(".burger-menu");
    var navLinks = document.querySelector("nav");
    var body = document.querySelector("body");
  
    burgerMenu.addEventListener("click", function (event) {
      event.stopPropagation();
      burgerMenu.classList.toggle("active");
      navLinks.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  
    document.addEventListener("click", function (event) {
      if (
        navLinks.contains(event.target) &&
        !burgerMenu.contains(event.target)
      ) {
        burgerMenu.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    });
  });
  