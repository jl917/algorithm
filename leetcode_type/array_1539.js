/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const set = new Set(arr);
  let i = 1;
  while (k > 0) {
    if (!set.has(i)) {
      k--;
    }
    i++;
  }

  return i - 1;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
