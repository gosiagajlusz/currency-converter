let moneyInput = document.querySelector(".js-form__money");

let currencySelect = document.querySelector(".js-currency");

let formElement = document.querySelector(".js-form");

let valueInPlnElement = document.querySelector(".js-valueInPln");

let money = moneyInput.value;
let rate = currencySelect.value;

let euroRate = 4.48;
let dolarRate = 4.08;
let frankSzwajcarskiRate = 4.57;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let money = +moneyInput.value;
  let rate = currencySelect.value;
  console.log(money, rate);
  let result;
  
  switch (rate) {
    case "euro":
      result = money * euroRate;
      break;

    case "dolar":
      result = money * dolarRate;
      break;

    case "frank szwajcarski":
      result = money * frankSzwajcarskiRate;
      break;
  }
  valueInPlnElement.innerHTML = result.toFixed(2);
  });

