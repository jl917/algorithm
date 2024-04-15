/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  const result = [];
  for (const word of words) {
    const strings = word.split(separator);
    for (const s of strings) {
      if (s) {
        result.push(s);
      }
    }
  }
  return result;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
console.log(splitWordsBySeparator(["|||"], "|"));
