/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const set = new Set();

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length / 2; i++) {
    set.add((nums[i] + nums[nums.length - 1 - i]) / 2);
  }

  return set.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
console.log(distinctAverages([1, 100]));
