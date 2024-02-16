/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  const set = new Set();

  for (const num of nums) {
    if (map.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
      map.set(num, true);
    }
  }
  return [...set][0];
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
