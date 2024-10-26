/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  let count = 1;

  while (num1 !== num2) {
    if (num1 < num2) {
      num2 = num2 - num1;
    } else {
      num1 = num1 - num2;
    }
    count++;
  }

  return count;
};

console.log(countOperations(2, 3));
console.log(countOperations(10, 10));
