/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function (n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
