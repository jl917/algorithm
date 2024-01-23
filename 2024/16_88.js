/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let cur = nums1.length - 1;

  while (n > 0) {
    if (nums2[n - 1] >= nums1[m - 1] || m === 0) {
      nums1[cur] = nums2[n - 1];
      n--;
    } else {
      [nums1[cur], nums1[m - 1]] = [nums1[m - 1], nums1[cur]];
      m--;
    }
    cur--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
