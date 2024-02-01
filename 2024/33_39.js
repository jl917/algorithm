/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const list = [];

  candidates.sort((a, b) => a - b);

  const backtracking = function (index, sum) {
    if (sum === target) {
      result.push(list.slice());
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] + sum > target) {
        break;
      }
      list.push(candidates[i]);
      sum += candidates[i];
      backtracking(i, sum);
      list.pop();
      sum -= candidates[i];
    }
  };

  backtracking(0, 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
// console.log(combinationSum([2], 1));
