/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const x = new Array(9).fill(0).map((e) => new Array(9).fill(0));
  const y = new Array(9).fill(0).map((e) => new Array(9).fill(0));
  const box = new Array(3)
    .fill(0)
    .map((e) => new Array(3).fill(0).map((e) => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const ind = parseInt(board[i][j], 10) - 1;

        x[i][ind]++;
        y[j][ind]++;
        box[Math.floor(i / 3)][Math.floor(j / 3)][ind]++;

        if (
          x[i][ind] > 1 ||
          y[j][ind] > 1 ||
          box[Math.floor(i / 3)][Math.floor(j / 3)][ind] > 1
        ) {
          return false;
        }
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
