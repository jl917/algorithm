/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 1;
  let tmp = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      tmp++;

      max = Math.max(max, tmp);
    }else{
      tmp = 1;
    }
  }
  return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
