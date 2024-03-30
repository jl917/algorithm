/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  if (k === mat[0].length) {
    return true;
  }

  if (k > mat[0].length) {
    k = k % mat[0].length;
  }

  for (let i = 0; i < mat.length; i++) {
    let line;
    if (i % 2 === 0) {
      line = [
        ...mat[i].slice(mat[i].length - k),
        ...mat[i].slice(0, mat[i].length - k),
      ];
    } else {
      line = [...mat[i].slice(k), ...mat[i].slice(0, k)];
    }

    if (line.join("-") !== mat[i].join("-")) {
      return false;
    }
  }

  return true;
};

// console.log(
//   areSimilar(
//     [
//       [1, 2, 1, 2],
//       [5, 5, 5, 5],
//       [6, 3, 6, 3],
//     ],
//     2
//   )
// );

// console.log(
//   areSimilar(
//     [
//       [2, 2],
//       [2, 2],
//     ],
//     3
//   )
// );

// console.log(areSimilar([[1, 2]], 1));

console.log(
  areSimilar(
    [
      [4, 9, 10, 10],
      [9, 3, 8, 4],
      [2, 5, 3, 8],
      [6, 1, 10, 4],
    ],
    5
  )
);
