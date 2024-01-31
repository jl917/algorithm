/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const list = [];

  nums.sort((a, b) => a - b);

  const backtracking = function (index, used) {
    if (list.length === nums.length) {
      result.push(list.slice());
    }

    for (let i = 0; i < nums.length; i++) {
      if (i !== 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }

      if (!used[i]) {
        list.push(nums[i]);
        used[i] = true;
        backtracking(i + 1, used);
        list.pop();
        used[i] = false;
      }
    }
  };
  backtracking(0, []);
  return result;
};

console.log(permuteUnique([1, 1, 2]));
