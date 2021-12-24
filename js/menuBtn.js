const btn = document.querySelector(".js-menu");
const mobileMenu = document.querySelector(".navigation--mobile");
btn.addEventListener("click", () => mobileMenu.classList.toggle("navigation--dropped"));
