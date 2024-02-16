/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let total = 1;
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }

  while (n > 4) {
    total = total * 3;
    n -= 3;
  }
  return total * n;
};
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var integerBreak = function (n) {
//   const dp = new Array(n + 1).fill(0);
//   dp[2] = 1;

//   for (let i = 3; i <= n; i++) {
//     for (let j = 1; j < i; j++) {
//       dp[i] = Math.max(dp[i], Math.max(j * (i - j), dp[i - j] * j));
//     }
//   }

//   return dp[n];
// };

console.log(integerBreak(2));
console.log(integerBreak(10));
