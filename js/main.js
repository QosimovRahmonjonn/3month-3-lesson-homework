const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  document.body.classList.toggle("menu-closed");
});
// DARK MODE
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
