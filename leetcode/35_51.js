/**
 * @param {string[][]} chessStage
 * @param {row} number
 * @param {col} number
 * @return {boolean}
 */
const isValid = function (chessStage, row, col) {
  // 위\
  let r1 = row - 1;
  let c1 = col;
  while (r1 >= 0) {
    if (chessStage[r1][c1] === "Q") {
      return false;
    }
    r1--;
  }

  // 위좌
  let r2 = row - 1;
  let c2 = col - 1;
  while (r2 >= 0 && c2 >= 0) {
    if (chessStage[r2][c2] === "Q") {
      return false;
    }
    r2--;
    c2--;
  }

  // 위우
  let r3 = row - 1;
  let c3 = col + 1;
  while (r3 >= 0 && c3 < chessStage.length) {
    if (chessStage[r3][c3] === "Q") {
      return false;
    }
    r3--;
    c3++;
  }

  return true;
};
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];

  const chessStage = new Array(n).fill(0).map(() => new Array(n).fill("."));

  const backtracking = function (row, stage) {
    if (row >= n) {
      result.push(stage.map((e) => e.join('')));
      return "";
    }

    for (let col = 0; col < n; col++) {
      if (row === 0 || isValid(stage, row, col)) {
        stage[row][col] = "Q";
        backtracking(row + 1, chessStage);
        stage[row][col] = ".";
      }
    }
  };

  backtracking(0, chessStage);
  return result;
};

// solveNQueens(3);
console.log(solveNQueens(4));
console.log(solveNQueens(3));
console.log(solveNQueens(1));
console.log(solveNQueens(5));


// console.log(
//   isValid(
//     [
//       [".", "Q", "."],
//       ["Q", ".", "."],
//       [".", ".", "."],
//     ],
//     1,
//     0
//   )
// ); // false
// console.log(
//   isValid(
//     [
//       [".", ".", "Q"],
//       ["Q", ".", "."],
//       [".", ".", "."],
//     ],
//     1,
//     0
//   )
// ); // true

// console.log(
//   isValid(
//     [
//       [".", "Q", ".", "."],
//       [".", ".", ".", "Q"],
//       ["Q", ".", ".", "."],
//       [".", ".", "Q", "."],
//     ],
//     3,
//     2
//   )
// );
