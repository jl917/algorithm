/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = 0;
  let numsTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    total += i + 1;
    numsTotal += nums[i];
  }

  return total === numsTotal ? 0 : total - numsTotal;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));
