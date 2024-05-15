/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let num1 = 0;
  let num2 = 0;

  while (n > 0) {
    if (n % m === 0) {
      num2 += n;
    } else {
      num1 += n;
    }
    n--;
  }

  return num1 - num2;
};

console.log(differenceOfSums(10, 3));
console.log(differenceOfSums(5, 6));
console.log(differenceOfSums(5, 1));
