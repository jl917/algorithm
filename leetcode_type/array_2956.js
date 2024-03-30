/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set([...nums1]);
  const set2 = new Set([...nums2]);

  let count1 = 0;
  let count2 = 0;

  for (const n of nums1) {
    count1 += set2.has(n) ? 1 : 0;
  }

  for (const n of nums2) {
    count2 += set1.has(n) ? 1 : 0;
  }

  return [count1, count2];
};

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));
console.log(findIntersectionValues([3, 4, 2, 3], [1, 5]));
