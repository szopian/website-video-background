const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
