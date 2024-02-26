/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (const s of magazine) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1);
  }

  for (const s of ransomNote) {
    if (map.get(s)) {
      map.set(s, map.get(s) - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
