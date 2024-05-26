/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const codes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const set = new Set();

  for (const word of words) {
    let code = "";
    for (const s of word) {
      code += codes[s.charCodeAt(0) - 97];
    }
    set.add(code);
  }

  return set.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
console.log(uniqueMorseRepresentations(["a"]))
