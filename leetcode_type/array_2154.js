/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  while (set.has(original)) {
    original *= 2;
  }

  return original;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
