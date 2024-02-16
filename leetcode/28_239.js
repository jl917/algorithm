/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) {
    return nums;
  }

  const result = [];
  const current = [];

  for (let i = 0; i < nums.length; i++) {
    current.push(nums[i]);
    if (current.length >= k) {
      result.push(Math.max(...current));
      current.shift();
    }
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
