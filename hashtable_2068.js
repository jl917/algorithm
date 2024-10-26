/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const map = new Map();

  for (let i = 0; i < word1.length; i++) {
    map.set(word1[i], map.has(word1[i]) ? map.get(word1[i]) + 1 : 1);
    map.set(word2[i], map.has(word2[i]) ? map.get(word2[i]) - 1 : -1);
  }

  for (const value of map.values()) {
    if (value > 3 || value < -3) {
      return false;
    }
  }
  return true;
};

console.log(checkAlmostEquivalent("aaaa", "bccb"));
console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
console.log(checkAlmostEquivalent("cccddabba", "babababab"));
