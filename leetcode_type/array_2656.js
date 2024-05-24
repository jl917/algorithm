/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  const max = Math.max(...nums);
  let count = 0;
  while (k > 0) {
    k--;
    count = count + max + k;
  }
  return count;
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
console.log(maximizeSum([5, 5, 5], 2));
