let euroInput = document.querySelector(".euro");
let rateInput = document.querySelector(".rate");
let formElement = document.querySelector(".js-form");
let valueInPlnElement = document.querySelector(".js-valueInPln");

formElement.addEventListener("submit", (event) => {
event.preventDefault();

let euro = euroInput.value;
let rate = rateInput.value;
let value = (euro*rate);
valueInPlnElement.innerText = value.toFixed(3);
});



