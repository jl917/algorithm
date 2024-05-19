/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();

  for (const t of s) {
    if (set.has(t)) {
      return t;
    } else {
      set.add(t);
    }
  }
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
