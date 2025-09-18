document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".offer-box");
  const totalPrice = document.getElementById("totalPrice");

  const prices = {
    1: 10,
    2: 18,
    3: 24
  };

  boxes.forEach(box => {
    const radio = box.querySelector("input[type=radio]");
    radio.addEventListener("change", () => {
      boxes.forEach(b => b.classList.remove("active"));
      box.classList.add("active");
      totalPrice.textContent = `$${prices[box.dataset.offer]}.00 USD`;
    });
  });
});
