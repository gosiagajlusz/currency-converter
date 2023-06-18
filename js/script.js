let moneyInput = document.querySelector(".form__money");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".form");
let valueInPlnElement = document.querySelector(".js-valueInPln");
let rateInput = document.querySelector(".form__rate");
//currencyElement

let euroRate = 4.48
let dolarRate = 4.08
let frankSzwajcarskiRate = 4.57




switch (currency) {
  case "EUR":
    valueInPlnElement = moneyInput / euroRate;
      break;

  case "dolar":
    valueInPlnElement = moneyInput / dolarRate;
      break;

  case "frankSzwajcarski":
    valueInPlnElement = moneyInput / frankSzwajcarskiRate;
      break;
}





formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let money = moneyInput.value;
  let rate = rateInput.value;
  //rate powinien sie zmieniac w zaleznosci od tego jaka waluta wybrana -polaczyc switch statement z 
  //tym mnozeniem tutaj- sprawdzic czy sie zgadzaja wszystkie zlapane elemety w js i czy sa aktualne
  //wszystkie nazwy i klasy 

  let value = (money * rate);
  valueInPlnElement.innerText = value.toFixed(2);
});

