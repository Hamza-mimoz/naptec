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
