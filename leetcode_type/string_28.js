/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length === needle.length) {
    return haystack === needle ? 0 : -1;
  }
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.slice(i).startsWith(needle)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));
console.log(strStr("abc", "c"));
console.log(strStr("a", "a"));
