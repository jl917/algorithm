/**
 * @param {number} num
 * @return {boolean}
 */
var checkNumber = function (num) {
  let tmp = num;
  while (tmp >= 1) {
    if (num % (tmp % 10) !== 0) {
      return false;
    }
    tmp = Math.floor(tmp / 10);
  }
  return true;
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    if (checkNumber(i)) {
      result.push(i);
    }
  }
  return result;
};

console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));
