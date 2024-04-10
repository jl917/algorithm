/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ans1 = [];
  const ans2 = [];

  for (const n of set1) {
    if (!set2.has(n)) {
      ans1.push(n);
    }
  }

  for (const n of set2) {
    if (!set1.has(n)) {
      ans2.push(n);
    }
  }
  return [ans1, ans2];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
