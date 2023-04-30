import validator from './validator.js';

const validateButton = document.getElementById('validate-btn');
validateButton.addEventListener("click", validateCreditCard);

function validateCreditCard() {
  const creditCardNumber = document.getElementById('card-number').value;
  if (validateNumbers(creditCardNumber)) {
    validator.isValid(creditCardNumber);
    document.getElementById("show-card-number").textContent = validator.maskify(creditCardNumber);

    const bankIssuer = validator.getBank(creditCardNumber);
    const imgBankIssuer = document.getElementById("card-issuer");
    imgBankIssuer.src = `img/${bankIssuer}.png`;

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
  const modalContainer = document.getElementById('modal-container');
  const closeModal = document.getElementById('close');
  
  validateButton.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });
  
  closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
}

//Mostrar datos del comprador
function showShopperInfo() {
  const name = document.getElementById('name');
  const address = document.getElementById('address');
  const postalCode = document.getElementById('cp');
  const email = document.getElementById('email');

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
