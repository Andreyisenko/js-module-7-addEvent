const forM = document.querySelector("#tip-form");
const result = document.querySelector("#result");
result.textContent = "";
// console.log(result);

forM.addEventListener("submit", changeSubmit);
function changeSubmit(event) {
  event.preventDefault();
  result.style.color = "green";
  const sum = +event.target.elements.bill.value.trim();
  const ProsChai = +event.target.elements.tip.value.trim();
  result.textContent = "";

  if (sum <= 0 || ProsChai <= 0 || isNaN(sum) || isNaN(ProsChai)) {
    result.style.color = "red";
    result.textContent = "Не вірно введена сума чи відсоток чайових";
    return;
  }
  const sumChai = (sum * ProsChai) / 100;
  const total = sum + sumChai;
  result.textContent = `сума рахунку ${sum} грн. процент чайових ${ProsChai} %, сума чайових ${sumChai} грн, загальна сума до сплати ${total} грн.`;
}
