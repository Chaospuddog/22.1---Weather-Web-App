const currentCityBtn = document.querySelector(".cityButton");
const citySearch = document.querySelector(".citySearch");

currentCityBtn.addEventListener("click", () => {
  citySearch.toggleAttribute("hidden");
  console.log(citySearch);
});
