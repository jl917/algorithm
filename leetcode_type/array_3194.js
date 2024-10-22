/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b)
  let min = nums[nums.length - 1]

  for (let i = 0; i < nums.length / 2; i++) {
    const average = (nums[i] + nums[nums.length - 1 - i]) / 2;
    min = Math.min(min, average);
  }

  return min;
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]))
console.log(minimumAverage([1, 9, 8, 3, 10, 5]))
console.log(minimumAverage([1, 2, 3, 7, 8, 9]))