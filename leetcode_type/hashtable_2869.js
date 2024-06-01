/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const set = new Set();
  for (let i = 1; i < k + 1; i++) {
    set.add(i);
  }

  for (let i = 0; i < nums.length; i++) {
    set.delete(nums[nums.length - 1 - i]);
    if (set.size === 0) {
      return i + 1;
    }
  }
};

console.log(minOperations([3, 1, 5, 4, 2], 2));
console.log(minOperations([3, 1, 5, 4, 2], 5));
console.log(minOperations([3, 2, 5, 3, 1], 3));
