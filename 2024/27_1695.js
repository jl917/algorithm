/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const set = new Set();
  let slow = 0;
  let max = 0;
  let total = 0;

  for (const n of nums) {
    while (set.has(n)) {
      total -= nums[slow];
      set.delete(nums[slow]);
      slow++;
    }

    set.add(n);
    total += n;

    if (total > max) {
      max = total;
    }
  }
  return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); //8
