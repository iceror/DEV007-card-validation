import validator from './validator.js';

const validateButton = document.getElementById('validate-btn');
validateButton.addEventListener("click", validateCreditCard);


function validateCreditCard() {
  const creditCardNumber = document.getElementById('card-number').value;
  validator.isValid(creditCardNumber);
  validator.maskify(creditCardNumber);
  return (creditCardNumber);
}