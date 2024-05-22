/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const result = [[], []];
  const setWin = new Set();

  const setLose = new Set();
  const setLoseMap = new Set();

  for (const [w, l] of matches) {
    if (setLoseMap.has(l)) {
      setLose.delete(l);
    } else {
      setLose.add(l);
      setLoseMap.add(l);
    }
    setWin.add(w);
  }

  setLoseMap.forEach((e) => {
    setWin.delete(e);
  });
  result[0] = [...setWin].sort((a, b) => a - b);
  result[1] = [...setLose].sort((a, b) => a - b);

  return result;
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
