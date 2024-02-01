/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  const list = [];

  nums.sort((a, b) => a - b);

  const backtracking = function (index) {
    result.push(list.slice());

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      list.push(nums[i]);
      backtracking(i + 1);
      list.pop();
    }
  };
  backtracking(0);
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([2, 1, 2]));
