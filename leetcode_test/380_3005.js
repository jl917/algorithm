// https://leetcode.cn/problems/count-elements-with-maximum-frequency/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const map = new Map();
  let max = 0;
  let count = 0;

  for (const num of nums) {
    const value = map.get(num) || 0;
    map.set(num, value + 1);

    if (value + 1 > max) {
      max = value + 1;
    }
  }

  for (const [k, v] of map.entries()) {
    if (v === max) {
      count += v;
    }
  }
  return count;
};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
