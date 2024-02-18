/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === rowIndex) {
        row.push(1);
      } else {
        row.push((result[i - 1][j] || 0) + result[i - 1][j - 1]);
      }
    }
    result.push(row.slice());
  }
  return result[rowIndex];
};

console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
