/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));
console.log(isPrefixOfWord("this problem is an easy problem", "pro"));
console.log(isPrefixOfWord("i am tired", "you"));
