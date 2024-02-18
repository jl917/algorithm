/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let total = 0;

  while (n >= 1) {
    const rest = Math.floor(n % 10);
    total += rest * rest;
    n = n / 10;
  }

  if (total > 9) {
    return isHappy(total);
  }

  return total === 1 || total === 7;
};

// console.log(isHappy(19));
// console.log(isHappy(2));
// console.log(isHappy(211));
console.log(isHappy(1111111));
