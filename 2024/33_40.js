/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const list = [];

  candidates.sort((a, b) => a - b);

  const backtracking = function (index, sum, used) {
    if (sum === target) {
      result.push(list.slice());
      return "";
    }

    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] + sum > target) {
        break;
      }

      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (!used[i]) {
        list.push(candidates[i]);
        sum += candidates[i];
        backtracking(i + 1, sum, used);
        list.pop();
        sum -= candidates[i];
      }
    }
  };

  backtracking(0, 0, []);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
