/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set = new Set();
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);

  for (const num of set2.values()) {
    if (set1.has(num)) {
      set.add(num);
    }
    set1.add(num);
  }

  for (const num of set3.values()) {
    if (set1.has(num)) {
      set.add(num);
    }
    set1.add(num);
  }

  return [...set];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
