/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const stage = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let x = 0;
  let y = 0;
  let loop = Math.floor(n / 2);

  let offset = 1;
  let count = 1;
  while (loop > 0) {
    let row = x;
    let col = y;

    while (col < n - offset) {
      stage[row][col] = count;
      count++;
      col++;
    }

    while (row < n - offset) {
      stage[row][col] = count;
      count++;
      row++;
    }

    while (col > x) {
      stage[row][col] = count;
      count++;
      col--;
    }

    while (row > y) {
      stage[row][col] = count;
      count++;
      row--;
    }

    x++;
    y++;
    offset++;
    loop--;
  }

  if (n % 2 === 1) {
    stage[x][y] = count;
  }

  return stage;
};

console.log(generateMatrix(1))
