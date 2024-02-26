// https://leetcode.cn/problems/split-the-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const map = new Map();

  for (const num of nums) {
    const current = map.get(num);
    if (current >= 2) {
      return false;
    }
    map.set(num, current ? current + 1 : 1);
  }

  return true;
};

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
console.log(isPossibleToSplit([1, 1, 1, 1]));
