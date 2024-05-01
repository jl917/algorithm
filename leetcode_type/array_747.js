/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  nums.sort((a, b) => b - a);

  return nums[0] >= nums[1] * 2 ? map.get(nums[0]) : -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
