/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  const bit = n.toString(2);
  let revBit = "";
  for (const c of bit) {
    revBit += c === "1" ? "0" : "1";
  }
  return parseInt(revBit, 2);
};
console.log(bitwiseComplement(5)); // 2
console.log(bitwiseComplement(7)); // 0
console.log(bitwiseComplement(10)); // 5
