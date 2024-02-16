/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const visited = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));
  let result = 0;
  let total = 0;

  const dfs = function (x, y) {
    total++;
    if (total > result) {
      result = total;
    }
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

      if (visited[nextX][nextY] === false && grid[nextX][nextY]) {
        visited[nextX][nextY] = true;
        dfs(nextX, nextY, total + 1);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited[i][j] === false && grid[i][j] === 1) {
        visited[i][j] = true;
        dfs(i, j);
        total = 0;
      }
    }
  }
  return result;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
