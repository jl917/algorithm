/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      let repeatCount = 1;

      while (nums[i] === nums[i + 1]) {
        repeatCount++;
        i++;
      }

      if (repeatCount > maxCount) {
        maxCount = repeatCount;
      }
    }
  }
  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
