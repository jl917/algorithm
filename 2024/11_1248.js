/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const map = new Map([[0, 1]]);
  let count = 0;
  let prefix = 0;

  for (const num of nums) {
    prefix += num % 2;

    if (map.has(prefix - k)) {
      count += map.get(prefix - k);
    }

    map.set(prefix, map.has(prefix) ? map.get(prefix) + 1 : 1);
  }

  console.log(map)
  return count;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
