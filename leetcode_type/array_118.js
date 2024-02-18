/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === numRows - 1) {
        row.push(1);
      } else {
        row.push((result[i - 1][j] || 0) + result[i - 1][j - 1]);
      }
    }
    result.push(row.slice());
  }
  return result;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));
