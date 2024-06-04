/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  if (k === 0) {
    return true;
  }
  let isFirst = true;
  let tmp = k;

  for (const num of nums) {
    if (num === 1) {
      if (tmp > 0 && !isFirst) {
        return false;
      }
      isFirst = false;

      tmp = k;
    } else {
      tmp--;
    }
  }

  return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));

console.log(kLengthApart([1, 1, 1, 1, 1], 0));
console.log(kLengthApart([0, 1, 0, 1], 1));
