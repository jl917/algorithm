/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  let count = 0;
  for (let i = 0; i < nums2.length; i++) {
    count += nums2[i] - nums1[i];
  }

  return count / nums2.length;
};

console.log(addedInteger([2, 6, 4], [9, 7, 5]));
console.log(addedInteger([10], [5]));
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1]));
