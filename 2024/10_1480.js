/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function (nums) {
//   let tmp = 0;
//   let result = [];
//   for (const num of nums) {
//     const val = num + tmp;
//     tmp = val;
//     result.push(val);
//   }
//   return result;
// };

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
