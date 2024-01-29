/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let start = 0;
  let end = x;

  while (start < end) {
    const mid = Math.floor(start + (end - start + 1) / 2);

    if (mid * mid > x) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }
  return start;
};
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(2));
console.log(mySqrt(5));
console.log(mySqrt(8));
console.log(mySqrt(16));
