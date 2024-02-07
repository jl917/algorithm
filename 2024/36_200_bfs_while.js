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
  const visited = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));
  let result = 0;

  const bfs = (queue) => {
    while(queue.length > 0){
      const current = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = current[0] + dir[i][0];
        const nextY = current[1] + dir[i][1];

        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX >= grid.length ||
          nextY >= grid[0].length
        ) {
          continue;
        }

        if (grid[nextX][nextY] === "1" && visited[nextX][nextY] === false) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY]);
        }
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited[i][j] === false && grid[i][j] === "1") {
        result += 1;
        visited[i][j] = true;
        bfs([[i, j]]);
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
