/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  let count = 0;

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const total = n1 + n2;
      map.set(total, map.has(total) ? map.get(total) + 1 : 1);
    }
  }

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const total = n3 + n4;
      count += map.get(0 - total) || 0;
    }
  }

  return count;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
console.log(fourSumCount([0], [0], [0], [0]));
