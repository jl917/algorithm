/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) {
    return false;
  }

  for (let i = 1; i <= s.length / 2; i++) {
    let tmp = s.slice(0, i);
    let base = tmp;

    while (tmp.length < s.length) {
      tmp += base;
    }
    console.log(tmp)
    if (tmp === s) {
      return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern("aaa"));
console.log(repeatedSubstringPattern("aa"));
console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
