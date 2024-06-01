/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) {
    return 0;
  }
  let min = Infinity;
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - k + 1; i++) {
    min = Math.min(min, nums[i] - nums[i + k - 1]);
  }

  return min;
};

console.log(minimumDifference([90], 1));
console.log(minimumDifference([9, 4, 1, 7], 2));
console.log(minimumDifference([9, 4, 1, 7], 3));
console.log(minimumDifference([9, 4, 1, 7], 4));
console.log(
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
);
