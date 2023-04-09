const validator = {
  isValid: function (x) {
    return luhnAlgorithm(x);
  },

  maskify: function (x) {
    let hiddenNumbers = x.substring(0, x.length - 4);
    hiddenNumbers = hiddenNumbers.replace(/\d/g, "#");
    return hiddenNumbers + x.slice(-4);
  },

  getBank: function (creditCardNumber) {
    let bank = '';
    if (creditCardNumber.charAt(0) === '4') {
      bank = 'Visa';
    } else if (creditCardNumber.substring(0, 2) === '34' || creditCardNumber.substring(0, 2) === '37') {
      bank = 'AmericanExpress';
    } else if (creditCardNumber.substring(0, 2) >= '51' && creditCardNumber.substring(0, 2) <= '55') {
      bank = 'MasterCard';
    } else {
      bank = 'Banco desconocido'
    }
    return bank;
  }
};

function luhnAlgorithm(x) {
  let sum = 0;
  x = (x.split('').reverse().join(''));

  for (let i = 0; i < x.length; i++) {
    if (i % 2 === 1) {
      let odd = (x[i] * 2);

      if (odd > 9) {
        odd = Math.floor(odd / 10) + (odd % 10);
        // console.log(odd);
      }
      sum += Number(odd);
    } else {
      sum += Number(x[i]);
    }
  }
  return sum % 10 === 0;
}

export default validator;

//4083952015263