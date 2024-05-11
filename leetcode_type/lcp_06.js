/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let count = 0;

  for (let coin of coins) {
    while (coin > 0) {
      coin -= 2;
      count++;
    }
  }

  return count;
};

console.log(minCount([4, 2, 1]));
console.log(minCount([2, 3, 10]));
