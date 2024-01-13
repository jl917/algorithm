/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let length = nums.length;
  let slow = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[slow];
      nums[slow] = nums[i];
      nums[i] = tmp;
      slow++;
      
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
