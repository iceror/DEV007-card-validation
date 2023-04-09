import validator from './validator.js';

const validateButton = document.getElementById('validate-btn');
validateButton.addEventListener("click", validateCreditCard);

function validateCreditCard() {
  const creditCardNumber = document.getElementById('card-number').value;
  if (validateNumbers(creditCardNumber)) {
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
    return (creditCardNumber);
  }
}

function validateNumbers(creditCardNumber) {
  const numbers = /^[0-9]+$/;
  if (creditCardNumber.match(numbers) && creditCardNumber.length === 16) {
    return true;
  }
  else {
    alert('Ingrese un número de tarjeta válido');
    //return false;
  }
}