const validator = {
  test: "is working",

  isValid: function (x) {
    return luhnAlgorithm(x);
  },

  maskify: function (x) {
    let hiddenNumbers = x.substring(0, x.length - 4);
    hiddenNumbers = hiddenNumbers.replace(/\d/g, "#");
    return hiddenNumbers + x.slice(-4);
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