/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const list = [];

  const backtracking = function (index) {
    result.push(list.slice());
    for (let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      backtracking(i + 1);
      list.pop();
    }
  };
  backtracking(0);
  return result;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
