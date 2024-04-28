/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let count = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    count += i + 1;
    total += nums[i];
  }

  return count - total;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
