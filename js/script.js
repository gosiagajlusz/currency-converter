let moneyInput = document.querySelector(".js-form__money");
//wpisywana kwota
let currencySelect = document.querySelector(".js-currency");
//to gdzie się wybiera walute
let formElement = document.querySelector(".js-form");
//formularz cały
let valueInPlnElement = document.querySelector(".js-valueInPln");
//kwota w złotówkach do wyświetlenia
let euroRate = 4.48
let dolarRate = 4.08
let frankSzwajcarskiRate = 4.57
let money = moneyInput.value;
let rate = currencySelect.value;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  
  switch (rate) {
    case "euro":
      valueInPlnElement = money * euroRate;
      break;

    case "dolar":
      valueInPlnElement = money * dolarRate;
      break;

    case "frank szwajcarski":
      valueInPlnElement = money * frankSzwajcarskiRate;
      break;



  }
  valueInPlnElement.innerText = ${valueInPlnElement.toFixed(2)};

});
