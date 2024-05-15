/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let score = 0;

  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s[i].charCodeAt() - s[i - 1].charCodeAt());
  }
  return score;
};

console.log(scoreOfString("hello"));
console.log(scoreOfString("zaz"));
