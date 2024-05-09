/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const result = [];
  const words = s.split(" ");
  for (const word of words) {
    result[parseInt(word.slice(word.length - 1), 10) - 1] = word.slice(
      0,
      word.length - 1
    );
  }

  return result.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
