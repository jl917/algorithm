/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32.0];
};

console.log(convertTemperature(36.5));
console.log(convertTemperature(122.11));
