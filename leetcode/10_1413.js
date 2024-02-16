/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = 1;
  const sums = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let sum = (sums.length ? sums[sums.length - 1] : 0) + num;
    sums.push(sum);

    if (sum < min) {
      min = sum;
    }
  }

  return min < 1 ? 1 - min : 1;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([1, 2]));
console.log(minStartValue([1, -2, -3]));
