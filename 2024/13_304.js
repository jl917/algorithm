/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;

  this.matrixSum = [];
  for (let i = 0; i < matrix.length; i++) {
    const rowSum = [0];
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum.push(matrix[i][j] + rowSum[rowSum.length - 1]);
    }
    this.matrixSum.push(rowSum);
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;

  for (let i = row1; i < row2 + 1; i++) {
    sum += this.matrixSum[i][col2 + 1] - this.matrixSum[i][col1];
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const m = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(m.sumRegion(2, 1, 4, 3));
console.log(m.sumRegion(1, 1, 2, 2));
console.log(m.sumRegion(1, 2, 2, 4));

// const m2 = new NumMatrix([
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
// ]);

// // m2.sumRegion(0, 0, 4, 4);
// m2.sumRegion(1, 1, 2, 2);
