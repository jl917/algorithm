/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end--;
    }
  }

  return nums[start];
};

console.log(findMin([1, 3, 5]));
console.log(findMin([2, 2, 2, 0, 1]));

console.log(findMin([3, 1, 3]));
