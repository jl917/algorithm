/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if (low === 0 && high === 0) {
    return 0;
  }
  const start = low % 2 === 1 ? low : low + 1;
  const end = high % 2 === 1 ? high : high - 1;

  return (end - start) / 2 + 1;
};

console.log(countOdds(3, 7)); // 3    2737   3  3738   3
console.log(countOdds(8, 10)); // 1
