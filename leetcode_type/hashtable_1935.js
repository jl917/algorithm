/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const set = new Set(brokenLetters.split(""));
  let count = 0;
  let isPass = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (!isPass) {
        count++;
      }
      isPass = false;
      continue;
    }

    if (!isPass && set.has(text[i])) {
      isPass = true;
    }
  }

  if (!isPass) {
    count++;
  }

  return count;
};

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
