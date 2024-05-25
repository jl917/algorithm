/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let i = num.length - 1;
  while (i > 0) {
    if (num[i] !== "0") {
      break;
    }
    i--;
  }

  return num.slice(0, i + 1);
};

console.log(removeTrailingZeros("51230100"));
console.log(removeTrailingZeros("123"));
