/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let slow = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[slow] !== nums[i]) {
      slow++;
      nums[slow] = nums[i];
    }
  }
  nums.length = slow + 1;
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
