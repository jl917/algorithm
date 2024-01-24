/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let count = 0;
  if (prices.length < 2) {
    return count;
  }

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      count += prices[i + 1] - prices[i];
    }
  }
  return count;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
