/**
 * @param {string} word
 * @return {boolean}
 */
var isPalindrome = function (word) {
  let start = 0;
  let end = word.length - 1;

  while (start <= end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));
