/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const stack = [];
  const salePrices = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    salePrices.unshift(stack.length ? prices[i] - stack[stack.length -1] : prices[i]);
    stack.push(prices[i]);
  }

  return salePrices;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
