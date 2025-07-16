document.getElementById("searchTemplates").addEventListener("input", function (e) {
  const searchValue = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".template-card");
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(searchValue) ? "block" : "none";
  });
});