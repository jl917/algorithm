/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
