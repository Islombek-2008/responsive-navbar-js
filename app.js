let responsiveMenu = document.getElementById("responsive-menu");
let menuBtn = document.getElementById("menu-btn");
let backBtn = document.getElementById("back-btn");

menuBtn.addEventListener("click", function () {
  responsiveMenu.style.display = "block";
});

backBtn.addEventListener("click", function () {
  responsiveMenu.style.display = "none";
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    responsiveMenu.style.display = "none";
  }
});
