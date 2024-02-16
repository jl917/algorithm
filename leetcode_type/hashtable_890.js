/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const map = new Map();
  const patternIndexs = [];
  const result = [];

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], i);
    }
    patternIndexs.push(map.get(pattern[i]));
  }

  for (const word of words) {
    const wordMap = new Map();
    let isMatch = true;
    for (let i = 0; i < word.length; i++) {
      if (!wordMap.has(word[i])) {
        wordMap.set(word[i], i);
      }

      if (patternIndexs[i] !== wordMap.get(word[i])) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      result.push(word);
    }
  }
  return result;
};

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
