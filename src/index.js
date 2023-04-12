import validator from './validator.js';

const validateButton = document.getElementById('validate-btn');
validateButton.addEventListener("click", validateCreditCard);

function validateCreditCard() {
  const creditCardNumber = document.getElementById('card-number').value;
  if (validateNumbers(creditCardNumber)) {
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
    validator.getBank(creditCardNumber);
    showShopperInfo();
    return (creditCardNumber);
  } 
}

function validateNumbers(creditCardNumber) {
  const numbers = /^[0-9]+$/;
  if (creditCardNumber.match(numbers) && creditCardNumber.length === 16) {
    showModal();
    return true;
  }
  else {
    alert('Ingrese un número de tarjeta válido');
    return false;
  }
}

// Modal 
function showModal(){
  let modalContainer = document.getElementById('modal-container');
  let closeModal = document.getElementById('close');
  
  validateButton.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });
  
  closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
}

//Mostrar datos del comprador
function showShopperInfo() {
  let name = document.getElementById('name');
  let address = document.getElementById('address');
  let postalCode = document.getElementById('cp');
  let email = document.getElementById('email');

  localStorage.setItem("nombre", name.value);
  localStorage.setItem("direccion", address.value);
  localStorage.setItem("codigoPostal", postalCode.value);
  localStorage.setItem("email", email.value);


  document.getElementById("nombre-modal").textContent =
    localStorage.getItem('nombre');

  document.getElementById("direccion-modal").textContent =
    localStorage.getItem('direccion');

  document.getElementById("codigo-postal-modal").textContent =
    localStorage.getItem('codigoPostal');


  document.getElementById("correo-modal").textContent =
    localStorage.getItem('email');
}
