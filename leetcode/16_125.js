/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
