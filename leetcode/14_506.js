/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const result = new Array(score.length);
  const map = {};
  for (let i = 0; i < score.length; i++) {
    map[score[i]] = i;
  }
  const maps = Object.entries(map);

  for (let i = 0; i < maps.length; i++) {
    let value = "";
    if (i === maps.length - 1) {
      value = "Gold Medal";
    } else if (i === maps.length - 2) {
      value = "Silver Medal";
    } else if (i === maps.length - 3) {
      value = "Bronze Medal";
    } else {
      value = `${maps.length - i}`;
    }
    result[maps[i][1]] = value;
  }
  return result;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
