/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let val = num;

  while (val >= 1) {
    if (num % (val % 10) === 0) {
      count++;
    }
    val = Math.floor(val / 10);
  }

  return count;
};

console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
