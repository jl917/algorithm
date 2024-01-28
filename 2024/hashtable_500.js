/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const map = new Map();
  const result = [];
  const keys = ["qwertyuiopQWERTYUIOP", "asdfghjklASDFGHJKL", "zxcvbnmZXCVBNM"];

  for (let i = 0; i < keys.length; i++) {
    for (const s of keys[i]) {
      map.set(s, i);
    }
  }

  for (const word of words) {
    const type = map.get(word[0]);
    let isMatch = true;
    for (const s of word) {
      if (map.get(s) !== type) {
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

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
