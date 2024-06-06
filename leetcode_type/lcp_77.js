/**
 * @param {number[]} runes
 * @return {number}
 */
var runeReserve = function (runes) {
  let max = 1;
  let count = 1;
  runes.sort((a, b) => a - b);

  for (let i = 1; i < runes.length; i++) {
    if (runes[i] - runes[i - 1] > 1) {
      count = 1;
    } else {
      count++;
      max = Math.max(count, max);
    }
  }

  return max;
};

console.log(runeReserve([1, 3, 5, 4, 1, 7]));
console.log(runeReserve([1, 1, 3, 3, 2, 4]));
