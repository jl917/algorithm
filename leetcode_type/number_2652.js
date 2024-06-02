/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let total = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      total += i;
      continue;
    }
  }

  return total;
};

console.log(sumOfMultiples(7));
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(9));