function updateProductNumber(product, price, isIncrease) {
  const productInput = document.getElementById(product + "-input");
  let productNumber = productInput.value;
  if (isIncrease) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-input");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;

  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const grandTotal = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("grand-total").innerText = grandTotal;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
