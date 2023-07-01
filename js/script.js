let moneyInput = document.querySelector(".js-form__money");
//wpisywana kwota
let currencySelect = document.querySelector(".js-currency");
//to gdzie się wybiera walute
let formElement = document.querySelector(".js-form");
//formularz cały
let valueInPlnElement = document.querySelector(".js-valueInPln");
//kwota w złotówkach do wyświetlenia
let money = moneyInput.value;
let rate = currencySelect.value;
// let euroRate = 4.48
// let dolarRate = 4.08
// let frankSzwajcarskiRate = 4.57



// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();

//   switch (rate) {


//     case "euro":
//       valueInPlnElement = money * euroRate;
//       break;

//     case "dolar":
//       valueInPlnElement = money * dolarRate;
//       break;

//     case "frank szwajcarski":
//       valueInPlnElement = money * frankSzwajcarskiRate;
//       break;



//   }
//   valueInPlnElement.textContent = valueInPlnElement.toFixed(2);

// });


let euroRate = 4.48;
let dolarRate = 4.08;
let frankSzwajcarskiRate = 4.57;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let money = +moneyInput.value;
  let rate = currencySelect.value;
  console.log(money, rate);
  let result;
  //result to zmienna w ktorą się pakuje ten wynik

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
  //result wskakuje do wewnętrznego tekstu pola valueInPln
});

//podsumowując: traktowalam jak zmienną coś,co nią nie jest
//bo to jest napis, a nie zmienna xD