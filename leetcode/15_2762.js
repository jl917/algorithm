/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = nums[i];
    let min = nums[i];
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > max) {
        max = nums[j];
      } else if (nums[j] < min) {
        min = nums[j];
      } else {
      }

      if (max - min > 2) {
        break;
      }
      count++;
    }
  }
  return count;
};

console.log(continuousSubarrays([5, 4, 2, 4]));
console.log(continuousSubarrays([1, 2, 3]));
console.log(continuousSubarrays([65, 66, 67, 66, 66, 65, 64, 65, 65, 64]));
