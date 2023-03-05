const dropDown = document.querySelector(".pop-down");
const elm = document.getElementById("resource");

elm.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
  elm.classList.toggle("active");
  document.querySelector(".link").classList.toggle("dot");
});
