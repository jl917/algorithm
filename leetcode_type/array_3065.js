/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let count = 0;

  for (const num of nums) {
    if (num < k) {
      count++;
    }
  }
  return count;
};

console.log(minOperations([2, 11, 10, 1, 3], 10));
console.log(minOperations([1, 1, 2, 4, 9], 1));
console.log(minOperations([1, 1, 2, 4, 9], 9));
