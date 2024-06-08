/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(
      new Set(nums.slice(0, i + 1)).size - new Set(nums.slice(i + 1)).size
    );
  }
  return result;
};
console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
console.log(distinctDifferenceArray([3, 2, 3, 4, 2]));
