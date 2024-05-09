/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let max = 0;
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      max = nums[i];
      tmp = nums[i];
      continue;
    }

    if (nums[i] > nums[i - 1]) {
      tmp += nums[i];
    } else {
      tmp = nums[i];
    }

    max = Math.max(max, tmp);
  }

  return max;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum([100, 10, 1]));
