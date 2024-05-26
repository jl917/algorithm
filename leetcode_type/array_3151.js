/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  let current = nums[0] % 2;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === current) {
      return false;
    }
    current = nums[i] % 2;
  }

  return true;
};

console.log(isArraySpecial([1]));
console.log(isArraySpecial([2, 1, 4]));
console.log(isArraySpecial([4, 3, 1, 6]));
