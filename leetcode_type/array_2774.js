/**
 * @param {string} str
 * @return {string}
 */
var reverse = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const set = new Set(words);
  let count = 0;

  for (const word of words) {
    const reverseWord = reverse(word);

    if (set.has(reverseWord) && word !== reverseWord) {
      count++;
      set.delete(word);
      set.delete(reverseWord);
    }
  }

  return count;
};

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
