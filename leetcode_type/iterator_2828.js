/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  if (words.length !== s.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) {
      return false;
    }
  }

  return true;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
console.log(isAcronym(["an", "apple"], "a"));
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
