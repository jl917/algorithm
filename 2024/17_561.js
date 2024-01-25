/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let count = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    count += nums[i];
  }

  return count;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
