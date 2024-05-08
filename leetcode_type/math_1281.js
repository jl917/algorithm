/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let count1 = 1;
  let count2 = 0;

  while (n >= 1) {
    count1 *= n % 10;
    count2 += n % 10;
    n = Math.floor(n / 10);
  }
  return count1 - count2;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
console.log(subtractProductAndSum(102));
