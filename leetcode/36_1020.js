/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const visited = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));
  let count = 0;

  const dfs = function (x, y) {
    for (let i = 0; i < 4; i++) {
      const nextX = x + dir[i][0];
      const nextY = y + dir[i][1];

      if (
        nextX < 0 ||
        nextY < 0 ||
        nextX >= grid.length ||
        nextY >= grid[0].length
      ) {
        continue;
      }

      if (visited[nextX][nextY] === false && grid[nextX][nextY] === 1) {
        visited[nextX][nextY] = true;
        dfs(nextX, nextY);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === grid.length - 1 ||
        j === grid[0].length - 1
      ) {
        if (visited[i][j] === false && grid[i][j] === 1) {
          visited[i][j] = true;
          dfs(i, j);
        }
      }
    }
  }
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (grid[i][j] === 1 && visited[i][j] === false) {
        count++;
      }
    }
  }
  return count;
};

// console.log(
//   numEnclaves([
//     [0, 0, 0, 0],
//     [1, 0, 1, 0],
//     [0, 1, 1, 0],
//     [0, 0, 0, 0],
//   ])
// );
// console.log(
//   numEnclaves([
//     [0, 1, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 0],
//   ])
// );

console.log(
  numEnclaves([
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  ])
);
