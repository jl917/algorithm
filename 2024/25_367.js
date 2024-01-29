/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 1;
  let end = num;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (mid * mid >= num) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start * start === num;
};
console.log(isPerfectSquare(8));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(16));
