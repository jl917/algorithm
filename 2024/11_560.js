/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]]);
  let count = 0;
  let prefixSums = 0;
  for (const num of nums) {
    prefixSums += num;

    if(map.get(prefixSums - k)){
      count += map.get(prefixSums - k);
    }

    map.set(prefixSums, map.get(prefixSums) ? map.get(prefixSums) + 1 : 1);
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, 0, -1], 0)); // 2
