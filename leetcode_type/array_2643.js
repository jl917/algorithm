/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let result = [0, 0];

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
        if (count > result[1]) {
          result = [i, count];
        }
      }
    }
  }
  return result;
};

console.log(
  rowAndMaximumOnes([
    [0, 1],
    [1, 0],
  ])
);
console.log(
  rowAndMaximumOnes([
    [0, 0, 0],
    [0, 1, 1],
  ])
);
console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);
