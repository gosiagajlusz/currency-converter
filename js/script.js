let euroInput = document.querySelector(".form__euro");
let formElement = document.querySelector(".form");
let valueInPlnElement = document.querySelector(".js-valueInPln");
let rateInput = document.querySelector(".form__rate")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let euro = euroInput.value;
    let rate = rateInput.value;

    let value = (euro * rate);
    valueInPlnElement.innerText = value.toFixed(3);
});



