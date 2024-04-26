/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  const result = [];

  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;
    for (let j = 0; j < grid.length; j++) {
      max = Math.max(`${grid[j][i]}`.length, max);
    }
    result.push(max);
  }

  return result;
};

console.log(findColumnWidth([[1], [22], [333]]));
console.log(
  findColumnWidth([
    [-15, 1, 3],
    [15, 7, 12],
    [5, 6, -2],
  ])
);
