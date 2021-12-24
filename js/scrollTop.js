const buttonScrollTop = document.getElementById("scroll-top");

function showArrow() {
  if (scrollY < document.documentElement.clientHeight) {
    buttonScrollTop.style.visibility = "hidden";
  } else {
    buttonScrollTop.style.visibility = "visible";
  }
}

window.addEventListener("scroll", showArrow);

buttonScrollTop.addEventListener("click", () => window.scrollTo(0, 0));
