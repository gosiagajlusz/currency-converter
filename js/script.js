

{
  const calculateResult = (rate, money) => {
    const euroRate = 4.48;
    const dolarRate = 4.08;
    const frankSzwajcarskiRate = 4.57;

    switch (rate) {
      case "euro":
        return money * euroRate;

      case "dolar":
        return money * dolarRate;

      case "frank szwajcarski":
        return money * frankSzwajcarskiRate;

    }
  };

  const valueInPlnUpdate = (result) => {
    const valueInPlnElement = document.querySelector(".js-valueInPln");
    valueInPlnElement.innerHTML = result.toFixed(2);
  }
  const onFormSubmit = (event) => {
    event.preventDefault();


    const moneyInput = document.querySelector(".js-form__money");
    const currencySelect = document.querySelector(".js-currency");

    const money = +moneyInput.value;
    const rate = currencySelect.value;
    let result = calculateResult(rate, money);
    valueInPlnUpdate(result);

  };


  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };
  init();

}
