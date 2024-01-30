/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let base = 1;
  let tmp = num;
  let count = 0;

  for (let i = 0; i < k; i++) {
    base *= 10;
  }

  while (tmp >= base / 10) {
    if (num % (Math.floor(tmp) % base) === 0) {
      count++;
    }
    tmp /= 10;
  }

  return count;
};


console.log(divisorSubstrings(100, 2));
console.log(divisorSubstrings(240, 2));
console.log(divisorSubstrings(430043, 2));
