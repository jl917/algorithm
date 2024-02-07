/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const visted = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));
  let result = 0;

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

      if (grid[nextX][nextY] === "1" && visted[nextX][nextY] === false) {
        visted[nextX][nextY] = true;
        dfs(nextX, nextY);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visted[i][j] === false && grid[i][j] === "1") {
        result += 1;
        dfs(i, j);
      }
    }
  }

  return result;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
