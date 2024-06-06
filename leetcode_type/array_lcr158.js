/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function (stock) {
  stock.sort((a, b) => a - b);
  return stock[Math.floor(stock.length / 2)];
};

console.log(inventoryManagement([6, 1, 3, 1, 1, 1]));
console.log(inventoryManagement([3, 3, 4]));
