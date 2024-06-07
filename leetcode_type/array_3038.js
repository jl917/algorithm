/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let sum = nums[0] + nums[1];
  let count = 0;

  for (let i = 0; i < nums.length; i += 2) {
    if (!nums[i + 1] || nums[i] + nums[i + 1] !== sum) {
      return count;
    } else {
      count++;
    }
  }

  return count;
};

console.log(maxOperations([3, 2, 1, 4, 5]));
console.log(maxOperations([3, 2, 6, 1, 4]));
console.log(maxOperations([1, 1, 1, 1, 1, 1]));
