let searchItem = document.querySelector(".search-item");
let signInBtn = document.querySelector(".sign-in-btn");
let bagIcon = document.querySelector(".bag");

searchItem.addEventListener("focus", function () {
  bagIcon.style.visibility = "hidden";
  signInBtn.style.visibility = "hidden"; // Hides the bag icon when searchItem is focused
});

searchItem.addEventListener("blur", function () {
  bagIcon.style.visibility = "visible";
  signInBtn.style.visibility = "visible"; // Shows the bag icon when searchItem loses focus
});
