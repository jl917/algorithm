// 공식 x줄에 나오는 total 개수  x * (x+ 1) / 2

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let start = 0;
  let end = n;

  while (start < end) {
    const mid = Math.floor(start + (end - start + 1) / 2);
    const total = (mid * (mid + 1)) / 2;

    if (total <= n) {
      start = mid
    } else {
      end = mid - 1
    }
  }
  return start;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(10));
