/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let start1 = 0;
  let end1 = matrix.length - 1;

  while (start1 < end1) {
    const mid = Math.floor(start1 + (end1 - start1 + 1) / 2);

    if (matrix[mid][0] === target) {
      return true;
    }

    if (matrix[mid][0] > target) {
      end1 = mid - 1;
    } else {
      start1 = mid;
    }
  }

  let base = start1;

  let start2 = 0;
  let end2 = matrix[0].length - 1;
  while (start2 <= end2) {
    const mid = Math.floor(start2 + (end2 - start2) / 2);

    if (matrix[base][mid] === target) {
      return true;
    }

    if (matrix[base][mid] > target) {
      end2 = mid - 1;
    } else {
      start2 = mid + 1;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    1
  )
);

console.log(searchMatrix([[1]], 1));
