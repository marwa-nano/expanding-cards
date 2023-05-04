const cards = document.querySelectorAll(".card-item");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});
function removeActiveClass() {
  cards.forEach((card) => card.classList.remove("active"));
}
