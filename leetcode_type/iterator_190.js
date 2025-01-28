/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const str = n.toString(2);
  let result = "";
  for (let s of str) {
    result = s + result;
  }

  while (result.length < 32) {
    result += '0';
  }

  return parseInt(result, 2);
};

console.log(reverseBits(0b00000010100101000001111010011100)); // 964176192
console.log(reverseBits(0b11111111111111111111111111111101)); // 3221225471
