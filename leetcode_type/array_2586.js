/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const set = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = left; i <= right; i++) {
    const word = words[i];
    if (set.has(word[0]) && set.has(word[word.length - 1])) {
      count++;
    }
  }
  return count;
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4));
