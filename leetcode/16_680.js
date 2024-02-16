/**
 * @param {string} s
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

var validPalindrome2 = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validPalindrome2(s, start + 1, end) ||
        validPalindrome2(s, start, end - 1)
      );
    }
    start++;
    end--;
  }

  return true;
};

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
console.log(
  validPalindrome(
    "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  )
); // true
