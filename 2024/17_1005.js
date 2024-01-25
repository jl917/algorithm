/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let cur = 0;
  while (k > 0) {
    nums[cur] = -nums[cur];
    k--;
    if (nums[cur] === 0) {
      break;
    } else if (nums[cur + 1] < 0) {
      cur++;
    } else if (nums[cur + 1] >= 0) {
      nums.sort((a, b) => a - b);
      cur = 0;
    }
  }

  return nums.reduce((total, value) => total + value, 0);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
