/**
 * @param {string} word
 * @return {string}
 */
var reverseStr = function (str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let reWord = "";

  for (let i = 0; i < word.length; i++) {
    reWord += word[i];
    if (word[i] === ch) {
      return `${reverseStr(reWord)}${word.slice(i+1)}`;
    }
  }

  return word;
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));
