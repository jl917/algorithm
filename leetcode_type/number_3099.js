/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let c = 0;
  let tmp = x;

  while (tmp >= 1) {
    c += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }

  return x % c === 0 ? c : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));
