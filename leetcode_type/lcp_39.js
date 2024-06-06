/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function (source, target) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      const s = source[i][j];
      map.set(s, map.has(s) ? map.get(s) + 1 : 1);
    }
  }

  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target[i].length; j++) {
      const s = target[i][j];
      const sCount = map.get(s);
      if (sCount) {
        map.set(s, sCount - 1);
      } else {
        count++;
      }
    }
  }
  return count;
};

console.log(
  minimumSwitchingTimes(
    [
      [1, 3],
      [5, 4],
    ],
    [
      [3, 1],
      [6, 5],
    ]
  )
);
console.log(
  minimumSwitchingTimes(
    [
      [1, 2, 3],
      [3, 4, 5],
    ],
    [
      [1, 3, 5],
      [2, 3, 4],
    ]
  )
);
