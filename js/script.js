const cards = document.querySelectorAll(".list-products > .card-body");
const totalElement = document.querySelector(".total");

function updateTotal() {
  let total = 0;
  document
    .querySelectorAll(".list-products > .card-body")
    .forEach((card) => {
      const unitPrice = parseFloat(
        card.querySelector(".unit-price").textContent
      );
      const quantity = parseInt(
        card.querySelector(".quantity").textContent,
        10
      );
      total += unitPrice * quantity;
    });
  totalElement.textContent = total + " $";
}

cards.forEach((card) => {
  const plusBtn = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const trashBtn = card.querySelector(".fa-trash-alt");
  const heartBtn = card.querySelector(".fa-heart");
  const quantityElement = card.querySelector(".quantity");

  plusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent, 10);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });

  minusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent, 10);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });

  trashBtn.addEventListener("click", () => {
    card.remove();
    updateTotal();
  });

  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
  });
});
