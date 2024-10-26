/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const map = new Map();
  let max = -1;

  for (const n of nums) {
    if (map.has(n)) {
      max = Math.max(Math.abs(n), max);
    } else {
      map.set(0 - n, n);
    }
  }

  return max;
};

console.log(findMaxK([-1, 2, -3, 3]));
console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
