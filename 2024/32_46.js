/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const list = [];

  const backtracking = function (index, used) {
    if (list.length === nums.length) {
      result.push(list.slice());
    }

    for (let i = 0; i < nums.length; i++) {
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

console.log(permute([1, 2, 3]));
