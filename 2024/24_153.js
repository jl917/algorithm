/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  /* 循环不变式，如果left == right，则循环结束 */
  while (start < end) {
    /* 地板除，mid更靠近start */
    const mid = Math.floor(start + (end - start) / 2);
    /* 中值 > 右值，最小值在右半边，收缩左边界 */
    if (nums[mid] > nums[end]) {
      /* 因为中值 > 右值，中值肯定不是最小值，左边界可以跨过mid */
      start = mid + 1;
    } else {
      /* 因为中值 < 右值，中值也可能是最小值，右边界只能取到mid处 */
      end = mid;
    }
  }

  return nums[start];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
