/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0;
  const sums = [0];

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    sums.push(total);
  }

  for (let i = 1; i < sums.length; i++) {
    if (total - sums[i] === sums[i - 1]) {
      return i - 1;
    }
  }
  return - 1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
