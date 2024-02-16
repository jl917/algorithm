/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let y = 0;
  let tmp = x;

  while (tmp > 0) {
    y = (tmp % 10) + y * 10;
    tmp = parseInt(tmp / 10);
  }

  return x === y;
};

console.log(isPalindrome(123));
