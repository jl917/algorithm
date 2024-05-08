/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0;
  let base = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > base) {
      base = nums[i];
    } else {
      const gap = base - nums[i] + 1;
      base = nums[i] + gap;
      count += gap;
    }
  }
  return count;
};

console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([8]));
