/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const list = [];

  const backtracking = function (index, sum) {
    if (list.length === k && sum === n) {
      result.push(list.slice());
      return;
    }

    for (let i = index; i < 10; i++) {
      if (sum + i > n) {
        break;
      }
      list.push(i);
      sum += i;
      backtracking(i + 1, sum);
      list.pop();
      sum -= i;
    }
  };

  backtracking(1, 0);
  return result;
};

console.log(combinationSum3(4, 1));
