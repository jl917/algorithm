/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n).fill();
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n - 1];
};
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
