/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let point0 = 0;
  let point1 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[point0]] = [nums[point0], nums[i]];
      if (point0 < point1) {
        [nums[i], nums[point1]] = [nums[point1], nums[i]];
      }
      point0++;
      point1++;
    } else if (nums[i] === 1) {
      [nums[i], nums[point1]] = [nums[point1], nums[i]];
      point1++;
    } else {
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
