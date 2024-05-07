/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let count = 1;

  for (const num of nums) {
    if (num === 0) {
      return 0;
    } else {
      count *= num;
    }
  }

  return count > 0 ? 1 : -1;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
