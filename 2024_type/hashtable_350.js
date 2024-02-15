/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];

  for (const num of nums1) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  for (const num of nums2) {
    if (map.get(num)) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
