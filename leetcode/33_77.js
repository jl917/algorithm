/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const list = [];

  const backtracking = function (index) {
    if (list.length === k) {
      result.push(list.slice());
    }

    for (let i = index; i < n + 1; i++) {
      if (list.length >= k) {
        break;
      }

      list.push(i);
      backtracking(i + 1);
      list.pop();
    }
  };

  backtracking(1);
  return result;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
console.log(combine(3, 3));
