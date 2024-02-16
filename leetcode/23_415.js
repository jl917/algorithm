/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const result = [];

  let isPlus = false;
  while (num1 || num2) {
    const sum = (num1.slice(-1) % 10) + (num2.slice(-1) % 10) + (isPlus ? 1 : 0);
    isPlus = false;
    if (sum >= 10) {
      isPlus = true;
    }

    result.unshift(`${sum % 10}`);
    num1 = num1.slice(0, -1);
    num2 = num2.slice(0, -1);
  }

  if (isPlus) {
    result.unshift("1");
  }

  return result.join("");
};

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
console.log(addStrings("999", "3"));
console.log(addStrings("9333852702227987", "85731737104263"));
