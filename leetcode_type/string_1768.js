/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let length = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < length; i++) {
    result += word1[i] || "";
    result += word2[i] || "";
  }
  return result;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
