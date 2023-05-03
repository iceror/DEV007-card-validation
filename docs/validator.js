const validator = {
  isValid: function (creditCardNumber) {
    return luhnAlgorithm(creditCardNumber);
  },

  maskify: function (creditCardNumber) {
    let hideNumbers = creditCardNumber.substring(0, creditCardNumber.length - 4);
    hideNumbers = hideNumbers.replace(/\d/g, "#");
    hideNumbers = (hideNumbers + creditCardNumber.slice(-4));
    return hideNumbers;

  },

  getBank: function (creditCardNumber) {
    let bank = '';
    if (creditCardNumber.charAt(0) === '4') {
      bank = 'visa';
    } else if (creditCardNumber.substring(0, 2) === '34' || creditCardNumber.substring(0, 2) === '37') {
      bank = 'americanexpress';
    } else if (creditCardNumber.substring(0, 2) >= '51' && creditCardNumber.substring(0, 2) <= '55') {
      bank = 'MasterCard';
    } else {
      bank = 'banco-desconocido'
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