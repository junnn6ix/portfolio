// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector(".navbar");
  const fixedNav = header.offsetTop;
  const floatBtn = document.querySelector(".float-btn");
  const navbarNavFixed = document.querySelector(".navbar-nav");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed");
    floatBtn.classList.add("scroll");
    navbarNavFixed.classList.add("scroll");
  } else {
    header.classList.remove("fixed");
    floatBtn.classList.remove("scroll");
    navbarNavFixed.classList.remove("scroll");
  }
};
