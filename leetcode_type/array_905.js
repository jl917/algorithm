/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const b1 = [];
  const b2 = [];

  for (const num of nums) {
    if (num % 2) {
      b1.push(num);
    } else {
      b2.push(num);
    }
  }

  return [...b2, ...b1];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
