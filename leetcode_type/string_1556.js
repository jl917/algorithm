/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let result = "";
  let count = 0;

  if (n === 0) {
    return "0";
  }

  while (n >= 1) {
    if (count === 3) {
      result = `${n % 10}.${result}`;
      count = 0;
    } else {
      result = `${n % 10}${result}`;
    }
    n = Math.floor(n / 10);
    count++;
  }

  return result;
};

console.log(thousandSeparator(987));
console.log(thousandSeparator(1234));
