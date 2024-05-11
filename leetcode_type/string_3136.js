/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) {
    return false;
  }

  const set1 = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const set2 = new Set([
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);
  const set3 = new Set(["@", "#", "$"]);

  let isValid1 = false;
  let isValid2 = false;

  for (const s of word) {
    if (set3.has(s)) {
      return false;
    }

    if (set1.has(s)) {
      isValid1 = true;
    }
    if (set2.has(s)) {
      isValid2 = true;
    }
  }

  return isValid1 && isValid2;
};

console.log(isValid("234Adas"));
console.log(isValid("b3"));
console.log(isValid("a3$e"));
