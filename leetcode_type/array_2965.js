/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const set = new Set();
  let repeatNumber;
  let total = 0;
  let count = 0;
  const length = grid.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      total += grid[i][j];
      count += i * length + j + 1;

      if (set.has(grid[i][j])) {
        repeatNumber = grid[i][j];
      } else {
        if (repeatNumber) {
          continue;
        }
        set.add(grid[i][j]);
      }
    }
  }

  return [repeatNumber, count + repeatNumber - total];
};
console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);

// 8 - 2;
// 10;

console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);

// 49 - 9;
// 45;
