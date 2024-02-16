/**
 * @param {number[]} matrix
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (matrix, target) {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (matrix[mid] === target) {
      return mid;
    }

    if (matrix[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (const matrixItems of matrix) {
    if (matrixItems[0] > target) {
      return false;
    }

    if (matrixItems[matrixItems.length - 1] < target) {
      continue;
    }

    if (binarySearch(matrixItems, target) !== -1) {
      return true;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ],
    5
  )
);
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    10
  )
);

console.log(searchMatrix([[-5]], -5));

console.log(searchMatrix([[-1, 3]], 3));
