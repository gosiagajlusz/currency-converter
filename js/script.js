let moneyInput = document.querySelector(".form__money");
let formElement = document.querySelector(".form");
let valueInPlnElement = document.querySelector(".js-valueInPln");
let rateInput = document.querySelector(".form__rate");

//switch do poprawienia układ
switch(different rate for every currency) {
    case 1:
      if form__currencyType value=euro {
          let rate=4.48
      }
      break;
    case 2:
      if form__currencyType value=dolar {
          let rate=4.08
      }
      break;
      case 3:
      if form__currencyType value=frank szwajcarski {
          let rate=4.57
      }
      break;
    default:
      {
          let rate=4.48
      }
  }

//switch do poprawienia 


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let money = moneyInput.value;
    let rate = rateInput.value;

    let value = (money * rate);
    valueInPlnElement.innerText = value.toFixed(2);
});

/*
switch(different rate for every currency) {
  case 1:
    if form__currencyType value=euro {
        let rate=4.48
    }
    break;
  case 2:
    if form__currencyType value=dolar {
        let rate=4.08
    }
    break;
    case 3:
    if form__currencyType value=frank szwajcarski {
        let rate=4.57
    }
    break;
  default:
    {
        let rate=4.48
    }
}
//value=currency*rate
//

//zmienić miejsce euro na currency. potem if currency=np. euro to rate= cos tam if 
//<select name="form__currencyType"> value= euro to rate=
//if 
*/