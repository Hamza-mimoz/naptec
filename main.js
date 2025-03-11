let dropMenu = document.getElementById("dropmenu");
let btnMenu = document.getElementById("btn-menu");
let oopen = document.getElementById("open");
let closee = document.getElementById("close");
let cont = 1;
closee.style.transform = "scale(0)";
btnMenu.addEventListener("click", function () {
  if (cont == 1) {
    dropMenu.style.width = "0px";
    cont++;
  }
  if (dropMenu.style.width == "0px") {
    dropMenu.style.width = "100vw";
    oopen.style.transform = "scale(0)";
    closee.style.transform = "scale(1)";
  } else {
    dropMenu.style.width = "0px";
    oopen.style.transform = "scale(1)";
    closee.style.transform = "scale(0)";
  }
});

let lastScrollY = window.scrollY;
const stickyDiv = document.querySelector(".add-class1");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    // Scrolling up → Make it sticky

    stickyDiv.style.position = "sticky";
    stickyDiv.style.top = "0";
  } else {
    // Scrolling down → Remove stickiness
    stickyDiv.style.position = "relative";
    stickyDiv.style.top = "-10px";
  }
  lastScrollY = window.scrollY;
});
