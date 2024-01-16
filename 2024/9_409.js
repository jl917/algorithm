/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  let count = 0;
  let isFirstOdd = true;

  for (const str of s) {
    map.set(str, map.get(str) ? map.get(str) + 1 : 1);
  }

  for (const value of map.values()) {
    if (value % 2 === 0) {
      count += value;
    } else {
      count += isFirstOdd ? value : value - 1;
      isFirstOdd = false;
    }
  }

  return count;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aaaaaccc"));
console.log(longestPalindrome("aabbcc"));
