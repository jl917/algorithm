/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = nums.length - 2; i > 0; i--) {
    if (nums[i] + nums[i - 1] > nums[i + 1]) {
      return nums[i - 1] + nums[i] + nums[i + 1];
    }
  }
  return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
