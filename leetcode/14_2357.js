/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const set = new Set(nums);
  set.delete(0);
  return set.size;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));
