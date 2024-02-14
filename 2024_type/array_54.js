/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  const visited = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  let current = 0;
  let x = 0;
  let y = 0;

  const check = function () {
    visited[x][y] = true;
    result.push(matrix[x][y]);

    if (current === 0) {
      if (visited[x][y + 1] === false) {
        y++;
      } else if (visited[x + 1] && visited[x + 1][y] === false) {
        x++;
        current = 1;
      } else {
        return "";
      }
      check();
    } else if (current === 1) {
      if (visited[x + 1] && visited[x + 1][y] === false) {
        x++;
      } else if (visited[x][y - 1] === false) {
        y--;
        current = 2;
      } else {
        return "";
      }
      check();
    } else if (current === 2) {
      if (visited[x][y - 1] === false) {
        y--;
      } else if (visited[x - 1][y] === false) {
        x--;
        current = 3;
      } else {
        return "";
      }
      check();
    } else if (current === 3) {
      if (visited[x - 1][y] === false) {
        x--;
      } else if (visited[x][y + 1] === false) {
        y++;
        current = 0;
      } else {
        return "";
      }
      check();
    } else {
    }
  };

  check();
  return result;
};
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
