/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = new Map();
  const map2 = new Map();
  let patternIndex = "";
  let patternIndex2 = "";
  const words = s.split(' ');

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      patternIndex += map.get(pattern[i]);
    } else {
      map.set(pattern[i], i);
      patternIndex += i;
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (map2.has(words[i])) {
      patternIndex2 += map2.get(words[i]);
    } else {
      map2.set(words[i], i);
      patternIndex2 += i;
    }

    if (!patternIndex.startsWith(patternIndex2)) {
      return false;
    }
  }

  return patternIndex === patternIndex2;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));

