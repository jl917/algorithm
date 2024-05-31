/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const map = new Map();
  const result = [];
  const w1 = s1.split(" ");
  const w2 = s2.split(" ");

  for (const w of w1) {
    map.set(w, map.has(w) ? map.get(w) + 1 : 1);
  }

  for (const w of w2) {
    map.set(w, map.has(w) ? map.get(w) + 1 : 1);
  }

  for (const [word, count] of [...map.entries()]) {
    if (count === 1) {
      result.push(word);
    }
  }

  return result;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));
