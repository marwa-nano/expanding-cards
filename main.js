const cards = document.querySelectorAll(".card-item");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("active");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("active");
  });
});
