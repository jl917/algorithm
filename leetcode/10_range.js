/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const range = function (nums, start, end) {
  const sums = [0];

  for (const num of nums) {
    sums.push(sums[sums.length - 1] + num);
  }

  return sums[end + 1] - sums[start];
};

console.log(range([1, 2, 3, 4, 5], 0, 3)); // 10
console.log(range([1, 2, 3, 4, 5], 1, 3)); // 10
