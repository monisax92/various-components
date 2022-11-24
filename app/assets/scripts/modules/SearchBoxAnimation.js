const searchBtn = document.querySelector(".search-box__search-btn");
const searchInput = document.querySelector(".search-box__input");

const animateInput = () => {
  searchInput.classList.toggle("active");
};

searchBtn.addEventListener("click", animateInput);
