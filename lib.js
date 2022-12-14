const square = (n) => Math.pow(n, 2);

const fahrenheit = (celsius) => celsius * 1.8 + 32;

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => {
  let str2 = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(str2 - i).toUpperCase()) {
      return true;
    }
  }

  return false;
};

module.exports = {
  square,
  fahrenheit,
  rectangleArea,
  isPalindrome,
};
