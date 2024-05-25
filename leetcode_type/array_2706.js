/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);

  const rest = money - prices[0] - prices[1];

  return rest < 0 ? money : rest;
};

console.log(buyChoco([1, 2, 2], 3));
console.log(buyChoco([3, 2, 3], 3));
