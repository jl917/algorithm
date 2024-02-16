/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  const result = [];

  if (n < 10) {
    return n;
  }

  while (n >= 1) {
    result.unshift(parseInt(n % 10));
    n = n / 10;
  }

  for (let i = result.length - 2; i >= 0; i--) {
    if (result[i] > result[i + 1]) {
      result[i] = result[i] - 1;
      result.fill(9, i + 1);
    }
  }

  return parseInt(result.join(""), 10);
};

console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(332));
console.log(monotoneIncreasingDigits(0));
console.log(monotoneIncreasingDigits(100));
console.log(monotoneIncreasingDigits(1000));
console.log(monotoneIncreasingDigits(3333));
console.log(monotoneIncreasingDigits(4333));
console.log(monotoneIncreasingDigits(10000));
console.log(monotoneIncreasingDigits(101));
