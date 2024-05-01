/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let tmp = "";
  let count = 0;
  let max = 0;
  for (const t of s) {
    if (t !== tmp) {
      tmp = t;
      count = 1;
    } else {
      count += 1;
    }
    max = Math.max(count, max);
  }

  return max;
};

console.log(maxPower("leetcode"));
console.log(maxPower("abbcccddddeeeeedcba"));
