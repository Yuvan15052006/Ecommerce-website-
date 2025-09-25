// Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    productCards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = productCards[index];
    modalImg.src = card.querySelector("img").src;
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalPrice.textContent = card.querySelector("p").textContent;

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
