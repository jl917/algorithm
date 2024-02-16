/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let base = null;

  for (const point of points) {
    if (base === null) {
      base = point[1];
      count++;
      continue;
    }

    if (base < point[0]) {
      base = point[1];
      count++;
    }
  }

  return count;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))

