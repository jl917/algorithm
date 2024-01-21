/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let count = 0;
  grid.forEach((arr) => {
    arr.sort((a, b) => b - a);
  });

  for (let i = 0; i < grid[0].length; i++) {
    let base = grid[0][i];
    for (let j = 1; j < grid.length; j++) {
      if (grid[j][i] > base) {
        base = grid[j][i];
      }
    }
    count += base;
  }
  return count;
};

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
);
