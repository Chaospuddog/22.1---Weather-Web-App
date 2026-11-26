const currentCityBtn = document.querySelector(".cityButton");
const citySearch = document.querySelector(".citySearchWrap");
const searchBackBtn = document.querySelector(".searchBackButton");

currentCityBtn.addEventListener("click", () => {
  citySearch.toggleAttribute("hidden");
});

searchBackBtn.addEventListener("click", () => {
  citySearch.toggleAttribute("hidden");
});
