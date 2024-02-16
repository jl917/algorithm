/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let base = null;

  for (const interval of intervals) {
    if (base === null) {
      base = interval[1];
      continue;
    }

    if (base > interval[0]) {
      count++;
    } else {
      base = interval[1];
    }
  }
  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
