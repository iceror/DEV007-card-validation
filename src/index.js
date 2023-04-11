import validator from './validator.js';

const validateButton = document.getElementById('validate-btn');
validateButton.addEventListener("click", validateCreditCard);

function validateCreditCard() {
  const creditCardNumber = document.getElementById('card-number').value;
  if (validateNumbers(creditCardNumber)) {
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
    validator.getBank(creditCardNumber);
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
    return false;
  }
}

// Modal 
let modalContainer = document.getElementById('modal-container');
let closeModal = document.getElementById('close');

validateButton.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});