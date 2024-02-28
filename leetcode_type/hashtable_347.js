/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const n of nums) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  }

  const mapSort = [...map.entries()].sort((a, b) => b[1] - a[1]);
  mapSort.length = k
  return mapSort.map(e => e[0])
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
