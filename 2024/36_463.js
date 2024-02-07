/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let total = 0;
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const getPerimeter = function (x, y) {
    let count = 4;
    for (let i = 0; i < 4; i++) {
      const newX = x + dir[i][0];
      const newY = y + dir[i][1];

      try {
        if (grid[newX][newY] === 1) {
          count--;
        }
      } catch {}
    }

    return count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        total += getPerimeter(i, j);
      }
    }
  }
  return total;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);

console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
