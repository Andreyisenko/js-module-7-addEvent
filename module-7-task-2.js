const formA = document.querySelector("#discount-form");
// console.log(formA);
formA.addEventListener("input", changeInput);
const result = document.querySelector("#output");
result.textContent = "";
// console.log(result);

function changeInput(event) {
  const stringSum = event.currentTarget.elements.price.value.trim();
  const stringDiscountPercent =
    event.currentTarget.elements.discount.value.trim();
  const sum = +stringSum;
  const discountPercent = +stringDiscountPercent;
  result.style.color = "green";
  if (
    stringSum === "" ||
    stringDiscountPercent === "" ||
    sum < 0 ||
    discountPercent < 0 ||
    isNaN(sum) ||
    isNaN(discountPercent) ||
    discountPercent > 100
  ) {
    result.style.color = "red";
    result.textContent = "Некоректні дані для розрахунку!";
    return;
  }
  const sumDiscount = (sum * discountPercent) / 100;
  const allSum = sum - sumDiscount;
  result.textContent = `Ціна товару: ${sum} грн
Знижка: ${discountPercent} %
Сума знижки: ${sumDiscount} грн
Ціна зі знижкою: ${allSum} грн`;
}
console.log(_.sum([1, 2, 5, 10]));
console.log(_.shuffle([1, 2, 5, 10]));
console.log(_.shuffle([1, 2, 5, 10]));
console.log(_.shuffle([1, 2, 5, 10]));
console.log(_.shuffle([1, 2, 5, 10]));
