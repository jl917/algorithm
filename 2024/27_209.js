/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let count = 0;
  let min = nums.length + 1;
  let total = 0;
  let slow = 0;

  for (const n of nums) {
    if (n >= target) {
      return 1;
    }

    total += n;
    count++;

    while (total >= target) {
      if (count < min) {
        min = count;
      }
      total -= nums[slow];
      slow++;
      count--;
    }
  }
  return min === nums.length + 1 ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
