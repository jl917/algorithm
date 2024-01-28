/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  let result = [];
  for (const digit of digits) {
    let tmp = [];
    if (result.length === 0) {
      result = map.get(digit).split("");
      continue;
    }

    for (const r of result) {
      for (const s of map.get(digit)) {
        tmp.push(r + s);
      }
    }
    result = tmp;
  }
  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
